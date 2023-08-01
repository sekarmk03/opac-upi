'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('biblio_field', {
      bibid: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fieldid: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      tag: {
        type: Sequelize.INTEGER
      },
      ind1_cd: {
        type: Sequelize.STRING
      },
      ind2_cd: {
        type: Sequelize.STRING
      },
      subfield_cd: {
        type: Sequelize.STRING
      },
      field_data: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('biblio_field');
  }
};