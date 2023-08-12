const { sequelize, biblio_field: BibDetail } = require('../models');
const { Op } = require('sequelize');

module.exports = {
    allPublishers: async (req, res, next) => {
        try {
            const { key = '' } = req.query;

            const publishers = await BibDetail.findAll({
                where: {
                    tag: 260,
                    subfield_cd: 'b',
                    field_data: {
                        [Op.like]: sequelize.fn('LOWER', sequelize.col(`field_data`)),
                        [Op.like]: `${key.toLowerCase()}%`
                    }
                },
                attributes: [[sequelize.fn('DISTINCT', sequelize.col('field_data')), 'publisher']]
            });

            return res.status(200).json({
                status: 'OK',
                message: 'Get all publishers success',
                row: publishers.length,
                data: publishers
            });
        } catch (error) {
            next(error);
        }
    }
}