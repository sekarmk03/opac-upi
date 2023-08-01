'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biblio_copy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      biblio_copy.belongsTo(models.biblio, {targetKey: 'bibid', foreignKey: 'bibid', as: 'copy'});
      biblio_copy.belongsTo(models.biblio_status_dm, {targetKey: 'code', foreignKey: 'status_cd', as: 'status'});
    }
  }
  biblio_copy.init({
    bibid: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    copyid: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    copy_desc: DataTypes.STRING,
    barcode_nmbr: DataTypes.STRING,
    status_cd: DataTypes.STRING,
    status_begin_dt: DataTypes.DATE,
    due_back_dt: DataTypes.DATEONLY,
    mbrid: DataTypes.INTEGER,
    renewal_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'biblio_copy',
    tableName: 'biblio_copy',
    freezeTableName: true,
    timestamps: false,
  });
  biblio_copy.removeAttribute('id');
  return biblio_copy;
};