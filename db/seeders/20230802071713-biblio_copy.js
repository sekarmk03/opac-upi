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
   await queryInterface.bulkInsert('biblio_copy', [
    {
      "bibid": 1,
      "copyid": 1,
      "copy_desc": "",
      "barcode_nmbr": "a0008827",
      "status_cd": "in",
      "status_begin_dt": "2015-03-26 12:28:21",
      "due_back_dt": null,
      "mbrid": null,
      "renewal_count": 0
    },
    {
        "bibid": 1,
        "copyid": 2,
        "copy_desc": "",
        "barcode_nmbr": "a0008772",
        "status_cd": "in",
        "status_begin_dt": "2014-10-21 11:58:37",
        "due_back_dt": null,
        "mbrid": 0,
        "renewal_count": 0
    },
    {
        "bibid": 1,
        "copyid": 3,
        "copy_desc": "",
        "barcode_nmbr": "a0056968",
        "status_cd": "mnd",
        "status_begin_dt": "2012-07-31 14:02:11",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 0
    },
    {
      "bibid": 5,
      "copyid": 1,
      "copy_desc": "",
      "barcode_nmbr": "a0008924",
      "status_cd": "in",
      "status_begin_dt": "2010-12-29 13:50:17",
      "due_back_dt": null,
      "mbrid": null,
      "renewal_count": 0
    },
    {
      "bibid": 6,
      "copyid": 1,
      "copy_desc": "",
      "barcode_nmbr": "a0008969",
      "status_cd": "in",
      "status_begin_dt": "2010-06-15 10:23:22",
      "due_back_dt": null,
      "mbrid": null,
      "renewal_count": 0
    },
    {
        "bibid": 6,
        "copyid": 2,
        "copy_desc": "",
        "barcode_nmbr": "a0008968",
        "status_cd": "in",
        "status_begin_dt": "2009-11-14 03:48:19",
        "due_back_dt": null,
        "mbrid": 0,
        "renewal_count": 0
    },
    {
        "bibid": 6,
        "copyid": 3,
        "copy_desc": "128990",
        "barcode_nmbr": "a0008971",
        "status_cd": "in",
        "status_begin_dt": "2020-01-08 09:53:48",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 0
    },
    {
        "bibid": 6,
        "copyid": 4,
        "copy_desc": "128991",
        "barcode_nmbr": "a0008970",
        "status_cd": "in",
        "status_begin_dt": "2020-01-08 09:54:51",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 0
    },
    {
      "bibid": 7,
      "copyid": 1,
      "copy_desc": "",
      "barcode_nmbr": "a0008817",
      "status_cd": "in",
      "status_begin_dt": "2021-12-01 08:38:17",
      "due_back_dt": null,
      "mbrid": 0,
      "renewal_count": 0
    },
    {
      "bibid": 8,
      "copyid": 2,
      "copy_desc": "131500",
      "barcode_nmbr": "a0178805",
      "status_cd": "in",
      "status_begin_dt": "2023-03-08 14:17:35",
      "due_back_dt": null,
      "mbrid": null,
      "renewal_count": 0
    },
    {
      "bibid": 10,
      "copyid": 1,
      "copy_desc": "",
      "barcode_nmbr": "a0003771",
      "status_cd": "in",
      "status_begin_dt": "2017-03-01 09:11:05",
      "due_back_dt": null,
      "mbrid": 0,
      "renewal_count": 0
    },
    {
      "bibid": 11,
      "copyid": 1,
      "copy_desc": "",
      "barcode_nmbr": "a0008734",
      "status_cd": "in",
      "status_begin_dt": "2008-06-17 14:03:34",
      "due_back_dt": null,
      "mbrid": null,
      "renewal_count": 0
    },
    {
        "bibid": 11,
        "copyid": 2,
        "copy_desc": "",
        "barcode_nmbr": "a0008735",
        "status_cd": "in",
        "status_begin_dt": "2008-06-17 14:03:42",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 0
    },
    {
        "bibid": 11,
        "copyid": 3,
        "copy_desc": "",
        "barcode_nmbr": "a0009032",
        "status_cd": "in",
        "status_begin_dt": "2015-03-17 13:45:08",
        "due_back_dt": null,
        "mbrid": 0,
        "renewal_count": 0
    },
    {
        "bibid": 11,
        "copyid": 4,
        "copy_desc": "",
        "barcode_nmbr": "a0009033",
        "status_cd": "in",
        "status_begin_dt": "2009-03-14 09:56:31",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 0
    },
    {
      "bibid": 21,
      "copyid": 1,
      "copy_desc": "",
      "barcode_nmbr": "a0044455",
      "status_cd": "in",
      "status_begin_dt": "2018-09-13 13:01:57",
      "due_back_dt": null,
      "mbrid": null,
      "renewal_count": 0
    },
    {
        "bibid": 21,
        "copyid": 2,
        "copy_desc": "",
        "barcode_nmbr": "a0044703",
        "status_cd": "in",
        "status_begin_dt": "2017-01-04 12:27:36",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 0
    },
    {
        "bibid": 21,
        "copyid": 3,
        "copy_desc": "",
        "barcode_nmbr": "a0044295",
        "status_cd": "in",
        "status_begin_dt": "2017-11-06 10:45:48",
        "due_back_dt": null,
        "mbrid": 0,
        "renewal_count": 0
    },
    {
        "bibid": 21,
        "copyid": 4,
        "copy_desc": "",
        "barcode_nmbr": "a0044619",
        "status_cd": "in",
        "status_begin_dt": "2020-01-14 11:53:01",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 1
    },
    {
        "bibid": 21,
        "copyid": 5,
        "copy_desc": "",
        "barcode_nmbr": "a0044547",
        "status_cd": "in",
        "status_begin_dt": "2019-03-27 11:19:50",
        "due_back_dt": null,
        "mbrid": 0,
        "renewal_count": 0
    },
    {
        "bibid": 21,
        "copyid": 6,
        "copy_desc": "",
        "barcode_nmbr": "a0061367",
        "status_cd": "in",
        "status_begin_dt": "2018-09-14 17:18:52",
        "due_back_dt": null,
        "mbrid": 0,
        "renewal_count": 0
    },
    {
      "bibid": 30,
      "copyid": 2,
      "copy_desc": "",
      "barcode_nmbr": "a0173425",
      "status_cd": "in",
      "status_begin_dt": "2020-01-31 09:59:44",
      "due_back_dt": null,
      "mbrid": null,
      "renewal_count": 0
    },
    {
      "bibid": 88,
      "copyid": 1,
      "copy_desc": "",
      "barcode_nmbr": "a0025090",
      "status_cd": "mnd",
      "status_begin_dt": "2013-05-01 11:10:50",
      "due_back_dt": null,
      "mbrid": null,
      "renewal_count": 0
    },
    {
        "bibid": 88,
        "copyid": 2,
        "copy_desc": "",
        "barcode_nmbr": "a0025088",
        "status_cd": "in",
        "status_begin_dt": "2015-12-29 09:59:27",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 0
    },
    {
        "bibid": 88,
        "copyid": 3,
        "copy_desc": "",
        "barcode_nmbr": "a0025091",
        "status_cd": "in",
        "status_begin_dt": "2017-02-07 12:18:31",
        "due_back_dt": null,
        "mbrid": 0,
        "renewal_count": 0
    },
    {
        "bibid": 88,
        "copyid": 4,
        "copy_desc": "",
        "barcode_nmbr": "a0024829",
        "status_cd": "in",
        "status_begin_dt": "2016-03-16 20:14:21",
        "due_back_dt": null,
        "mbrid": 0,
        "renewal_count": 0
    },
    {
        "bibid": 88,
        "copyid": 5,
        "copy_desc": "",
        "barcode_nmbr": "a0024789",
        "status_cd": "in",
        "status_begin_dt": "2017-04-26 13:57:07",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 0
    },
    {
        "bibid": 88,
        "copyid": 6,
        "copy_desc": "",
        "barcode_nmbr": "a0039171",
        "status_cd": "in",
        "status_begin_dt": "2011-01-20 17:17:37",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 1
    },
    {
      "bibid": 63434,
      "copyid": 1,
      "copy_desc": "2019-02485",
      "barcode_nmbr": "a0177385",
      "status_cd": "in",
      "status_begin_dt": "2020-08-04 11:16:48",
      "due_back_dt": null,
      "mbrid": null,
      "renewal_count": 0
    },
    {
        "bibid": 63434,
        "copyid": 2,
        "copy_desc": "2019-02486",
        "barcode_nmbr": "a0177356",
        "status_cd": "in",
        "status_begin_dt": "2022-09-12 09:15:42",
        "due_back_dt": null,
        "mbrid": 0,
        "renewal_count": 0
    },
    {
      "bibid": 12916,
      "copyid": 1,
      "copy_desc": "",
      "barcode_nmbr": "a0014519",
      "status_cd": "in",
      "status_begin_dt": "2008-06-30 10:09:55",
      "due_back_dt": null,
      "mbrid": null,
      "renewal_count": 0
    },
    {
        "bibid": 12916,
        "copyid": 2,
        "copy_desc": "",
        "barcode_nmbr": "a0014520",
        "status_cd": "in",
        "status_begin_dt": "2008-06-30 10:10:06",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 0
    },
    {
        "bibid": 12916,
        "copyid": 3,
        "copy_desc": "",
        "barcode_nmbr": "a0058480",
        "status_cd": "out",
        "status_begin_dt": "2023-05-16 12:27:12",
        "due_back_dt": "2023-05-30",
        "mbrid": 111437,
        "renewal_count": 1
    },
    {
        "bibid": 12916,
        "copyid": 4,
        "copy_desc": "",
        "barcode_nmbr": "a0168620",
        "status_cd": "in",
        "status_begin_dt": "2017-07-05 10:41:43",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 0
    },
    {
      "bibid": 38045,
      "copyid": 1,
      "copy_desc": "",
      "barcode_nmbr": "a0084106",
      "status_cd": "in",
      "status_begin_dt": "2019-03-06 08:24:58",
      "due_back_dt": null,
      "mbrid": 0,
      "renewal_count": 0
    },
    {
      "bibid": 48286,
      "copyid": 1,
      "copy_desc": "",
      "barcode_nmbr": "a0150143",
      "status_cd": "in",
      "status_begin_dt": "2013-06-27 08:26:38",
      "due_back_dt": null,
      "mbrid": null,
      "renewal_count": 0
    },
    {
        "bibid": 48286,
        "copyid": 2,
        "copy_desc": "",
        "barcode_nmbr": "a0151755",
        "status_cd": "in",
        "status_begin_dt": "2013-06-27 08:27:00",
        "due_back_dt": null,
        "mbrid": null,
        "renewal_count": 0
    },
    {
      "bibid": 62223,
      "copyid": 1,
      "copy_desc": "2019-00386",
      "barcode_nmbr": "a0175179",
      "status_cd": "in",
      "status_begin_dt": "2019-09-02 10:58:09",
      "due_back_dt": null,
      "mbrid": null,
      "renewal_count": 0
    },
    {
      "bibid": 59749,
      "copyid": 1,
      "copy_desc": "",
      "barcode_nmbr": "a0170025",
      "status_cd": "out",
      "status_begin_dt": "2023-05-11 13:48:33",
      "due_back_dt": "2023-05-25",
      "mbrid": 91446,
      "renewal_count": 0
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
    await queryInterface.bulkDelete('biblio_copy', null, {});
  }
};
