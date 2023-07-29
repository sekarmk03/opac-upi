'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collection_dm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  collection_dm.init({
    code: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    default_flg: DataTypes.STRING,
    days_due_back: DataTypes.INTEGER,
    daily_late_fee: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'collection_dm',
    tableName: 'collection_dm',
    freezeTableName: true,
    timestamps: false,
  });
  return collection_dm;
};