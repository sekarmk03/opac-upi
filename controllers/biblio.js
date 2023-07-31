const { biblio: Biblio, sequelize, material_type_dm: Material, collection_dm: Collection } = require('../models');
const { Op, Sequelize } = require('sequelize');

module.exports = {
    basicSearch: async (req, res, next) => {
        try {
            let {
                sort = "title", type = "ASC", search = "title", key = "", page = "1", limit = "10"
            } = req.query;

            sort = sort.toLowerCase();
            search = search.toLowerCase();
            key = key.toLowerCase();

            page = parseInt(page);
            limit = parseInt(limit);
            let start = 0 + (page - 1) * limit;
            let end = page * limit;

            const biblios = await Biblio.findAndCountAll({
                where: {
                    [search]: {
                        [Op.like]: Sequelize.fn('LOWER', Sequelize.col(`${search}`)),
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
                    }
                ],
                order: [
                    [sort, type]
                ],
                limit: limit,
                offset: start,
            });

            let count = biblios.count;
            let pagination = {};
            pagination.totalRows = count;
            pagination.totalPages = Math.ceil(count/limit);
            pagination.thisPageRows = biblios.rows.length;
            pagination.currentPage = page;
            pagination.next = end < count ? page + 1 : null;
            pagination.prev = start > 0 ? page - 1 : null;

            const data = biblios.rows.map(({
                bibid, create_dt, call_nmbr1, call_nmbr2, call_nmbr3, title, title_remainder, author, collection, material
            }) => ({
                biblio_id: bibid,
                created_at: create_dt,
                call_number: [call_nmbr1, call_nmbr2, call_nmbr3].join(' '),
                title,
                subtitle: title_remainder,
                author,
                collection: collection.description,
                material: material.description
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
    }
}