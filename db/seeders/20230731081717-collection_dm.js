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
   await queryInterface.bulkInsert('collection_dm', [
    {
      code: 1,
      description: 'Referensi, Lantai 2',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
    },
    {
      code: 2,
      description: 'Sirkulasi, Lantai 1',
      default_flg: 'N',
      days_due_back: 14,
      daily_late_fee: 500,
    },
    {
      code: 3,
      description: 'Reserve, Lantai 2',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
    },
    {
      code: 4,
      description: 'Indonesiana, Lantai 2',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
    },
    {
      code: 5,
      description: 'UPIana, Lantai 2',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
    },
    {
      code: 6,
      description: 'Koleksi Pemerintah, Lantai 2',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
    },
    {
      code: 7,
      description: 'Kurikulum, Lantai 2',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
    },
    {
      code: 8,
      description: 'PPS',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
    },
    {
      code: 9,
      description: 'Multimedia',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
    },
    {
      code: 10,
      description: 'KICC, Lantai 2',
      default_flg: 'N',
      days_due_back: 14,
      daily_late_fee: 500,
    },
    {
      code: 11,
      description: 'BI Corner, Lantai 2',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
    },
    {
      code: 12,
      description: 'Koleksi Anak, Lantai 1',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
    },
    {
      code: 13,
      description: 'Sirkulasi, Lantai 3',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
    },
    {
      code: 14,
      description: 'Koleksi Braille, Lantai 2',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
    },
    {
      code: 15,
      description: 'OLIB UPI, Google Play',
      default_flg: 'N',
      days_due_back: 7,
      daily_late_fee: 0,
    },
    {
      code: 16,
      description: 'UiTM, Lantai 2',
      default_flg: 'N',
      days_due_back: 0,
      daily_late_fee: 0,
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
    await queryInterface.bulkDelete('collection_dm', null, {});
  }
};
