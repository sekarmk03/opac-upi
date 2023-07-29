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
    }
  }
  biblio.init({
    bibid: DataTypes.INTEGER,
    create_dt: DataTypes.DATE,
    last_change_dt: DataTypes.DATE,
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
  return biblio;
};