const { biblio: Biblio, sequelize, material_type_dm: Material, collection_dm: Collection, biblio_copy: BibCopy, biblio_status_dm: BibStatus } = require('../models');
const { Op } = require('sequelize');
const countCopies = require('../utils/countCopies');

module.exports = {
    basicSearch: async (req, res, next) => {
        try {
            let {
                sort = "title", type = "ASC", search = "title", key = "", page = "1", limit = "10"
            } = req.query;

            sort = sort.toLowerCase();
            search = search.toLowerCase();
            key = key.toLowerCase();
            if (sort == 'date') sort = 'last_change_dt';

            page = parseInt(page);
            limit = parseInt(limit);
            let start = 0 + (page - 1) * limit;
            let end = page * limit;

            let biblios;

            if (search == 'author' || search == 'title') {
                biblios = await Biblio.findAndCountAll({
                    where: {
                        [search]: {
                            [Op.like]: sequelize.fn('LOWER', sequelize.col(`${search}`)),
                            [Op.like]: `%${key.toLowerCase()}%`
                        }
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
                });
            } else if (search == 'subject') {
                biblios = await Biblio.findAndCountAll({
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
                });
            }

            let count = biblios.count;
            let pagination = {};
            pagination.totalRows = count;
            pagination.totalPages = Math.ceil(count/limit);
            pagination.thisPageRows = biblios.rows.length;
            pagination.currentPage = page;
            pagination.next = end < count ? page + 1 : null;
            pagination.prev = start > 0 ? page - 1 : null;

            const data = biblios.rows.map(({
                bibid, create_dt, call_nmbr1, call_nmbr2, call_nmbr3, title, title_remainder, author, collection, material, copies
            }) => ({
                biblio_id: bibid,
                created_at: create_dt,
                call_number: [call_nmbr1, call_nmbr2, call_nmbr3].join(' '),
                title,
                subtitle: title_remainder,
                author,
                collection: collection.description,
                material: material.description,
                available: countCopies(copies),
                copies: copies.length
            }));

            return res.status(200).json({
                status: 'OK',
                message: 'Get Biblios success',
                pagination,
                data: data
            });
        } catch (error) {
            next(error);
        }
    },

    biblioDetail: async (req, res, next) => {
        try {
            const { biblio_id } = req.params;

            const biblio = await Biblio.findOne({
                where: {
                    bibid: biblio_id,
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
                        attributes: ['copyid', 'barcode_nmbr', 'status_cd'],
                        include: {
                            model: BibStatus,
                            as: 'status',
                            attributes: ['description']
                        }
                    }
                ],
            });

            if (!biblio) {
                return res.status(404).json({
                    status: 'NOT FOUND',
                    message: 'Biblio not found',
                    data: null
                });
            }

            const copiesData = biblio.copies.map(({copyid, barcode_nmbr, status_cd, status}) => ({
                copy_id: copyid,
                barcode: barcode_nmbr,
                status_code: status_cd,
                status: status.description
            }));

            const data = {
                biblio_id: biblio.bibid,
                created_at: biblio.create_dt,
                call_number: [biblio.call_nmbr1, biblio.call_nmbr2, biblio.call_nmbr3].join(' '),
                title: biblio.title,
                subtitle: biblio.title_remainder,
                subjects: [biblio.topic1, biblio.topic2, biblio.topic3].join(', '),
                author: biblio.author,
                responsibility: biblio.responsibility_stmt,
                collection: biblio.collection.description,
                material: biblio.material.description,
                copies: {
                    available: countCopies(biblio.copies),
                    totalCopies: biblio.copies.length,
                    copiesData
                },
                ddc: '',
                classification: '',
                edition: '',
                publication: '',
                publisher: '',
                publish_year: '',
                totalPages: '',
                other_detail: '',
                dimention: '',
                source: '',
                operator: '',
                id: '',
                isbn_issn: ''
            };

            return res.status(200).json({
                status: 'OK',
                message: 'Get Biblio detail success',
                data: data
            });
        } catch (error) {
            next(error);
        }
    }
}