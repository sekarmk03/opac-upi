const { sequelize } = require('../models');
const { Op } = require('sequelize');

const generateCondition = (conditions, data, tag) => {
    let condition;
    if (tag == 'subject') {
        condition = {
            [Op.or]: data.map(keyword => ({
                [Op.or]: [
                    {
                        topic1: {
                            [Op.like]: sequelize.fn('LOWER', sequelize.col('topic1')),
                            [Op.like]: `%${keyword.toLowerCase()}%`
                        }
                    },
                    {
                        topic2: {
                            [Op.like]: sequelize.fn('LOWER', sequelize.col('topic2')),
                            [Op.like]: `%${keyword.toLowerCase()}%`
                        }
                    },
                    {
                        topic3: {
                            [Op.like]: sequelize.fn('LOWER', sequelize.col('topic3')),
                            [Op.like]: `%${keyword.toLowerCase()}%`
                        }
                    }
                ]
            }))
        };
    } else {
        condition = {
            [Op.or]: data.map(keyword => ({
                [tag]: {
                    [Op.like]: sequelize.fn('LOWER', sequelize.col(`${tag}`)),
                    [Op.like]: `%${keyword.toLowerCase()}%`
                }
            }))
        };
    }

    conditions.push(condition);
}

module.exports = generateCondition;