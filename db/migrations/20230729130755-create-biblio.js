'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('biblio', {
      bibid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      create_dt: {
        type: Sequelize.DATE
      },
      last_change_dt: {
        type: Sequelize.DATE
      },
      material_cd: {
        type: Sequelize.INTEGER
      },
      collection_cd: {
        type: Sequelize.INTEGER
      },
      call_nmbr1: {
        type: Sequelize.STRING
      },
      call_nmbr2: {
        type: Sequelize.STRING
      },
      call_nmbr3: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      title_remainder: {
        type: Sequelize.STRING
      },
      responsibility_stmt: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      topic1: {
        type: Sequelize.STRING
      },
      topic2: {
        type: Sequelize.STRING
      },
      topic3: {
        type: Sequelize.STRING
      },
      topic4: {
        type: Sequelize.STRING
      },
      topic5: {
        type: Sequelize.STRING
      },
      opac_flg: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('biblio');
  }
};