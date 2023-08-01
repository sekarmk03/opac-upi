'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biblio_field extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      biblio_field.belongsTo(models.biblio, {targetKey: 'bibid', foreignKey: 'bibid', as: 'source'});
    }
  }
  biblio_field.init({
    bibid: DataTypes.INTEGER,
    fieldid: DataTypes.INTEGER,
    tag: DataTypes.INTEGER,
    ind1_cd: DataTypes.STRING,
    ind2_cd: DataTypes.STRING,
    subfield_cd: DataTypes.STRING,
    field_data: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'biblio_field',
    tableName: 'biblio_field',
    freezeTableName: true,
    timestamps: false
  });
  biblio_field.removeAttribute('id');
  return biblio_field;
};