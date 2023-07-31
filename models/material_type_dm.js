'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class material_type_dm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  material_type_dm.init({
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    description: DataTypes.TEXT,
    default_flg: DataTypes.STRING,
    image_file: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'material_type_dm',
    tableName: 'material_type_dm',
    freezeTableName: true,
    timestamps: false,
  });
  material_type_dm.removeAttribute('id');
  return material_type_dm;
};