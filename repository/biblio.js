const { biblio: Biblio, sequelize, material_type_dm: Material, collection_dm: Collection, biblio_copy: BibCopy, biblio_status_dm: BibStatus, biblio_field: BibDetail } = require('../models');
const { Op, QueryTypes } = require('sequelize');
const reducePub = require('../utils/reducePub');
const removeDuplicate = require('../utils/removeDuplicate');
const generateCondition = require('../utils/generateCondition');

module.exports = {
    basicSearchRepo: async (search, key, sort, type, limit, start) => {
        const subjectConditions = [
            {
                topic1: {
                    [Op.like]: sequelize.fn('LOWER', sequelize.col('topic1')),
                    [Op.like]: `%${key.toLowerCase()}%`
                }
            },
            {
                topic2: {
                    [Op.like]: sequelize.fn('LOWER', sequelize.col('topic2')),
                    [Op.like]: `%${key.toLowerCase()}%`
                }
            },
            {
                topic3: {
                    [Op.like]: sequelize.fn('LOWER', sequelize.col('topic3')),
                    [Op.like]: `%${key.toLowerCase()}%`
                }
            },
            {
                topic4: {
                    [Op.like]: sequelize.fn('LOWER', sequelize.col('topic4')),
                    [Op.like]: `%${key.toLowerCase()}%`
                }
            },
            {
                topic5: {
                    [Op.like]: sequelize.fn('LOWER', sequelize.col('topic5')),
                    [Op.like]: `%${key.toLowerCase()}%`
                } 
            }
        ]
        let conditions = {};
        let order = [];

        if (search) {
            conditions = {
                [search]: {
                    [Op.like]: sequelize.fn('LOWER', sequelize.col(`${search}`)),
                    [Op.like]: `%${key.toLowerCase()}%`
                }
            }
        } else {
            conditions = {
                [Op.or]: [
                    {
                        title: {
                            [Op.like]: sequelize.fn('LOWER', sequelize.col(`title`)),
                            [Op.like]: `%${key.toLowerCase()}%`
                        }
                    },
                    {
                        author: {
                            [Op.like]: sequelize.fn('LOWER', sequelize.col(`author`)),
                            [Op.like]: `%${key.toLowerCase()}%`
                        }
                    },
                    ...subjectConditions
                ]
            }
        }

        if (sort == 'date') {
            let o = ['detail', 'field_data', type];
            order = [...o];
        } else {
            let o = [sort, type];
            order = [...o];
        }

        const biblios = await Biblio.findAndCountAll({
            where: conditions,
            include: [
                {
                    model: Collection,
                    as: 'collection',
                    attributes: ['description']
                },
                {
                    model: Material,
                    as: 'material',
                    attributes: ['description']
                },
                {
                    model: BibCopy,
                    as: 'copies',
                    attributes: ['status_cd'],
                },
                {
                    model: BibDetail,
                    as: 'detail',
                    attributes: [[sequelize.literal("CAST(field_data AS UNSIGNED)"), 'publisher']],
                    where: {
                        tag: '260',
                        subfield_cd: 'c',
                        // [Op.and]: sequelize.where(sequelize.fn('LENGTH', sequelize.col('field_data')), 4),
                        field_data: {
                            [Op.regexp]: '^[0-9]{4}$',
                        },
                    }
                }
            ],
            order: [
                order
            ],
            limit: limit,
            offset: start,
            distinct: true,
        });

        return biblios;
    },

    subjectSearch: async (search, key, sort, type, limit, start) => {
        const biblios = await Biblio.findAndCountAll({
            where: {
                [Op.or]: [
                    {
                        topic1: {
                            [Op.like]: sequelize.fn('LOWER', sequelize.col('topic1')),
                            [Op.like]: `%${key.toLowerCase()}%`
                        }
                    },
                    {
                        topic2: {
                            [Op.like]: sequelize.fn('LOWER', sequelize.col('topic2')),
                            [Op.like]: `%${key.toLowerCase()}%`
                        }
                    },
                    {
                        topic3: {
                            [Op.like]: sequelize.fn('LOWER', sequelize.col('topic3')),
                            [Op.like]: `%${key.toLowerCase()}%`
                        }
                    },
                    {
                        topic4: {
                            [Op.like]: sequelize.fn('LOWER', sequelize.col('topic4')),
                            [Op.like]: `%${key.toLowerCase()}%`
                        }
                    },
                    {
                        topic5: {
                            [Op.like]: sequelize.fn('LOWER', sequelize.col('topic5')),
                            [Op.like]: `%${key.toLowerCase()}%`
                        }
                    },
                ]
            },
            include: [
                {
                    model: Collection,
                    as: 'collection',
                    attributes: ['description']
                },
                {
                    model: Material,
                    as: 'material',
                    attributes: ['description']
                },
                {
                    model: BibCopy,
                    as: 'copies',
                    attributes: ['status_cd'],
                }
            ],
            order: [
                [sort, type]
            ],
            limit: limit,
            offset: start,
            distinct: true
        });

        return biblios;
    },

    findById: async (id) => {
        const biblio = await Biblio.findOne({
            where: {
                bibid: id,
            },
            include: [
                {
                    model: Collection,
                    as: 'collection',
                    attributes: ['description']
                },
                {
                    model: Material,
                    as: 'material',
                    attributes: ['description']
                },
                {
                    model: BibCopy,
                    as: 'copies',
                    attributes: ['copyid', 'barcode_nmbr', 'status_cd', 'status_begin_dt', 'due_back_dt'],
                    include: {
                        model: BibStatus,
                        as: 'status',
                        attributes: ['description']
                    }
                }
            ],
        });

        return biblio;
    },

    findDetailById: async (id) => {
        const biblioDetail = await BibDetail.findAll({
            where: {bibid: id},
            attributes: ['tag', 'subfield_cd', 'field_data']
        });

        return biblioDetail;
    },

    simpleBasicSearch: async (search, key) => {
        let query = `SELECT b.bibid, b.title, b.author, f.tag, f.subfield_cd, f.field_data FROM biblio AS b LEFT JOIN (SELECT * FROM biblio_field WHERE (tag=260 AND subfield_cd='b') OR (tag=260 AND subfield_cd='c')) as f ON b.bibid = f.bibid WHERE LOWER(b.${search}) LIKE '%${key}%'`;

        const biblios = await sequelize.query(query, { type: QueryTypes.SELECT });

        const finBiblios = reducePub(biblios);

        return finBiblios;
    },

    simpleSubjectSearch: async (key1, key2, key3) => {
        // let query = `SELECT subq.bibid, subq.title, subq.author, subq.tag, subq.subfield_cd, subq.field_data
        // FROM (
        //     SELECT b.bibid, b.title, b.author, f.tag, f.subfield_cd, f.field_data
        //     FROM biblio AS b
        //     LEFT JOIN (
        //         SELECT * FROM biblio_field
        //         WHERE (tag=260 AND subfield_cd='b') OR (tag=260 AND subfield_cd='c')
        //     ) AS f ON b.bibid = f.bibid
        //     WHERE LOWER(b.topic1) LIKE '%${key1}%'
        //         OR LOWER(b.topic2) LIKE '%${key1}%'
        //         OR LOWER(b.topic1) LIKE '%${key2}%'
        //         OR LOWER(b.topic2) LIKE '%${key2}%'
        //         OR LOWER(b.topic1) LIKE '%${key3}%'
        //         OR LOWER(b.topic2) LIKE '%${key3}%'
        // ) AS subq
        // GROUP BY subq.title;`;
        let query = `
            SELECT b.bibid, b.title, b.author, f.tag, f.subfield_cd, f.field_data
            FROM biblio AS b
            LEFT JOIN (
                SELECT * FROM biblio_field
                WHERE (tag=260 AND subfield_cd='b') OR (tag=260 AND subfield_cd='c')
            ) AS f ON b.bibid = f.bibid
            WHERE LOWER(b.topic1) LIKE '%${key1}%'
                OR LOWER(b.topic2) LIKE '%${key1}%'
                OR LOWER(b.topic1) LIKE '%${key2}%'
                OR LOWER(b.topic2) LIKE '%${key2}%'
                OR LOWER(b.topic1) LIKE '%${key3}%'
                OR LOWER(b.topic2) LIKE '%${key3}%'
        ;`;

        const biblios = await sequelize.query(query, { type: QueryTypes.SELECT });

        const redBiblios = reducePub(biblios);

        const finBiblios = removeDuplicate(redBiblios);

        return finBiblios;
    },

    advanceSearch: async (sort, type, limit, start, title, author, subject, material, collection, publisher, year, all) => {
        const conditions = [];
        const allConditions = [];
        const incConditons = [];

        if (!all || all == null || all.length == 0) {
            if (title && title.length > 0) generateCondition(conditions, title, 'title');
            if (author && author.length > 0) generateCondition(conditions, author, 'author');
            if (subject && subject.length > 0) generateCondition(conditions, subject, 'subject');
        } else {
            if (all && all.length > 0) generateCondition(allConditions, all, 'title');
            if (all && all.length > 0) generateCondition(allConditions, all, 'author');
            if (all && all.length > 0) generateCondition(allConditions, all, 'subject');
            conditions.push({
                [Op.or]: allConditions
            });
        }
        if (publisher && publisher.length > 0) generateCondition(incConditons, publisher, 'publisher');
        if (year && year.length > 0) generateCondition(incConditons, year, 'year');

        if (material != null && material != '' && material) {
            const materialCond = { material_cd: material };
            conditions.push(materialCond);
        }
        if (collection != null && collection != '' && collection) {
            const collectionCond = { collection_cd: collection };
            conditions.push(collectionCond);
        }

        let whereCondition;
        if (title.length > 0 || author.length > 0 || subject.length > 0 || material != null || collection != null || all != null) {
            whereCondition = {
                [Op.and]: conditions,
            };
        } else {
            whereCondition = {};
        }

        console.log(whereCondition);
        console.log(conditions);
        console.log(allConditions);
        console.log(allConditions[0]);
        console.log(allConditions[1]);
        console.log(allConditions[2]);

        let whereIncCondition;
        if (year.length > 0 || publisher.length > 0) {
            whereIncCondition = {
                [Op.and]: incConditons,
            };
        } else {
            whereIncCondition = {};
        }

        const biblios = await Biblio.findAndCountAll({
            where: whereCondition,
            include: [
                {
                    model: Collection,
                    as: 'collection',
                    attributes: ['description']
                },
                {
                    model: Material,
                    as: 'material',
                    attributes: ['description']
                },
                {
                    model: BibCopy,
                    as: 'copies',
                    attributes: ['status_cd'],
                },
                {
                    model: BibDetail,
                    as: 'detail',
                    attributes: ['tag', 'subfield_cd', 'field_data'],
                    where: whereIncCondition
                }
            ],
            order: [
                [sort, type]
            ],
            limit: limit,
            offset: start,
            distinct: true,
        });

        return biblios;
    },

    test: async () => {
        const bibid = [40925, 6835, 20045, 5168, 5033, 20868, 48725, 43402, 20179, 22695, 52088, 3272, 54732, 35348, 22514, 42814, 46283, 36850, 48614, 48645, 28601, 46506, 46465, 50200, 48644, 64025];
        const biblio = await BibDetail.findAll({where: {bibid: bibid}});

        return biblio;
    }
}