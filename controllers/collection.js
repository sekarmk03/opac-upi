const { collection_dm: Collection } = require('../models');

module.exports = {
    index: async (req, res, next) => {
        try {
            const collections = await Collection.findAll({
                attributes: ['code', 'description']
            });

            return res.status(200).json({
                status: 'OK',
                message: 'Get all collection success',
                data: collections
            });
        } catch (error) {
            next(error);
        }
    }
}