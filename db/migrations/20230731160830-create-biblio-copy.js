'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('biblio_copy', {
      bibid: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      copyid: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      copy_desc: {
        type: Sequelize.STRING
      },
      barcode_nmbr: {
        type: Sequelize.STRING
      },
      status_cd: {
        type: Sequelize.STRING
      },
      status_begin_dt: {
        type: Sequelize.DATE
      },
      due_back_dt: {
        type: Sequelize.DATEONLY
      },
      mbrid: {
        type: Sequelize.INTEGER
      },
      renewal_count: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('biblio_copy');
  }
};