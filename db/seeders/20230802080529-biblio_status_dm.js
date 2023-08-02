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
   await queryInterface.bulkInsert('biblio_status_dm', [
    {
      "code": "in",
      "description": "dikembalikan",
      "default_flg": "Y"
    },
    {
        "code": "out",
        "description": "dipinjam",
        "default_flg": "N"
    },
    {
        "code": "mnd",
        "description": "rusak",
        "default_flg": "N"
    },
    {
        "code": "dis",
        "description": "ruang display",
        "default_flg": "N"
    },
    {
        "code": "hld",
        "description": "dipesan",
        "default_flg": "N"
    },
    {
        "code": "lst",
        "description": "hilang",
        "default_flg": "N"
    },
    {
        "code": "ln",
        "description": "pinjaman",
        "default_flg": "N"
    },
    {
        "code": "ord",
        "description": "sedang dipesan",
        "default_flg": "N"
    },
    {
        "code": "crt",
        "description": "daftar shelving",
        "default_flg": "N"
    }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('biblio_status_dm', null, {});
  }
};
