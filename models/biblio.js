'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biblio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      biblio.belongsTo(models.material_type_dm, {targetKey: 'code', foreignKey: 'material_cd', as: 'material'});
      biblio.belongsTo(models.collection_dm, {targetKey: 'code', foreignKey: 'collection_cd', as: 'collection'});
      biblio.hasMany(models.biblio_copy, {targetKey: 'bibid', foreignKey: 'bibid', as: 'copies'});
    }
  }
  biblio.init({
    bibid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    create_dt: DataTypes.DATE,
    last_change_dt: DataTypes.DATE,
    last_change_userid: DataTypes.INTEGER,
    material_cd: DataTypes.INTEGER,
    collection_cd: DataTypes.INTEGER,
    call_nmbr1: DataTypes.STRING,
    call_nmbr2: DataTypes.STRING,
    call_nmbr3: DataTypes.STRING,
    title: DataTypes.STRING,
    title_remainder: DataTypes.STRING,
    responsibility_stmt: DataTypes.STRING,
    author: DataTypes.STRING,
    topic1: DataTypes.STRING,
    topic2: DataTypes.STRING,
    topic3: DataTypes.STRING,
    topic4: DataTypes.STRING,
    topic5: DataTypes.STRING,
    opac_flg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'biblio',
    tableName: 'biblio',
    timestamps: false,
    freezeTableName: true,
  });
  biblio.removeAttribute('id');
  return biblio;
};