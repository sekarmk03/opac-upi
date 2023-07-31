'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('material_type_dm', [
    {
      code: 1,
      description: 'Buku',
      default_flg: 'Y',
      image_file: 'book.gif'
    },
    {
      code: 3,
      description: 'CD',
      default_flg: 'N',
      image_file: 'cd.gif'
    },
    {
      code: 4,
      description: 'Tesis',
      default_flg: 'N',
      image_file: 'shim.gif'
    },
    {
      code: 5,
      description: 'Jurnal',
      default_flg: 'N',
      image_file: 'shim.gif'
    },
    {
      code: 6,
      description: 'KICC',
      default_flg: 'N',
      image_file: 'shim.gif'
    },
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('material_type_dm', null, {});
  }
};
