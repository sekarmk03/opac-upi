'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('material_type_dm', {
      code: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      description: {
        type: Sequelize.TEXT
      },
      default_flg: {
        type: Sequelize.STRING
      },
      image_file: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('material_type_dm');
  }
};