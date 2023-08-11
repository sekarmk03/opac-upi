const { sequelize, biblio_field: BibDetail } = require('../models');

module.exports = {
    allPublishers: async (req, res, next) => {
        try {
            const publishers = await BibDetail.findAll({
                where: {
                    tag: 260,
                    subfield_cd: 'b'
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