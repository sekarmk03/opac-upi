'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biblio_status_dm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  biblio_status_dm.init({
    code: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    description: DataTypes.STRING,
    default_flg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'biblio_status_dm',
    tableName: 'biblio_status_dm',
    freezeTableName: true,
    timestamps: false
  });
  biblio_status_dm.removeAttribute('id');
  return biblio_status_dm;
};