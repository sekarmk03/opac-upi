'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('collection_dm', {
      code: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      description: {
        type: Sequelize.TEXT
      },
      default_flg: {
        type: Sequelize.STRING
      },
      days_due_back: {
        type: Sequelize.INTEGER
      },
      daily_late_fee: {
        type: Sequelize.DECIMAL
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('collection_dm');
  }
};