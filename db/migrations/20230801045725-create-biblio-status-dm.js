'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('biblio_status_dm', {
      code: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING
      },
      default_flg: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('biblio_status_dm');
  }
};