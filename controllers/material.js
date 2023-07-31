const { material_type_dm: Material } = require('../models');

module.exports = {
    index: async (req, res, next) => {
        try {
            const materials = await Material.findAll({
                attributes: ['code', 'description']
            });

            return res.status(200).json({
                status: 'OK',
                message: 'Get all material type success',
                data: materials
            });
        } catch (error) {
            next(error);
        }
    }
}