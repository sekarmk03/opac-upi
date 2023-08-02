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
   await queryInterface.bulkInsert('biblio_field', [
    {
      "bibid": 1,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "119078.119076.119075"
  },
  {
      "bibid": 1,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. 2"
  },
  {
      "bibid": 1,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 1,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Semarang"
  },
  {
      "bibid": 1,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Dahara Prize"
  },
  {
      "bibid": 1,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "264 hlm."
  },
  {
      "bibid": 1,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "3 eks"
  },
  {
      "bibid": 1,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1987"
  },
  {
      "bibid": 1,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "ilus."
  },
  {
      "bibid": 1,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm."
  },
  {
      "bibid": 1,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 1,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana.tatang/Yati/ID"
  },
  {
      "bibid": 1,
      "fieldid": 441847,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "004.1"
  },
  {
      "bibid": 5,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "131826"
  },
  {
      "bibid": 5,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-10"
  },
  {
      "bibid": 5,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 5,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Belmont, California"
  },
  {
      "bibid": 5,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-534-11742-2"
  },
  {
      "bibid": 5,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xx, 599 hlm."
  },
  {
      "bibid": 5,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 5,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Wadsworth"
  },
  {
      "bibid": 5,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1990"
  },
  {
      "bibid": 5,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "25 cm."
  },
  {
      "bibid": 5,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan Alumni"
  },
  {
      "bibid": 5,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 6,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128989. 128990. 128988. 128991"
  },
  {
      "bibid": 6,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 6,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-2"
  },
  {
      "bibid": 6,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 6,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 6,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-065-9"
  },
  {
      "bibid": 6,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xii, 285 hlm."
  },
  {
      "bibid": 6,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks."
  },
  {
      "bibid": 6,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 6,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 6,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 6,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 6,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 7,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "118296"
  },
  {
      "bibid": 7,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Addison-Wesley"
  },
  {
      "bibid": 7,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 7,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Menlo Park, CA"
  },
  {
      "bibid": 7,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0201202735"
  },
  {
      "bibid": 7,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xviii, 133 hlm."
  },
  {
      "bibid": 7,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 7,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1986"
  },
  {
      "bibid": 7,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "28 cm."
  },
  {
      "bibid": 7,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 7,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 8,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "131500"
  },
  {
      "bibid": 8,
      "fieldid": 25985,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Gramedia Widiasarana Indonesia"
  },
  {
      "bibid": 8,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "23"
  },
  {
      "bibid": 8,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 8,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "9795532987"
  },
  {
      "bibid": 8,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "123 hlm."
  },
  {
      "bibid": 8,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1  eks."
  },
  {
      "bibid": 8,
      "fieldid": 25986,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1993"
  },
  {
      "bibid": 8,
      "fieldid": 25987,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 8,
      "fieldid": 25988,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T"
  },
  {
      "bibid": 8,
      "fieldid": 25989,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Eli R/samsi"
  },
  {
      "bibid": 8,
      "fieldid": 444272,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "899.221 3"
  },
  {
      "bibid": 10,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "154249"
  },
  {
      "bibid": 10,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/LILIS"
  },
  {
      "bibid": 10,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 10,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 10,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xxxi, 111 hlm"
  },
  {
      "bibid": 10,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks"
  },
  {
      "bibid": 10,
      "fieldid": 442385,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.42"
  },
  {
      "bibid": 10,
      "fieldid": 442386,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Yayasan Obor Indonesia"
  },
  {
      "bibid": 10,
      "fieldid": 442387,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1986"
  },
  {
      "bibid": 10,
      "fieldid": 442388,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm"
  },
  {
      "bibid": 11,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128838. 128839. 128841. 128842"
  },
  {
      "bibid": 11,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1, Cet. ke-2"
  },
  {
      "bibid": 11,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 11,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 11,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-062-4"
  },
  {
      "bibid": 11,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 343 hlm."
  },
  {
      "bibid": 11,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks."
  },
  {
      "bibid": 11,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 11,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 11,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 11,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 11,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 11,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 13,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "109507,92854,123191,113887,167747,126160,167748,126162,126163,126167,2013-05089"
  },
  {
      "bibid": 13,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Rajawali Press"
  },
  {
      "bibid": 13,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 13,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 13,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-421-019-6"
  },
  {
      "bibid": 13,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 96 hlm."
  },
  {
      "bibid": 13,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "11 eks."
  },
  {
      "bibid": 13,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992"
  },
  {
      "bibid": 13,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 13,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 13,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95/Sumb. Alumni"
  },
  {
      "bibid": 13,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Eli R/ID"
  },
  {
      "bibid": 15,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "127707"
  },
  {
      "bibid": 15,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Elex Media Komputindo"
  },
  {
      "bibid": 15,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 15,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 15,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-537-137-1"
  },
  {
      "bibid": 15,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xi, 301 hlm."
  },
  {
      "bibid": 15,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 15,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992"
  },
  {
      "bibid": 15,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 15,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 15,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 15,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "cm/lilis/Ridwan_PI2014"
  },
  {
      "bibid": 15,
      "fieldid": 226705,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "005.8"
  },
  {
      "bibid": 16,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "101759."
  },
  {
      "bibid": 16,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 16,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 16,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 16,
      "fieldid": 110503,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 16,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "100 hlm."
  },
  {
      "bibid": 16,
      "fieldid": 110502,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 16,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 16,
      "fieldid": 110501,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 16,
      "fieldid": 507201,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.51"
  },
  {
      "bibid": 16,
      "fieldid": 507202,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Armico"
  },
  {
      "bibid": 16,
      "fieldid": 507203,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1984"
  },
  {
      "bibid": 17,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "116654. 161931. 161932.161933. 161934. 161935"
  },
  {
      "bibid": 17,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "McGraw-Hill"
  },
  {
      "bibid": 17,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 17,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Singapore"
  },
  {
      "bibid": 17,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "007990336"
  },
  {
      "bibid": 17,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "313 hlm."
  },
  {
      "bibid": 17,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "6 eks."
  },
  {
      "bibid": 17,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1982"
  },
  {
      "bibid": 17,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 17,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "27 cm."
  },
  {
      "bibid": 17,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 17,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 18,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "113774.150368.99956"
  },
  {
      "bibid": 18,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet.2"
  },
  {
      "bibid": 18,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 18,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 18,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-404-231-5"
  },
  {
      "bibid": 18,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "92 hlm."
  },
  {
      "bibid": 18,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "3 eks."
  },
  {
      "bibid": 18,
      "fieldid": 9,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "658.8"
  },
  {
      "bibid": 18,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Angkasa"
  },
  {
      "bibid": 18,
      "fieldid": 11,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1990"
  },
  {
      "bibid": 18,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 18,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "tatang/dini/ elir/unna"
  },
  {
      "bibid": 18,
      "fieldid": 13580,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 21,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "119192. 119189. 119191. 119193. 119195.119187"
  },
  {
      "bibid": 21,
      "fieldid": 109202,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "796.325"
  },
  {
      "bibid": 21,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 21,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Semarang"
  },
  {
      "bibid": 21,
      "fieldid": 62598,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Dahara Prize"
  },
  {
      "bibid": 21,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "80 hlm."
  },
  {
      "bibid": 21,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "6 eks."
  },
  {
      "bibid": 21,
      "fieldid": 62599,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "[s.a.]"
  },
  {
      "bibid": 21,
      "fieldid": 62600,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "ii."
  },
  {
      "bibid": 21,
      "fieldid": 62601,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 21,
      "fieldid": 62602,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 21,
      "fieldid": 62603,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yati/Sobariah"
  },
  {
      "bibid": 22,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128976. 128978. 128979. 128980"
  },
  {
      "bibid": 22,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 22,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 22,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 22,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 22,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-207-4"
  },
  {
      "bibid": 22,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "x, 391 hlm."
  },
  {
      "bibid": 22,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks."
  },
  {
      "bibid": 22,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 22,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 22,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 22,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 22,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 23,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "119964. 119963. 104731. 119961. 119962"
  },
  {
      "bibid": 23,
      "fieldid": 38256,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "297"
  },
  {
      "bibid": 23,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 23,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 23,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-425-130-3"
  },
  {
      "bibid": 23,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "95 hlm."
  },
  {
      "bibid": 23,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "5 eks."
  },
  {
      "bibid": 23,
      "fieldid": 38257,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Rosda"
  },
  {
      "bibid": 23,
      "fieldid": 38258,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1987"
  },
  {
      "bibid": 23,
      "fieldid": 38259,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 23,
      "fieldid": 38260,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 23,
      "fieldid": 38261,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 24,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "43084"
  },
  {
      "bibid": 24,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 24,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 24,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York, Harper Brothers, 1961."
  },
  {
      "bibid": 24,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 374 hlm., 21 cm."
  },
  {
      "bibid": 24,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks"
  },
  {
      "bibid": 26,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "111161"
  },
  {
      "bibid": 26,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/ar"
  },
  {
      "bibid": 26,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 26,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Virginia, , 198"
  },
  {
      "bibid": 26,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "083593170"
  },
  {
      "bibid": 26,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 260 hlm."
  },
  {
      "bibid": 26,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 26,
      "fieldid": 443854,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Reston Publishing Company"
  },
  {
      "bibid": 26,
      "fieldid": 443855,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1980"
  },
  {
      "bibid": 26,
      "fieldid": 443856,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 27,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "113139"
  },
  {
      "bibid": 27,
      "fieldid": 11,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Osborne/McGraw-Hill"
  },
  {
      "bibid": 27,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-3."
  },
  {
      "bibid": 27,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 27,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Berkeley"
  },
  {
      "bibid": 27,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0881341282"
  },
  {
      "bibid": 27,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 327 hlm."
  },
  {
      "bibid": 27,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 27,
      "fieldid": 9,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Hadiah The Asian Foundation"
  },
  {
      "bibid": 27,
      "fieldid": 10,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 27,
      "fieldid": 12,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1984"
  },
  {
      "bibid": 27,
      "fieldid": 13,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 27,
      "fieldid": 14,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "25 cm."
  },
  {
      "bibid": 28,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "106531. 107312. 106539.06536.106542.106541.106543.106538.106540"
  },
  {
      "bibid": 28,
      "fieldid": 80906,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.3"
  },
  {
      "bibid": 28,
      "fieldid": 80911,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 28,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan"
  },
  {
      "bibid": 28,
      "fieldid": 80907,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Universitas Terbuka"
  },
  {
      "bibid": 28,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Sobariah"
  },
  {
      "bibid": 28,
      "fieldid": 80910,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "29 cm."
  },
  {
      "bibid": 28,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 28,
      "fieldid": 80909,
      "tag": 520,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Modul 1-3"
  },
  {
      "bibid": 28,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 28,
      "fieldid": 80908,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1984"
  },
  {
      "bibid": 28,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "38 hlm."
  },
  {
      "bibid": 28,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "9 eks."
  },
  {
      "bibid": 29,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "127556"
  },
  {
      "bibid": 29,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Elex Media Komputindo"
  },
  {
      "bibid": 29,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 29,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 29,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-537-022-7"
  },
  {
      "bibid": 29,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, 594 hlm."
  },
  {
      "bibid": 29,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 29,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992"
  },
  {
      "bibid": 29,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 29,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 29,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 29,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 30,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "68785"
  },
  {
      "bibid": 30,
      "fieldid": 23135,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Bhratara Karya Aksara"
  },
  {
      "bibid": 30,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 30,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 30,
      "fieldid": 23134,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.51"
  },
  {
      "bibid": 30,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "121 hlm."
  },
  {
      "bibid": 30,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 30,
      "fieldid": 23136,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1979"
  },
  {
      "bibid": 30,
      "fieldid": 23137,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 30,
      "fieldid": 23138,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 30,
      "fieldid": 23139,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/unna"
  },
  {
      "bibid": 31,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "108607. 108604. 108600. 108608. 108605. 108606"
  },
  {
      "bibid": 31,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan."
  },
  {
      "bibid": 31,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/DA"
  },
  {
      "bibid": 31,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 31,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 31,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 76 hlm."
  },
  {
      "bibid": 31,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "6 eks."
  },
  {
      "bibid": 31,
      "fieldid": 506098,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 31,
      "fieldid": 506099,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1988"
  },
  {
      "bibid": 31,
      "fieldid": 507240,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.433"
  },
  {
      "bibid": 31,
      "fieldid": 507241,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 32,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128959. 128960"
  },
  {
      "bibid": 32,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 32,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 32,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 32,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-135-3"
  },
  {
      "bibid": 32,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xii, 527 hlm."
  },
  {
      "bibid": 32,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "3 eks."
  },
  {
      "bibid": 32,
      "fieldid": 9161,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "005.1"
  },
  {
      "bibid": 32,
      "fieldid": 9162,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 32,
      "fieldid": 9163,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1993"
  },
  {
      "bibid": 32,
      "fieldid": 9164,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 32,
      "fieldid": 9165,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 32,
      "fieldid": 9166,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 32,
      "fieldid": 9167,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/wan/HR"
  },
  {
      "bibid": 33,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "117588. 117589. 117592. 117591. 117593. 117590. 117577. 117578. 117579. 117580. 117583. 117596. 117598"
  },
  {
      "bibid": 33,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan"
  },
  {
      "bibid": 33,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 33,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 33,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 33,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xv, 335 hlm."
  },
  {
      "bibid": 33,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "13 eks."
  },
  {
      "bibid": 33,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1989"
  },
  {
      "bibid": 33,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 33,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 33,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan Depdikbud"
  },
  {
      "bibid": 33,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Yati"
  },
  {
      "bibid": 33,
      "fieldid": 506449,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.642"
  },
  {
      "bibid": 34,
      "fieldid": 19310,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.42"
  },
  {
      "bibid": 34,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 34,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 34,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-511-401-8"
  },
  {
      "bibid": 34,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "x, 128 hlm."
  },
  {
      "bibid": 34,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 34,
      "fieldid": 19311,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Gramedia Pustaka Utama"
  },
  {
      "bibid": 34,
      "fieldid": 19312,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992"
  },
  {
      "bibid": 34,
      "fieldid": 19313,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 34,
      "fieldid": 19314,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 35,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "111987"
  },
  {
      "bibid": 35,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-4"
  },
  {
      "bibid": 35,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 35,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 35,
      "fieldid": 34704,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.5"
  },
  {
      "bibid": 35,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xxiii, 287 hlm."
  },
  {
      "bibid": 35,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 35,
      "fieldid": 34705,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Bina Cipta"
  },
  {
      "bibid": 35,
      "fieldid": 34706,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1986"
  },
  {
      "bibid": 35,
      "fieldid": 34707,
      "tag": 520,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jilid 1"
  },
  {
      "bibid": 35,
      "fieldid": 34708,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 35,
      "fieldid": 34709,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan alumni"
  },
  {
      "bibid": 35,
      "fieldid": 34710,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Eli R"
  },
  {
      "bibid": 36,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128892.128893.128894.128895"
  },
  {
      "bibid": 36,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. 4"
  },
  {
      "bibid": 36,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 36,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 36,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-209-0"
  },
  {
      "bibid": 36,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xviii, 445 hlm."
  },
  {
      "bibid": 36,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks."
  },
  {
      "bibid": 36,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 36,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 36,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 36,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 36,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 36,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/samsi/unna"
  },
  {
      "bibid": 36,
      "fieldid": 444520,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "005.7565"
  },
  {
      "bibid": 38,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "47178"
  },
  {
      "bibid": 38,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/ar"
  },
  {
      "bibid": 38,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-1"
  },
  {
      "bibid": 38,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 38,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 38,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xix, 431 hlm."
  },
  {
      "bibid": 38,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 38,
      "fieldid": 443977,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Random House"
  },
  {
      "bibid": 38,
      "fieldid": 443978,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1941"
  },
  {
      "bibid": 38,
      "fieldid": 443979,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "25 cm."
  },
  {
      "bibid": 39,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "125612"
  },
  {
      "bibid": 39,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-3"
  },
  {
      "bibid": 39,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 39,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 39,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-02-928390-6"
  },
  {
      "bibid": 39,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 176 hlm."
  },
  {
      "bibid": 39,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 39,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "The Free Press"
  },
  {
      "bibid": 39,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1979"
  },
  {
      "bibid": 39,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 39,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "25 cm."
  },
  {
      "bibid": 39,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2S2PT/95"
  },
  {
      "bibid": 39,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 40,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "140089. 154174. 140090. 140093. 140091"
  },
  {
      "bibid": 40,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2."
  },
  {
      "bibid": 40,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 40,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 40,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Jemmars"
  },
  {
      "bibid": 40,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vi, 196 hlm."
  },
  {
      "bibid": 40,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks."
  },
  {
      "bibid": 40,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1987"
  },
  {
      "bibid": 40,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm."
  },
  {
      "bibid": 40,
      "fieldid": 12,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 41,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "153755. 924954"
  },
  {
      "bibid": 41,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/VN"
  },
  {
      "bibid": 41,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 41,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Surabaya, Usaha Nasional, 1987."
  },
  {
      "bibid": 41,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 216 hlm., 21 cm."
  },
  {
      "bibid": 41,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks"
  },
  {
      "bibid": 42,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "69940."
  },
  {
      "bibid": 42,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2."
  },
  {
      "bibid": 42,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 42,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indianapolis, The Bobbs-Merrill, 1979."
  },
  {
      "bibid": 42,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-672-61295-2."
  },
  {
      "bibid": 42,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 149 hlm., 22 cm."
  },
  {
      "bibid": 42,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks"
  },
  {
      "bibid": 42,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/nenden"
  },
  {
      "bibid": 43,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "113723. 123482"
  },
  {
      "bibid": 43,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 43,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 43,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Ganeca Exact"
  },
  {
      "bibid": 43,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "v, 203 hlm."
  },
  {
      "bibid": 43,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 43,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1986"
  },
  {
      "bibid": 43,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 43,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 43,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 43,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 43,
      "fieldid": 531796,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.642"
  },
  {
      "bibid": 44,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "167720"
  },
  {
      "bibid": 44,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 44,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-11"
  },
  {
      "bibid": 44,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 44,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 44,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 86 hlm."
  },
  {
      "bibid": 44,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 44,
      "fieldid": 66633,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Yayasan Penerbit Fakultas Psikologi"
  },
  {
      "bibid": 44,
      "fieldid": 66634,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1981"
  },
  {
      "bibid": 44,
      "fieldid": 66635,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 44,
      "fieldid": 66636,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 44,
      "fieldid": 66637,
      "tag": 520,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jilid 1"
  },
  {
      "bibid": 45,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "105157. 105156. 104542. 95130. 95131. 95132. 95126. 93536"
  },
  {
      "bibid": 45,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Santi. nana/Yati"
  },
  {
      "bibid": 45,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 45,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 45,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "112 hlm."
  },
  {
      "bibid": 45,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "8 eks."
  },
  {
      "bibid": 45,
      "fieldid": 441870,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.5"
  },
  {
      "bibid": 45,
      "fieldid": 441871,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Alumni"
  },
  {
      "bibid": 45,
      "fieldid": 441872,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1979"
  },
  {
      "bibid": 45,
      "fieldid": 441873,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 46,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "80014.84536.84535.84534.94278.87048.87049.94646.94652.87032.87033.87034.87040.87041.87045.87050.87046"
  },
  {
      "bibid": 46,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Yati/ID/unna"
  },
  {
      "bibid": 46,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 46,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 46,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 138 hlm."
  },
  {
      "bibid": 46,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "15 eks."
  },
  {
      "bibid": 46,
      "fieldid": 110500,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Pelita"
  },
  {
      "bibid": 46,
      "fieldid": 110499,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 46,
      "fieldid": 110498,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 46,
      "fieldid": 441848,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.5"
  },
  {
      "bibid": 46,
      "fieldid": 441849,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Alumni"
  },
  {
      "bibid": 46,
      "fieldid": 441850,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1973"
  },
  {
      "bibid": 47,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "120211"
  },
  {
      "bibid": 47,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 47,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Semarang"
  },
  {
      "bibid": 47,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Dahara Prize"
  },
  {
      "bibid": 47,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "272 hlm."
  },
  {
      "bibid": 47,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 47,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1986"
  },
  {
      "bibid": 47,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 47,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 47,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Yati"
  },
  {
      "bibid": 47,
      "fieldid": 441846,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "005.3"
  },
  {
      "bibid": 48,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "129126. 129127. 129128. 129129. 129130"
  },
  {
      "bibid": 48,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 48,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 48,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 48,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 48,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 257 hlm."
  },
  {
      "bibid": 48,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "5 eks."
  },
  {
      "bibid": 48,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1991"
  },
  {
      "bibid": 48,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 48,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 48,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 48,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 49,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "113138"
  },
  {
      "bibid": 49,
      "fieldid": 9,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Hadiah The Asian Foundation"
  },
  {
      "bibid": 49,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 49,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 49,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0070016054"
  },
  {
      "bibid": 49,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, 251 hlm."
  },
  {
      "bibid": 49,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 49,
      "fieldid": 10,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 49,
      "fieldid": 11,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "McGraw-Hill"
  },
  {
      "bibid": 49,
      "fieldid": 12,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1982"
  },
  {
      "bibid": 49,
      "fieldid": 13,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 49,
      "fieldid": 14,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 50,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128916. 128917. 128918. 128919. 128920"
  },
  {
      "bibid": 50,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 50,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 50,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 50,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 50,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-200-7"
  },
  {
      "bibid": 50,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 316 hlm."
  },
  {
      "bibid": 50,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "5 eks."
  },
  {
      "bibid": 50,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 50,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 50,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 50,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 50,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 51,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "120735,137897,123578,131466,129416,129418"
  },
  {
      "bibid": 51,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/wan/h2m/Yati/ID"
  },
  {
      "bibid": 51,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. 5"
  },
  {
      "bibid": 51,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 51,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 51,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, 419 hlm."
  },
  {
      "bibid": 51,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "6 eks."
  },
  {
      "bibid": 51,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Gramedia"
  },
  {
      "bibid": 51,
      "fieldid": 11,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1977"
  },
  {
      "bibid": 51,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 51,
      "fieldid": 13,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 51,
      "fieldid": 19319,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.42"
  },
  {
      "bibid": 51,
      "fieldid": 102361,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 52,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128785"
  },
  {
      "bibid": 52,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 52,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-4"
  },
  {
      "bibid": 52,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 52,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 52,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-134-5"
  },
  {
      "bibid": 52,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xv, 384 hlm."
  },
  {
      "bibid": 52,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 52,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1993"
  },
  {
      "bibid": 52,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 52,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 52,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 52,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 54,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128970. 128971. 128972. 128973. 128974"
  },
  {
      "bibid": 54,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 54,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 54,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 54,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 54,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 296 hlm."
  },
  {
      "bibid": 54,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "5 eks."
  },
  {
      "bibid": 54,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1991"
  },
  {
      "bibid": 54,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 54,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 54,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 54,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 55,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128922. 128923. 128924. 128925. 128926"
  },
  {
      "bibid": 55,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 55,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 55,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 55,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 55,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-013-6"
  },
  {
      "bibid": 55,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 450 hlm."
  },
  {
      "bibid": 55,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "5 eks."
  },
  {
      "bibid": 55,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1991"
  },
  {
      "bibid": 55,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 55,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 55,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 55,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 56,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "118514"
  },
  {
      "bibid": 56,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 56,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 56,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 351 hlm."
  },
  {
      "bibid": 56,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 56,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Nucea"
  },
  {
      "bibid": 56,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1990"
  },
  {
      "bibid": 56,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 56,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 56,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 56,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 57,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "58701. 150546. 58700."
  },
  {
      "bibid": 57,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "tatang/damay/neni"
  },
  {
      "bibid": 57,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-19."
  },
  {
      "bibid": 57,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 57,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 57,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vi, 156 hlm."
  },
  {
      "bibid": 57,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "3 Eks."
  },
  {
      "bibid": 57,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 57,
      "fieldid": 11,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1995"
  },
  {
      "bibid": 57,
      "fieldid": 2055,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "311"
  },
  {
      "bibid": 57,
      "fieldid": 2056,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 57,
      "fieldid": 2057,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 58,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128817."
  },
  {
      "bibid": 58,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 58,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 58,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 58,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-106-X"
  },
  {
      "bibid": 58,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 368 hlm."
  },
  {
      "bibid": 58,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 58,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 58,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992"
  },
  {
      "bibid": 58,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 58,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 58,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 58,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Yati"
  },
  {
      "bibid": 61,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "113131"
  },
  {
      "bibid": 61,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Osborne/McGraw-Hill"
  },
  {
      "bibid": 61,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 61,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Berkeley, CA"
  },
  {
      "bibid": 61,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0881341088"
  },
  {
      "bibid": 61,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 217 hlm."
  },
  {
      "bibid": 61,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 61,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1984"
  },
  {
      "bibid": 61,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 61,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 61,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The Asia Foundation"
  },
  {
      "bibid": 61,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 62,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "134980. 134989. 134975. 134977. 134978. 134976. 134980."
  },
  {
      "bibid": 62,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan"
  },
  {
      "bibid": 62,
      "fieldid": 31617,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "808.3"
  },
  {
      "bibid": 62,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 62,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 62,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "9794598887."
  },
  {
      "bibid": 62,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "254 hlm."
  },
  {
      "bibid": 62,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "6 eks."
  },
  {
      "bibid": 62,
      "fieldid": 31618,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 62,
      "fieldid": 31619,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1998"
  },
  {
      "bibid": 62,
      "fieldid": 31620,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 62,
      "fieldid": 31621,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 62,
      "fieldid": 31622,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Royy/Neni"
  },
  {
      "bibid": 63,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "80533. 63928."
  },
  {
      "bibid": 63,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/popon"
  },
  {
      "bibid": 63,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 63,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 63,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "275 hlm."
  },
  {
      "bibid": 63,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 63,
      "fieldid": 442849,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.43"
  },
  {
      "bibid": 63,
      "fieldid": 442850,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Alumni"
  },
  {
      "bibid": 63,
      "fieldid": 442851,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1979"
  },
  {
      "bibid": 63,
      "fieldid": 442852,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 63,
      "fieldid": 442853,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 66,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "132398"
  },
  {
      "bibid": 66,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 66,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 66,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Pusat Penelitian Unika Atama Jaya"
  },
  {
      "bibid": 66,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 55 hlm."
  },
  {
      "bibid": 66,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 66,
      "fieldid": 10,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 66,
      "fieldid": 11,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Alumni"
  },
  {
      "bibid": 66,
      "fieldid": 12,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/rm"
  },
  {
      "bibid": 66,
      "fieldid": 441923,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "015.598"
  },
  {
      "bibid": 67,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "129090. 129091. 129092. 129093"
  },
  {
      "bibid": 67,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 67,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 67,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 67,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 67,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-148-5"
  },
  {
      "bibid": 67,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiv, 493 hlm."
  },
  {
      "bibid": 67,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks."
  },
  {
      "bibid": 67,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1993"
  },
  {
      "bibid": 67,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 67,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 67,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 67,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 68,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "113748.133349.104055.118793"
  },
  {
      "bibid": 68,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/dedi/juf"
  },
  {
      "bibid": 68,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. 3"
  },
  {
      "bibid": 68,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 68,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 68,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "196 hlm."
  },
  {
      "bibid": 68,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks"
  },
  {
      "bibid": 68,
      "fieldid": 444010,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "LP3ES 1986"
  },
  {
      "bibid": 68,
      "fieldid": 444011,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1986"
  },
  {
      "bibid": 68,
      "fieldid": 444012,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 68,
      "fieldid": 444013,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 68,
      "fieldid": 529707,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 69,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "140219."
  },
  {
      "bibid": 69,
      "fieldid": 62637,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001"
  },
  {
      "bibid": 69,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 69,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Nevada"
  },
  {
      "bibid": 69,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-87417-036-2."
  },
  {
      "bibid": 69,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xii, 216 hlm."
  },
  {
      "bibid": 69,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 69,
      "fieldid": 62638,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "University of Nevada"
  },
  {
      "bibid": 69,
      "fieldid": 62639,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1979"
  },
  {
      "bibid": 69,
      "fieldid": 62640,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 69,
      "fieldid": 62641,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm"
  },
  {
      "bibid": 69,
      "fieldid": 62642,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan Asia Foundation"
  },
  {
      "bibid": 69,
      "fieldid": 62643,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "dryd"
  },
  {
      "bibid": 70,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "134469"
  },
  {
      "bibid": 70,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 70,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 70,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Magenta Software"
  },
  {
      "bibid": 70,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "85 hlm."
  },
  {
      "bibid": 70,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 70,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1989"
  },
  {
      "bibid": 70,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 70,
      "fieldid": 12,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 71,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "113508"
  },
  {
      "bibid": 71,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Osborne/McGraw-Hill"
  },
  {
      "bibid": 71,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 71,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Berkeley, CA"
  },
  {
      "bibid": 71,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0881341371"
  },
  {
      "bibid": 71,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 200 hlm."
  },
  {
      "bibid": 71,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 71,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1984"
  },
  {
      "bibid": 71,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 71,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 71,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The Asia Foundation"
  },
  {
      "bibid": 71,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 72,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "111380. 160211"
  },
  {
      "bibid": 72,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/VN"
  },
  {
      "bibid": 72,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 72,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta, Gramedia, 1981."
  },
  {
      "bibid": 72,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiv, 122 hlm., 22 cm."
  },
  {
      "bibid": 72,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks"
  },
  {
      "bibid": 73,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "122624"
  },
  {
      "bibid": 73,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Elex Media Komputindo"
  },
  {
      "bibid": 73,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 73,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 73,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-537-090-1"
  },
  {
      "bibid": 73,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 171 hlm."
  },
  {
      "bibid": 73,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 73,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992"
  },
  {
      "bibid": 73,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 73,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 73,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 73,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 74,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "140787. 128068. 128069"
  },
  {
      "bibid": 74,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-2"
  },
  {
      "bibid": 74,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 74,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 74,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-537-131-2"
  },
  {
      "bibid": 74,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiv, 166 hlm."
  },
  {
      "bibid": 74,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "3 eks."
  },
  {
      "bibid": 74,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Gramedia"
  },
  {
      "bibid": 74,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 74,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 74,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 74,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Proyek UPI"
  },
  {
      "bibid": 74,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Yati"
  },
  {
      "bibid": 74,
      "fieldid": 441988,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "005.2"
  },
  {
      "bibid": 76,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "154142. 113317. 109169. 2012-02479"
  },
  {
      "bibid": 76,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Retno/lilis/Yati"
  },
  {
      "bibid": 76,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 76,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Surabaya"
  },
  {
      "bibid": 76,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 88 hlm."
  },
  {
      "bibid": 76,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks."
  },
  {
      "bibid": 76,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Usaha Nasional"
  },
  {
      "bibid": 76,
      "fieldid": 11,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1981"
  },
  {
      "bibid": 76,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 76,
      "fieldid": 13,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm."
  },
  {
      "bibid": 76,
      "fieldid": 337620,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sum. a.k. kolopaking"
  },
  {
      "bibid": 76,
      "fieldid": 531574,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.43"
  },
  {
      "bibid": 77,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "69799"
  },
  {
      "bibid": 77,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-5"
  },
  {
      "bibid": 77,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 77,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 77,
      "fieldid": 45614,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "207"
  },
  {
      "bibid": 77,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "199 hlm."
  },
  {
      "bibid": 77,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 77,
      "fieldid": 45615,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Gunung Mulia"
  },
  {
      "bibid": 77,
      "fieldid": 45616,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1978"
  },
  {
      "bibid": 77,
      "fieldid": 45617,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 77,
      "fieldid": 45618,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 77,
      "fieldid": 45619,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 78,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "47923. 47924"
  },
  {
      "bibid": 78,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2"
  },
  {
      "bibid": 78,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 78,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 78,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Blaisdell"
  },
  {
      "bibid": 78,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "98 hlm."
  },
  {
      "bibid": 78,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 78,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1964"
  },
  {
      "bibid": 78,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 78,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The Asia Foundation"
  },
  {
      "bibid": 78,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 79,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "106129. 106128. 106131. 106127. 106057. 106054. 106130"
  },
  {
      "bibid": 79,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan."
  },
  {
      "bibid": 79,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 79,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 79,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 79,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xi, 92 hlm."
  },
  {
      "bibid": 79,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "7 eks."
  },
  {
      "bibid": 79,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1984"
  },
  {
      "bibid": 79,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 79,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan Depdikbud"
  },
  {
      "bibid": 79,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 80,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "129018. 129019. 129020. 129021. 129022"
  },
  {
      "bibid": 80,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 80,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 80,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 80,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 80,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, 383 hlm."
  },
  {
      "bibid": 80,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "5 eks."
  },
  {
      "bibid": 80,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1990"
  },
  {
      "bibid": 80,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 80,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 80,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 80,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 81,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128964. 128965. 128966. 128967. 128968"
  },
  {
      "bibid": 81,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-1"
  },
  {
      "bibid": 81,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 81,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 81,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-006-3"
  },
  {
      "bibid": 81,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vi, 215 hlm."
  },
  {
      "bibid": 81,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "5 eks."
  },
  {
      "bibid": 81,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 81,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1991"
  },
  {
      "bibid": 81,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 81,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 81,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 82,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "127368. 127365"
  },
  {
      "bibid": 82,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Gramedia"
  },
  {
      "bibid": 82,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 82,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 82,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 82,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-537-167-3"
  },
  {
      "bibid": 82,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 147 hlm."
  },
  {
      "bibid": 82,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 82,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1993"
  },
  {
      "bibid": 82,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 82,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 82,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 82,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 83,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "119737. 120648.119736.119738"
  },
  {
      "bibid": 83,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-1."
  },
  {
      "bibid": 83,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 83,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Semarang"
  },
  {
      "bibid": 83,
      "fieldid": 62661,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Dahara Prize"
  },
  {
      "bibid": 83,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "140 hlm."
  },
  {
      "bibid": 83,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4  eks."
  },
  {
      "bibid": 83,
      "fieldid": 62662,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1986"
  },
  {
      "bibid": 83,
      "fieldid": 62663,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "ii."
  },
  {
      "bibid": 83,
      "fieldid": 62664,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm."
  },
  {
      "bibid": 83,
      "fieldid": 62665,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "p2t"
  },
  {
      "bibid": 83,
      "fieldid": 62666,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yati/dian arya"
  },
  {
      "bibid": 84,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "95522. 100747. 113261. 113199. 100746. 102104. 105254"
  },
  {
      "bibid": 84,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/HR/Yati"
  },
  {
      "bibid": 84,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 84,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Surabaya"
  },
  {
      "bibid": 84,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "x, 238 hlm."
  },
  {
      "bibid": 84,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "7 eks."
  },
  {
      "bibid": 84,
      "fieldid": 4384,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Usaha Nasional"
  },
  {
      "bibid": 84,
      "fieldid": 4385,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1984"
  },
  {
      "bibid": 84,
      "fieldid": 4386,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 84,
      "fieldid": 4387,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 84,
      "fieldid": 507150,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.43"
  },
  {
      "bibid": 84,
      "fieldid": 507151,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumb."
  },
  {
      "bibid": 85,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128890"
  },
  {
      "bibid": 85,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-3, Cet. ke-2"
  },
  {
      "bibid": 85,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 85,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 85,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-067-5"
  },
  {
      "bibid": 85,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, 415 hlm."
  },
  {
      "bibid": 85,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 85,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 85,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 85,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 85,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 85,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 85,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/ln"
  },
  {
      "bibid": 86,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "108489"
  },
  {
      "bibid": 86,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan"
  },
  {
      "bibid": 86,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 86,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 86,
      "fieldid": 67392,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.5"
  },
  {
      "bibid": 86,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 256 hlm."
  },
  {
      "bibid": 86,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 86,
      "fieldid": 67393,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 86,
      "fieldid": 67394,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1988"
  },
  {
      "bibid": 86,
      "fieldid": 67395,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 86,
      "fieldid": 67396,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 86,
      "fieldid": 67397,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2LPTK"
  },
  {
      "bibid": 86,
      "fieldid": 67398,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 87,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "101603. 101602. 101604. 105789. 108056"
  },
  {
      "bibid": 87,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/DA"
  },
  {
      "bibid": 87,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "et. ke-1."
  },
  {
      "bibid": 87,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 87,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung, Pustaka Buana, 1986."
  },
  {
      "bibid": 87,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "v, 62 hlm., il., 21 cm."
  },
  {
      "bibid": 87,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "5 eks"
  },
  {
      "bibid": 88,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "103234. 102574. 102566.109884.103366. 100188."
  },
  {
      "bibid": 88,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-2."
  },
  {
      "bibid": 88,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 88,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 88,
      "fieldid": 17464,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Rosda"
  },
  {
      "bibid": 88,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "103 hlm."
  },
  {
      "bibid": 88,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "6 eks."
  },
  {
      "bibid": 88,
      "fieldid": 17465,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1986."
  },
  {
      "bibid": 88,
      "fieldid": 17466,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 88,
      "fieldid": 17467,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 88,
      "fieldid": 17468,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "rahmat/ lilis/Yati"
  },
  {
      "bibid": 88,
      "fieldid": 519761,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "790.06"
  },
  {
      "bibid": 89,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128857"
  },
  {
      "bibid": 89,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2"
  },
  {
      "bibid": 89,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 89,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 89,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-164-7"
  },
  {
      "bibid": 89,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "x, 293 hlm."
  },
  {
      "bibid": 89,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 89,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 89,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1993"
  },
  {
      "bibid": 89,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 89,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 89,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 89,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 90,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "43345. 43346. 43353.43348."
  },
  {
      "bibid": 90,
      "fieldid": 40289,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "W.W. Norton Company, Inc."
  },
  {
      "bibid": 90,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-3."
  },
  {
      "bibid": 90,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 90,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York,"
  },
  {
      "bibid": 90,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-393-09307-7."
  },
  {
      "bibid": 90,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xlii, 2516 hlm.,"
  },
  {
      "bibid": 90,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 90,
      "fieldid": 40290,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1962"
  },
  {
      "bibid": 90,
      "fieldid": 40291,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 90,
      "fieldid": 40292,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "wawan"
  },
  {
      "bibid": 91,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128956.120632."
  },
  {
      "bibid": 91,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 91,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-5"
  },
  {
      "bibid": 91,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 91,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 91,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-045-4"
  },
  {
      "bibid": 91,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xix, 534 hlm."
  },
  {
      "bibid": 91,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 91,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1995"
  },
  {
      "bibid": 91,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 91,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 91,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 91,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana . lilis"
  },
  {
      "bibid": 92,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "118587"
  },
  {
      "bibid": 92,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Addison-Wesley"
  },
  {
      "bibid": 92,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 92,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Menlo Park, CA"
  },
  {
      "bibid": 92,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-201-20274-3"
  },
  {
      "bibid": 92,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "337 hlm."
  },
  {
      "bibid": 92,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 92,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1986"
  },
  {
      "bibid": 92,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 92,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "29 cm."
  },
  {
      "bibid": 92,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 92,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 93,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "135357"
  },
  {
      "bibid": 93,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 93,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 93,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-593-120-2"
  },
  {
      "bibid": 93,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "x, 286 hlm."
  },
  {
      "bibid": 93,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 93,
      "fieldid": 64729,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "004.67"
  },
  {
      "bibid": 93,
      "fieldid": 64730,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Kesaint Blanc"
  },
  {
      "bibid": 93,
      "fieldid": 64731,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1997"
  },
  {
      "bibid": 93,
      "fieldid": 64732,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 93,
      "fieldid": 64733,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm."
  },
  {
      "bibid": 93,
      "fieldid": 64734,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 94,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "123582."
  },
  {
      "bibid": 94,
      "fieldid": 59626,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "ii."
  },
  {
      "bibid": 94,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 94,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 94,
      "fieldid": 59625,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Tarsito"
  },
  {
      "bibid": 94,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "iv, 82 hlm., il., 21 cm."
  },
  {
      "bibid": 94,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks"
  },
  {
      "bibid": 94,
      "fieldid": 59627,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 94,
      "fieldid": 59628,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "yati"
  },
  {
      "bibid": 95,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "127034"
  },
  {
      "bibid": 95,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 95,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 95,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jordan Hill, Oxford"
  },
  {
      "bibid": 95,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-434-90316-7"
  },
  {
      "bibid": 95,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "268 hlm."
  },
  {
      "bibid": 95,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 95,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Heinemann Newtech"
  },
  {
      "bibid": 95,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1990"
  },
  {
      "bibid": 95,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 95,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 95,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2S2PT/95"
  },
  {
      "bibid": 95,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 96,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "135120. 135121. 135122. 135123. 135124.135125"
  },
  {
      "bibid": 96,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan"
  },
  {
      "bibid": 96,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 96,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "23"
  },
  {
      "bibid": 96,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 96,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 96,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "x, 293 hlm."
  },
  {
      "bibid": 96,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "6 eks."
  },
  {
      "bibid": 96,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1998"
  },
  {
      "bibid": 96,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 96,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 96,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/HR/Yati"
  },
  {
      "bibid": 96,
      "fieldid": 564476,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "959.903 6"
  },
  {
      "bibid": 97,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "123466."
  },
  {
      "bibid": 97,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan."
  },
  {
      "bibid": 97,
      "fieldid": 57711,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "899.221"
  },
  {
      "bibid": 97,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 97,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 97,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979 459 372-9."
  },
  {
      "bibid": 97,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "x, 265 hlm."
  },
  {
      "bibid": 97,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 97,
      "fieldid": 57712,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 97,
      "fieldid": 57713,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1993."
  },
  {
      "bibid": 97,
      "fieldid": 57714,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm."
  },
  {
      "bibid": 97,
      "fieldid": 57715,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "DA/Yati"
  },
  {
      "bibid": 97,
      "fieldid": 473792,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumb."
  },
  {
      "bibid": 99,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "125817. 125818. 125821. 125820"
  },
  {
      "bibid": 99,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-2"
  },
  {
      "bibid": 99,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 99,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 99,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Gramedia"
  },
  {
      "bibid": 99,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "x, 196 hlm."
  },
  {
      "bibid": 99,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4eks."
  },
  {
      "bibid": 99,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 99,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 99,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 99,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 99,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Yati"
  },
  {
      "bibid": 100,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "120376. 120378. 120379"
  },
  {
      "bibid": 100,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1, Cet. ke-2"
  },
  {
      "bibid": 100,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 100,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 100,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 100,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 125 hlm."
  },
  {
      "bibid": 100,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "3 eks."
  },
  {
      "bibid": 100,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1990"
  },
  {
      "bibid": 100,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 100,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 100,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 100,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 101,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128870. 128871"
  },
  {
      "bibid": 101,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1, Cet. ke-2"
  },
  {
      "bibid": 101,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 101,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 101,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-189-2"
  },
  {
      "bibid": 101,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xv, 225 hlm."
  },
  {
      "bibid": 101,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 101,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 101,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1995"
  },
  {
      "bibid": 101,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 101,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 101,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 101,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 102,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "127561.127562"
  },
  {
      "bibid": 102,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 102,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. 2"
  },
  {
      "bibid": 102,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 102,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 102,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-180-0"
  },
  {
      "bibid": 102,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xvii, 427 hlm."
  },
  {
      "bibid": 102,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 102,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1995"
  },
  {
      "bibid": 102,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 102,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 102,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 102,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/unna"
  },
  {
      "bibid": 103,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "129002. 129004"
  },
  {
      "bibid": 103,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2, Cet. ke-2"
  },
  {
      "bibid": 103,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 103,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 103,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-041-1"
  },
  {
      "bibid": 103,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xxiii, 558 hlm."
  },
  {
      "bibid": 103,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 103,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 103,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 103,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 103,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 103,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 103,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 104,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "127617. 127618"
  },
  {
      "bibid": 104,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Elex Media Komputindo"
  },
  {
      "bibid": 104,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-4"
  },
  {
      "bibid": 104,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 104,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 104,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-537-042-1"
  },
  {
      "bibid": 104,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 197 hlm."
  },
  {
      "bibid": 104,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 104,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 104,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 104,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 104,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 104,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nan"
  },
  {
      "bibid": 105,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "137637. 137638. 115988. 134952. 115990"
  },
  {
      "bibid": 105,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-4"
  },
  {
      "bibid": 105,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 105,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 105,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Gramedia Pustaka Utama"
  },
  {
      "bibid": 105,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xii, 125 hlm."
  },
  {
      "bibid": 105,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "5 eks."
  },
  {
      "bibid": 105,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1991"
  },
  {
      "bibid": 105,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 105,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 105,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T"
  },
  {
      "bibid": 105,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 107,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "119049. 119047"
  },
  {
      "bibid": 107,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-2"
  },
  {
      "bibid": 107,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 107,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 107,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Bumi Aksara"
  },
  {
      "bibid": 107,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 135 hlm."
  },
  {
      "bibid": 107,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 107,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1990"
  },
  {
      "bibid": 107,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 107,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 107,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 107,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 109,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "101549. 103435. 107188. 160339"
  },
  {
      "bibid": 109,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Yati"
  },
  {
      "bibid": 109,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 109,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 109,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "286 hlm."
  },
  {
      "bibid": 109,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks"
  },
  {
      "bibid": 109,
      "fieldid": 442534,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001"
  },
  {
      "bibid": 109,
      "fieldid": 442535,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Iqra"
  },
  {
      "bibid": 109,
      "fieldid": 442536,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1982"
  },
  {
      "bibid": 109,
      "fieldid": 442537,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 109,
      "fieldid": 442538,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 110,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "125927. 125928. 125925. 125926"
  },
  {
      "bibid": 110,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana,neni"
  },
  {
      "bibid": 110,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 110,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 110,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "9795183141."
  },
  {
      "bibid": 110,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xii, 338 hlm., il., 21 cm."
  },
  {
      "bibid": 110,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks"
  },
  {
      "bibid": 110,
      "fieldid": 443052,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Rineka Cipta"
  },
  {
      "bibid": 110,
      "fieldid": 443053,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992"
  },
  {
      "bibid": 111,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "135256. 135257"
  },
  {
      "bibid": 111,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Rosda Jayaputra"
  },
  {
      "bibid": 111,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 111,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 111,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-426-275-7"
  },
  {
      "bibid": 111,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 268 hlm."
  },
  {
      "bibid": 111,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 111,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 111,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 111,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 111,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Penerbit"
  },
  {
      "bibid": 111,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 112,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "124803"
  },
  {
      "bibid": 112,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Prentice-Hall"
  },
  {
      "bibid": 112,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 112,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Englewood Ciffs, N.J."
  },
  {
      "bibid": 112,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-13-066119-8"
  },
  {
      "bibid": 112,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xii, ... hlm."
  },
  {
      "bibid": 112,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 112,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1986"
  },
  {
      "bibid": 112,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 112,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "25 cm."
  },
  {
      "bibid": 112,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Tropen"
  },
  {
      "bibid": 112,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 114,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128905. 128908"
  },
  {
      "bibid": 114,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-3"
  },
  {
      "bibid": 114,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 114,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 114,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-149-3"
  },
  {
      "bibid": 114,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 156 hlm."
  },
  {
      "bibid": 114,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 114,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 114,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1995"
  },
  {
      "bibid": 114,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 114,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 114,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 114,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 115,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "125570"
  },
  {
      "bibid": 115,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2"
  },
  {
      "bibid": 115,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 115,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Belmont, California"
  },
  {
      "bibid": 115,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Wadsworth"
  },
  {
      "bibid": 115,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, a54 hlm."
  },
  {
      "bibid": 115,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 115,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1990"
  },
  {
      "bibid": 115,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 115,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "28 cm."
  },
  {
      "bibid": 115,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2S2PT/95"
  },
  {
      "bibid": 115,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 116,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "114935. 114934."
  },
  {
      "bibid": 116,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 116,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 116,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London, Academic Press Inc., 1983."
  },
  {
      "bibid": 116,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-12-141352-0."
  },
  {
      "bibid": 116,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xv, 403 hlm., il., 23 cm."
  },
  {
      "bibid": 116,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks"
  },
  {
      "bibid": 117,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "92903"
  },
  {
      "bibid": 117,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Datamost"
  },
  {
      "bibid": 117,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 117,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Reston, Virginia"
  },
  {
      "bibid": 117,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0835901181"
  },
  {
      "bibid": 117,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "197 hlm."
  },
  {
      "bibid": 117,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 117,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1983"
  },
  {
      "bibid": 117,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 117,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 117,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The Asia Foundation"
  },
  {
      "bibid": 117,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 118,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "127547. 127548. 127549"
  },
  {
      "bibid": 118,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Elex Media Komputindo"
  },
  {
      "bibid": 118,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 118,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 118,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-537-017-0"
  },
  {
      "bibid": 118,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xxii, 529 hlm."
  },
  {
      "bibid": 118,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "3 eks."
  },
  {
      "bibid": 118,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992"
  },
  {
      "bibid": 118,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 118,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 118,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 118,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 119,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "125971. 125972"
  },
  {
      "bibid": 119,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Elex Media Komputindo"
  },
  {
      "bibid": 119,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-3"
  },
  {
      "bibid": 119,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 119,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 119,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-537-098-7"
  },
  {
      "bibid": 119,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 153 hlm."
  },
  {
      "bibid": 119,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 119,
      "fieldid": 10,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 119,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 119,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 119,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 120,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128982.128983.128986"
  },
  {
      "bibid": 120,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 120,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. 1"
  },
  {
      "bibid": 120,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 120,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 120,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-123-X"
  },
  {
      "bibid": 120,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 238 hlm."
  },
  {
      "bibid": 120,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "3 eks."
  },
  {
      "bibid": 120,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1993"
  },
  {
      "bibid": 120,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 120,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 120,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 120,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/juf/unna"
  },
  {
      "bibid": 120,
      "fieldid": 11409,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "005.1"
  },
  {
      "bibid": 121,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "115836"
  },
  {
      "bibid": 121,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "McGraw-Hill"
  },
  {
      "bibid": 121,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-4"
  },
  {
      "bibid": 121,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 121,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 121,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-07-023049-8"
  },
  {
      "bibid": 121,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, 414 hlm."
  },
  {
      "bibid": 121,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 121,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1985"
  },
  {
      "bibid": 121,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 121,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 121,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The Asia Foundation"
  },
  {
      "bibid": 121,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 122,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "129027"
  },
  {
      "bibid": 122,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 122,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-3"
  },
  {
      "bibid": 122,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 122,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 122,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-057-8"
  },
  {
      "bibid": 122,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 194 hlm."
  },
  {
      "bibid": 122,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 122,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1993"
  },
  {
      "bibid": 122,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 122,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 122,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 122,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 123,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "162122. 160018"
  },
  {
      "bibid": 123,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2"
  },
  {
      "bibid": 123,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 123,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 123,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Erlangga"
  },
  {
      "bibid": 123,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xx, 444 hlm."
  },
  {
      "bibid": 123,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 123,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1988"
  },
  {
      "bibid": 123,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 123,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "25 cm."
  },
  {
      "bibid": 123,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Proyek UPI"
  },
  {
      "bibid": 123,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 124,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "127814"
  },
  {
      "bibid": 124,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 124,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 124,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 124,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-537-344-7"
  },
  {
      "bibid": 124,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 352 hlm."
  },
  {
      "bibid": 124,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 124,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Elex Media Komputindo"
  },
  {
      "bibid": 124,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1993"
  },
  {
      "bibid": 124,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 124,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 124,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 124,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 125,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "129096. 129097. 129099. 129100"
  },
  {
      "bibid": 125,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 125,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-5"
  },
  {
      "bibid": 125,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 125,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 125,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-144-0"
  },
  {
      "bibid": 125,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, 366 hlm."
  },
  {
      "bibid": 125,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks."
  },
  {
      "bibid": 125,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 125,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 125,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 125,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 125,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 126,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "125490"
  },
  {
      "bibid": 126,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Plenum Press"
  },
  {
      "bibid": 126,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 126,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 126,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-306-44223-X"
  },
  {
      "bibid": 126,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 488 hlm."
  },
  {
      "bibid": 126,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 126,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992"
  },
  {
      "bibid": 126,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 126,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "26 cm."
  },
  {
      "bibid": 126,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2S2PT/95"
  },
  {
      "bibid": 126,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 127,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "131176"
  },
  {
      "bibid": 127,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Prentice-Hall"
  },
  {
      "bibid": 127,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 127,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 127,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-13-190950-9"
  },
  {
      "bibid": 127,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "294 hlm."
  },
  {
      "bibid": 127,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 127,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1995"
  },
  {
      "bibid": 127,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 127,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "25 cm."
  },
  {
      "bibid": 127,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 96/97"
  },
  {
      "bibid": 127,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/ar"
  },
  {
      "bibid": 128,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "122663. 169554. 169556. 169558. 169559. 169555"
  },
  {
      "bibid": 128,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-3"
  },
  {
      "bibid": 128,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 128,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 128,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-420-171-5"
  },
  {
      "bibid": 128,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xxv, 1167 hlm."
  },
  {
      "bibid": 128,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "6 eks."
  },
  {
      "bibid": 128,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/rm/ln"
  },
  {
      "bibid": 128,
      "fieldid": 441472,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.4"
  },
  {
      "bibid": 128,
      "fieldid": 441473,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Gadjah Mada University Press"
  },
  {
      "bibid": 128,
      "fieldid": 441474,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "[s.a]"
  },
  {
      "bibid": 128,
      "fieldid": 441475,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 128,
      "fieldid": 441476,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 129,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128937"
  },
  {
      "bibid": 129,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 129,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 129,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 129,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 129,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-159-0"
  },
  {
      "bibid": 129,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 330 hlm."
  },
  {
      "bibid": 129,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 129,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1993"
  },
  {
      "bibid": 129,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 129,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 129,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 129,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 130,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "120289"
  },
  {
      "bibid": 130,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 130,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 130,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 130,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 130,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 137 hlm."
  },
  {
      "bibid": 130,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 130,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1990"
  },
  {
      "bibid": 130,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 130,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 130,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 132,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128803. 128804"
  },
  {
      "bibid": 132,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 132,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-5"
  },
  {
      "bibid": 132,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 132,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 132,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-115-9"
  },
  {
      "bibid": 132,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xix, 787 hlm."
  },
  {
      "bibid": 132,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 132,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 132,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 132,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 132,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 132,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 133,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128773. 128771. 128772. 128774. 128775"
  },
  {
      "bibid": 133,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-1"
  },
  {
      "bibid": 133,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 133,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 133,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 133,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 202 hlm."
  },
  {
      "bibid": 133,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "5 eks."
  },
  {
      "bibid": 133,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1991"
  },
  {
      "bibid": 133,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 133,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 133,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 134,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128780. 128779. 128778. 128776. 128777. 128781"
  },
  {
      "bibid": 134,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-1"
  },
  {
      "bibid": 134,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 134,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 134,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 134,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vi, 381 hlm."
  },
  {
      "bibid": 134,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "6 Eks."
  },
  {
      "bibid": 134,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1991"
  },
  {
      "bibid": 134,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 134,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 134,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Royy"
  },
  {
      "bibid": 135,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "147412"
  },
  {
      "bibid": 135,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 135,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 135,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "McGraw-Hill"
  },
  {
      "bibid": 135,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, 463 hlm."
  },
  {
      "bibid": 135,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 135,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1973"
  },
  {
      "bibid": 135,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 135,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 135,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 135,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 136,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "153989"
  },
  {
      "bibid": 136,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 136,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Pacific Palisades"
  },
  {
      "bibid": 136,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Goodyear"
  },
  {
      "bibid": 136,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 310 hlm."
  },
  {
      "bibid": 136,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 136,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1970"
  },
  {
      "bibid": 136,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 136,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 136,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "SPP/DPP"
  },
  {
      "bibid": 136,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 137,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "113396"
  },
  {
      "bibid": 137,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Osborne/McGraw-Hill"
  },
  {
      "bibid": 137,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 137,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Barkeley, CA"
  },
  {
      "bibid": 137,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-931988-85-3"
  },
  {
      "bibid": 137,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xi, 580 hlm."
  },
  {
      "bibid": 137,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 137,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1983"
  },
  {
      "bibid": 137,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 137,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 137,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The Asia Foundation"
  },
  {
      "bibid": 137,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 138,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "117914"
  },
  {
      "bibid": 138,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 138,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 138,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Rosda Jayaputra"
  },
  {
      "bibid": 138,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vi, 81 hlm."
  },
  {
      "bibid": 138,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 138,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1985"
  },
  {
      "bibid": 138,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 138,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 138,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 138,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 139,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "120160"
  },
  {
      "bibid": 139,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 139,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 139,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 139,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 195 hlm."
  },
  {
      "bibid": 139,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 139,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1990"
  },
  {
      "bibid": 139,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 139,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 139,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 139,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 140,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "106231"
  },
  {
      "bibid": 140,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/LILIS"
  },
  {
      "bibid": 140,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 140,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 140,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 53 hlm."
  },
  {
      "bibid": 140,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks"
  },
  {
      "bibid": 140,
      "fieldid": 441586,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.6"
  },
  {
      "bibid": 140,
      "fieldid": 441587,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Aksara Persada Press"
  },
  {
      "bibid": 140,
      "fieldid": 441588,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1984"
  },
  {
      "bibid": 140,
      "fieldid": 441589,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 140,
      "fieldid": 441590,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm"
  },
  {
      "bibid": 143,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "120149. 167724"
  },
  {
      "bibid": 143,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 143,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 143,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 143,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xii, 194 hlm."
  },
  {
      "bibid": 143,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 143,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1990"
  },
  {
      "bibid": 143,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 143,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 143,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T"
  },
  {
      "bibid": 143,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 144,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "113133"
  },
  {
      "bibid": 144,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "McGraw-Hill"
  },
  {
      "bibid": 144,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 144,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 144,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-07-035778-1"
  },
  {
      "bibid": 144,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xvi, 222 hlm."
  },
  {
      "bibid": 144,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 144,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1987"
  },
  {
      "bibid": 144,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 144,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "27 cm."
  },
  {
      "bibid": 144,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The Asia Foundation"
  },
  {
      "bibid": 144,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 145,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "129854"
  },
  {
      "bibid": 145,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 145,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 145,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 145,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-078-0"
  },
  {
      "bibid": 145,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vi, 319 hlm."
  },
  {
      "bibid": 145,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 145,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992"
  },
  {
      "bibid": 145,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 145,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 145,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 146,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "128940"
  },
  {
      "bibid": 146,
      "fieldid": 2497,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 146,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2"
  },
  {
      "bibid": 146,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 146,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 146,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-533-217-1"
  },
  {
      "bibid": 146,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xi, 587 hlm."
  },
  {
      "bibid": 146,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 146,
      "fieldid": 2498,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1994"
  },
  {
      "bibid": 146,
      "fieldid": 2499,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 146,
      "fieldid": 2500,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 146,
      "fieldid": 2501,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 146,
      "fieldid": 2502,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 147,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "114920. 114921. 114922"
  },
  {
      "bibid": 147,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Neni"
  },
  {
      "bibid": 147,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 147,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 147,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0070286310"
  },
  {
      "bibid": 147,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xii, 548 hlm.,"
  },
  {
      "bibid": 147,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "3 eks."
  },
  {
      "bibid": 147,
      "fieldid": 444675,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "McGraw-Hill"
  },
  {
      "bibid": 147,
      "fieldid": 444676,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1982"
  },
  {
      "bibid": 147,
      "fieldid": 444677,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 147,
      "fieldid": 444678,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 148,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "108524.108521"
  },
  {
      "bibid": 148,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan."
  },
  {
      "bibid": 148,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "cm."
  },
  {
      "bibid": 148,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 148,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 148,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xv, 112 hlm."
  },
  {
      "bibid": 148,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 148,
      "fieldid": 272743,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.434"
  },
  {
      "bibid": 148,
      "fieldid": 272744,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 148,
      "fieldid": 272745,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1988"
  },
  {
      "bibid": 148,
      "fieldid": 272746,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 148,
      "fieldid": 272747,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm"
  },
  {
      "bibid": 148,
      "fieldid": 272748,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Bank Dunia"
  },
  {
      "bibid": 149,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "124778"
  },
  {
      "bibid": 149,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-3"
  },
  {
      "bibid": 149,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 149,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 149,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Gramedia"
  },
  {
      "bibid": 149,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 148 hlm."
  },
  {
      "bibid": 149,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 149,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1988"
  },
  {
      "bibid": 149,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 149,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 149,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 149,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 150,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "9203"
  },
  {
      "bibid": 150,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/lisna"
  },
  {
      "bibid": 150,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 150,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 150,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, 203 hlm."
  },
  {
      "bibid": 150,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks"
  },
  {
      "bibid": 150,
      "fieldid": 443361,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Greenberg"
  },
  {
      "bibid": 150,
      "fieldid": 443362,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1954"
  },
  {
      "bibid": 150,
      "fieldid": 445394,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.3"
  },
  {
      "bibid": 150,
      "fieldid": 445395,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 153,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "138854.133317."
  },
  {
      "bibid": 153,
      "fieldid": 46231,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Alumnus"
  },
  {
      "bibid": 153,
      "fieldid": 46227,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Bina Aksara"
  },
  {
      "bibid": 153,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-5+9"
  },
  {
      "bibid": 153,
      "fieldid": 46230,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm."
  },
  {
      "bibid": 153,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 153,
      "fieldid": 46229,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 153,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 153,
      "fieldid": 46228,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1989"
  },
  {
      "bibid": 153,
      "fieldid": 46226,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.42"
  },
  {
      "bibid": 153,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "x, 314 hlm."
  },
  {
      "bibid": 153,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 153,
      "fieldid": 46232,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana . lilis/ Eli R"
  },
  {
      "bibid": 154,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "90069"
  },
  {
      "bibid": 154,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 154,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 154,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Badan Penerbit Pekerjaan Umum"
  },
  {
      "bibid": 154,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "269 hlm."
  },
  {
      "bibid": 154,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 154,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "[s.a.]"
  },
  {
      "bibid": 154,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 154,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "28 cm."
  },
  {
      "bibid": 154,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Pelita"
  },
  {
      "bibid": 154,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 155,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "134862."
  },
  {
      "bibid": 155,
      "fieldid": 58561,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "ITB"
  },
  {
      "bibid": 155,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2."
  },
  {
      "bibid": 155,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 155,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 155,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-8591-56-9."
  },
  {
      "bibid": 155,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "11a, 280 hlm."
  },
  {
      "bibid": 155,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 155,
      "fieldid": 58562,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1997"
  },
  {
      "bibid": 155,
      "fieldid": 58563,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 155,
      "fieldid": 58564,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 155,
      "fieldid": 58565,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "lilis/wawan"
  },
  {
      "bibid": 155,
      "fieldid": 444437,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "004.62"
  },
  {
      "bibid": 157,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "120115. 120116"
  },
  {
      "bibid": 157,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 157,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 157,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 157,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 157,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 171 hlm."
  },
  {
      "bibid": 157,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 157,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1990"
  },
  {
      "bibid": 157,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 157,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 157,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T"
  },
  {
      "bibid": 157,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 158,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "103557."
  },
  {
      "bibid": 158,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Neni"
  },
  {
      "bibid": 158,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 158,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 158,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-07-065159-0"
  },
  {
      "bibid": 158,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, 408 hlm."
  },
  {
      "bibid": 158,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 158,
      "fieldid": 444633,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "McGraw-Hill Book Company"
  },
  {
      "bibid": 158,
      "fieldid": 444634,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1980"
  },
  {
      "bibid": 158,
      "fieldid": 444635,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 158,
      "fieldid": 444636,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "27 cm."
  },
  {
      "bibid": 159,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "167773. 120616. 167505. 2007-583.2007-582. 2009-5176"
  },
  {
      "bibid": 159,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Remaja Rosdakarya"
  },
  {
      "bibid": 159,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-16"
  },
  {
      "bibid": 159,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 159,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 159,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-514-051-5"
  },
  {
      "bibid": 159,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xvii, 253 hlm."
  },
  {
      "bibid": 159,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "7 eks."
  },
  {
      "bibid": 159,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2002"
  },
  {
      "bibid": 159,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 159,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 159,
      "fieldid": 13,
      "tag": 970,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Rp. 43.000,-"
  },
  {
      "bibid": 159,
      "fieldid": 14,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "DIKS 2004"
  },
  {
      "bibid": 159,
      "fieldid": 15,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/lilis/eli r/sob"
  },
  {
      "bibid": 159,
      "fieldid": 314686,
      "tag": 520,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "2009-5176, th 2000 cet.9"
  },
  {
      "bibid": 164,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "134047"
  },
  {
      "bibid": 164,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Erlangga"
  },
  {
      "bibid": 164,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-4"
  },
  {
      "bibid": 164,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 164,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 164,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "33-02-006-6"
  },
  {
      "bibid": 164,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, 508 hlm."
  },
  {
      "bibid": 164,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 164,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1989"
  },
  {
      "bibid": 164,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 164,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 164,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Alumni"
  },
  {
      "bibid": 164,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 165,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "110475.64947"
  },
  {
      "bibid": 165,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana.Sobariah/unna"
  },
  {
      "bibid": 165,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed.1"
  },
  {
      "bibid": 165,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 165,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 165,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xi, 218 hlm."
  },
  {
      "bibid": 165,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 165,
      "fieldid": 109353,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.501"
  },
  {
      "bibid": 165,
      "fieldid": 109354,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Bina Cipta"
  },
  {
      "bibid": 165,
      "fieldid": 109355,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1976"
  },
  {
      "bibid": 165,
      "fieldid": 109356,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 165,
      "fieldid": 109357,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "18 cm."
  },
  {
      "bibid": 165,
      "fieldid": 109358,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Pelita"
  },
  {
      "bibid": 167,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "164007"
  },
  {
      "bibid": 167,
      "fieldid": 27738,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Alumni"
  },
  {
      "bibid": 167,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 167,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 167,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-414-099-6."
  },
  {
      "bibid": 167,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 324 hlm."
  },
  {
      "bibid": 167,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1  eks."
  },
  {
      "bibid": 167,
      "fieldid": 27739,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1988."
  },
  {
      "bibid": 167,
      "fieldid": 27740,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 167,
      "fieldid": 27741,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm."
  },
  {
      "bibid": 167,
      "fieldid": 27742,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "rahmat/popon"
  },
  {
      "bibid": 167,
      "fieldid": 442872,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "025.1068"
  },
  {
      "bibid": 168,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "126942"
  },
  {
      "bibid": 168,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Alumni"
  },
  {
      "bibid": 168,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 168,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 168,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-414-098-8"
  },
  {
      "bibid": 168,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 168 hlm."
  },
  {
      "bibid": 168,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 168,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1987"
  },
  {
      "bibid": 168,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 168,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T/95"
  },
  {
      "bibid": 168,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 168,
      "fieldid": 157531,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "025.1068"
  },
  {
      "bibid": 169,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "57267. 57270. 57269. 57271"
  },
  {
      "bibid": 169,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 169,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 169,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andre Deutsch"
  },
  {
      "bibid": 169,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 135 hlm."
  },
  {
      "bibid": 169,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks."
  },
  {
      "bibid": 169,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1969"
  },
  {
      "bibid": 169,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 169,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The British Council"
  },
  {
      "bibid": 169,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 170,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "69350"
  },
  {
      "bibid": 170,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 170,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 170,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 170,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0070574634."
  },
  {
      "bibid": 170,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 264 hlm., il.,"
  },
  {
      "bibid": 170,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks"
  },
  {
      "bibid": 170,
      "fieldid": 442440,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "McGraw-Hill"
  },
  {
      "bibid": 170,
      "fieldid": 442441,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1978"
  },
  {
      "bibid": 170,
      "fieldid": 442442,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 171,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "166760.166756.2010-4244.2010-4245.2010-4246.2010-4247.166757.166762.2016-00134.2020-00201"
  },
  {
      "bibid": 171,
      "fieldid": 9,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "027.8"
  },
  {
      "bibid": 171,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. 1, Cet. 7"
  },
  {
      "bibid": 171,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 171,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 171,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-526-059-6"
  },
  {
      "bibid": 171,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ix, 209 hlm."
  },
  {
      "bibid": 171,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "10 eks."
  },
  {
      "bibid": 171,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Bumi Aksara"
  },
  {
      "bibid": 171,
      "fieldid": 11,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992, 2009"
  },
  {
      "bibid": 171,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "ilus."
  },
  {
      "bibid": 171,
      "fieldid": 13,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm."
  },
  {
      "bibid": 171,
      "fieldid": 14,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Proyek Peningkatan UPI/Pengganti"
  },
  {
      "bibid": 171,
      "fieldid": 15,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "tatang. nana.Sobariah/rm/DA/ID/semata"
  },
  {
      "bibid": 172,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "67560"
  },
  {
      "bibid": 172,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/ar"
  },
  {
      "bibid": 172,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 172,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Chicago, SRA, 1973"
  },
  {
      "bibid": 172,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xi, 338 hlm."
  },
  {
      "bibid": 172,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 172,
      "fieldid": 443845,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 172,
      "fieldid": 443846,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "26 cm."
  },
  {
      "bibid": 173,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "118443"
  },
  {
      "bibid": 173,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Greenwood Press"
  },
  {
      "bibid": 173,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 173,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Westport, Connecticut"
  },
  {
      "bibid": 173,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-313-22684-9"
  },
  {
      "bibid": 173,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vi, 208 hlm."
  },
  {
      "bibid": 173,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 173,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1982"
  },
  {
      "bibid": 173,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 173,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 173,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 174,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "52538"
  },
  {
      "bibid": 174,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-3"
  },
  {
      "bibid": 174,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 174,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 174,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-85365-127-2"
  },
  {
      "bibid": 174,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vi, 217 hlm."
  },
  {
      "bibid": 174,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 174,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "The Library Association1974"
  },
  {
      "bibid": 174,
      "fieldid": 10,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 174,
      "fieldid": 11,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The British Council"
  },
  {
      "bibid": 174,
      "fieldid": 12,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 175,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "100666"
  },
  {
      "bibid": 175,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "American Library Association"
  },
  {
      "bibid": 175,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 175,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Chicago"
  },
  {
      "bibid": 175,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-8389-0297-9"
  },
  {
      "bibid": 175,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vi, 213 hlm."
  },
  {
      "bibid": 175,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 175,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1979"
  },
  {
      "bibid": 175,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 175,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The Asia Foundation"
  },
  {
      "bibid": 175,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 176,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "X"
  },
  {
      "bibid": 176,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Pergamon"
  },
  {
      "bibid": 176,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2"
  },
  {
      "bibid": 176,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 176,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Oxford"
  },
  {
      "bibid": 176,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-08-035754-7"
  },
  {
      "bibid": 176,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiv, 251 hlm."
  },
  {
      "bibid": 176,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 176,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1988"
  },
  {
      "bibid": 176,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 176,
      "fieldid": 12,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 177,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "140231"
  },
  {
      "bibid": 177,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Unesco"
  },
  {
      "bibid": 177,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 177,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Paris"
  },
  {
      "bibid": 177,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "92-3-101152-9"
  },
  {
      "bibid": 177,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "74 hlm."
  },
  {
      "bibid": 177,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 177,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1974"
  },
  {
      "bibid": 177,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 177,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 177,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 178,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "120356"
  },
  {
      "bibid": 178,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Oxford & IBH"
  },
  {
      "bibid": 178,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2"
  },
  {
      "bibid": 178,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 178,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New Delhi"
  },
  {
      "bibid": 178,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-85365-523-5"
  },
  {
      "bibid": 178,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "218 hlm."
  },
  {
      "bibid": 178,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 178,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1981"
  },
  {
      "bibid": 178,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 178,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 178,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 178,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 179,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "131515.2012-02667"
  },
  {
      "bibid": 179,
      "fieldid": 101793,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Remaja Karya"
  },
  {
      "bibid": 179,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 179,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 179,
      "fieldid": 101792,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "372.4"
  },
  {
      "bibid": 179,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "x, 199 hlm."
  },
  {
      "bibid": 179,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 179,
      "fieldid": 101794,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1986"
  },
  {
      "bibid": 179,
      "fieldid": 101795,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 179,
      "fieldid": 101796,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 179,
      "fieldid": 101797,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2t 96/97"
  },
  {
      "bibid": 179,
      "fieldid": 101798,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "h2m. Sob./lilis"
  },
  {
      "bibid": 180,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "111143"
  },
  {
      "bibid": 180,
      "fieldid": 23164,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "001.51"
  },
  {
      "bibid": 180,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 180,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 180,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-03-056287-2"
  },
  {
      "bibid": 180,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xvi, 288 hlm."
  },
  {
      "bibid": 180,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 180,
      "fieldid": 23165,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Holt, Rinehart and Winston"
  },
  {
      "bibid": 180,
      "fieldid": 23166,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1984"
  },
  {
      "bibid": 180,
      "fieldid": 23167,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 180,
      "fieldid": 23168,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 180,
      "fieldid": 23169,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 180,
      "fieldid": 23170,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 181,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "125488"
  },
  {
      "bibid": 181,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Plenum Press"
  },
  {
      "bibid": 181,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 181,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 181,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-306-44257-4"
  },
  {
      "bibid": 181,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "x, 274 hlm."
  },
  {
      "bibid": 181,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 181,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992"
  },
  {
      "bibid": 181,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 181,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "25 cm."
  },
  {
      "bibid": 181,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 183,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "135484. 137848. 1378"
  },
  {
      "bibid": 183,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-9."
  },
  {
      "bibid": 183,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 183,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 183,
      "fieldid": 56154,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "711.57"
  },
  {
      "bibid": 183,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 69 hlm."
  },
  {
      "bibid": 183,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2"
  },
  {
      "bibid": 183,
      "fieldid": 56155,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "ITB"
  },
  {
      "bibid": 183,
      "fieldid": 56156,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1981"
  },
  {
      "bibid": 183,
      "fieldid": 56157,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "ill."
  },
  {
      "bibid": 183,
      "fieldid": 56158,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 183,
      "fieldid": 56159,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "DA"
  },
  {
      "bibid": 184,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "57205. 57208"
  },
  {
      "bibid": 184,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Seminar Press"
  },
  {
      "bibid": 184,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 184,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 184,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-12-815560-4"
  },
  {
      "bibid": 184,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "183 hlm."
  },
  {
      "bibid": 184,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 184,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1972"
  },
  {
      "bibid": 184,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 184,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The British Council"
  },
  {
      "bibid": 184,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 185,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "57662. 57663"
  },
  {
      "bibid": 185,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Seminar Press"
  },
  {
      "bibid": 185,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 185,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 185,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-12-909150-2"
  },
  {
      "bibid": 185,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 195 hlm."
  },
  {
      "bibid": 185,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 185,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1973"
  },
  {
      "bibid": 185,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 185,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 185,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The British Council"
  },
  {
      "bibid": 185,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/le"
  },
  {
      "bibid": 186,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "57660"
  },
  {
      "bibid": 186,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Linnet Book & Clive Bingley"
  },
  {
      "bibid": 186,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 186,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Hamden, Connecticut"
  },
  {
      "bibid": 186,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-208-01076-9"
  },
  {
      "bibid": 186,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "107 hlm."
  },
  {
      "bibid": 186,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 186,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1971"
  },
  {
      "bibid": 186,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 186,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The Asia Foundation"
  },
  {
      "bibid": 186,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 187,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "144981"
  },
  {
      "bibid": 187,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Penerbit ITB"
  },
  {
      "bibid": 187,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 187,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Bandung"
  },
  {
      "bibid": 187,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-8001-39-7"
  },
  {
      "bibid": 187,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xvi, 117 hlm."
  },
  {
      "bibid": 187,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 187,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1989"
  },
  {
      "bibid": 187,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 187,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 187,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan FPBS IKIP Bandung"
  },
  {
      "bibid": 187,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/Yati"
  },
  {
      "bibid": 187,
      "fieldid": 443359,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "005.13"
  },
  {
      "bibid": 188,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "57272"
  },
  {
      "bibid": 188,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 188,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 188,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andre Deutsch"
  },
  {
      "bibid": 188,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "96 hlm."
  },
  {
      "bibid": 188,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 188,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1970"
  },
  {
      "bibid": 188,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 188,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 188,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The British Council"
  },
  {
      "bibid": 188,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 189,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "129190. 129191. 129192. 129193. 129194"
  },
  {
      "bibid": 189,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Gramedia"
  },
  {
      "bibid": 189,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 189,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 189,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-403-440-1"
  },
  {
      "bibid": 189,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xxxi, 584 hlm."
  },
  {
      "bibid": 189,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "5 eks."
  },
  {
      "bibid": 189,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1989"
  },
  {
      "bibid": 189,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 189,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T 95/96"
  },
  {
      "bibid": 189,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 190,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "111235"
  },
  {
      "bibid": 190,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Universe Books"
  },
  {
      "bibid": 190,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 190,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 190,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-87663-365-3"
  },
  {
      "bibid": 190,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "240 hlm."
  },
  {
      "bibid": 190,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 190,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1982"
  },
  {
      "bibid": 190,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 190,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 190,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 191,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "116814"
  },
  {
      "bibid": 191,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Sage"
  },
  {
      "bibid": 191,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 191,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Baverly Hills"
  },
  {
      "bibid": 191,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-8039-1511-X"
  },
  {
      "bibid": 191,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "284 hlm."
  },
  {
      "bibid": 191,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 191,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1980"
  },
  {
      "bibid": 191,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 191,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Hadiah The Asia Foundation"
  },
  {
      "bibid": 191,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 192,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "118901. 170893"
  },
  {
      "bibid": 192,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 192,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-20"
  },
  {
      "bibid": 192,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 192,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Yogyakarta"
  },
  {
      "bibid": 192,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 218 hlm."
  },
  {
      "bibid": 192,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 192,
      "fieldid": 66628,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andi Offset"
  },
  {
      "bibid": 192,
      "fieldid": 66629,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1991"
  },
  {
      "bibid": 192,
      "fieldid": 66630,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 192,
      "fieldid": 66631,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "L.M. Sadeli"
  },
  {
      "bibid": 192,
      "fieldid": 66632,
      "tag": 520,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jilid 2"
  },
  {
      "bibid": 193,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "105534"
  },
  {
      "bibid": 193,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Clive Bingley"
  },
  {
      "bibid": 193,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2"
  },
  {
      "bibid": 193,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 193,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 193,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-208-01689-X"
  },
  {
      "bibid": 193,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "263 hlm."
  },
  {
      "bibid": 193,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 193,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1973"
  },
  {
      "bibid": 193,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 193,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The British Council"
  },
  {
      "bibid": 193,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 194,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "116807"
  },
  {
      "bibid": 194,
      "fieldid": 99831,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "South- Western Pnblishing"
  },
  {
      "bibid": 194,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "5th ed."
  },
  {
      "bibid": 194,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 194,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cincinnati"
  },
  {
      "bibid": 194,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0538057505"
  },
  {
      "bibid": 194,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "iv, 267 hlm."
  },
  {
      "bibid": 194,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 Eks."
  },
  {
      "bibid": 194,
      "fieldid": 99832,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1984"
  },
  {
      "bibid": 194,
      "fieldid": 99833,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 194,
      "fieldid": 99834,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "ELI R/ID"
  },
  {
      "bibid": 194,
      "fieldid": 531693,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "027.69"
  },
  {
      "bibid": 194,
      "fieldid": 531694,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 194,
      "fieldid": 531695,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 195,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "69630."
  },
  {
      "bibid": 195,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/ar"
  },
  {
      "bibid": 195,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 195,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "San Francisco, W.H. Freeman and Company,"
  },
  {
      "bibid": 195,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xxii, 360 hlm., il., 23 cm."
  },
  {
      "bibid": 195,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks"
  },
  {
      "bibid": 196,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "150784"
  },
  {
      "bibid": 196,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 196,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Englewood Cliffs, N.J."
  },
  {
      "bibid": 196,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Prentice-Hall"
  },
  {
      "bibid": 196,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiv, 402 hlm."
  },
  {
      "bibid": 196,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 196,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1966"
  },
  {
      "bibid": 196,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 196,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 196,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 196,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/ID"
  },
  {
      "bibid": 196,
      "fieldid": 569047,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "004.2"
  },
  {
      "bibid": 197,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "111233"
  },
  {
      "bibid": 197,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Macmillan"
  },
  {
      "bibid": 197,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 197,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 197,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-02-597700-8"
  },
  {
      "bibid": 197,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xiii, 156 hlm."
  },
  {
      "bibid": 197,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 197,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1982"
  },
  {
      "bibid": 197,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 197,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 197,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 197,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 198,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "55443"
  },
  {
      "bibid": 198,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 198,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 198,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Balai Pustaka"
  },
  {
      "bibid": 198,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "27 hlm."
  },
  {
      "bibid": 198,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 198,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1975"
  },
  {
      "bibid": 198,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 198,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "19 cm."
  },
  {
      "bibid": 198,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Pelita II"
  },
  {
      "bibid": 198,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 199,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "104146."
  },
  {
      "bibid": 199,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-9."
  },
  {
      "bibid": 199,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 199,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Illinois"
  },
  {
      "bibid": 199,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0870945807."
  },
  {
      "bibid": 199,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xv, 252 hlm."
  },
  {
      "bibid": 199,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks"
  },
  {
      "bibid": 199,
      "fieldid": 9,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana,sob"
  },
  {
      "bibid": 199,
      "fieldid": 443390,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Dow Jones-Irwin"
  },
  {
      "bibid": 199,
      "fieldid": 443391,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1985"
  },
  {
      "bibid": 199,
      "fieldid": 443392,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 200,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "91880"
  },
  {
      "bibid": 200,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan"
  },
  {
      "bibid": 200,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 200,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 200,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 200,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xvi, 205 hlm."
  },
  {
      "bibid": 200,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 200,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1983"
  },
  {
      "bibid": 200,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 200,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 200,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 200,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 201,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "57264"
  },
  {
      "bibid": 201,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 201,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 201,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Andre Deutsch"
  },
  {
      "bibid": 201,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "90 hlm."
  },
  {
      "bibid": 201,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 201,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1970"
  },
  {
      "bibid": 201,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 201,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The British Council"
  },
  {
      "bibid": 201,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/ar"
  },
  {
      "bibid": 202,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "92857"
  },
  {
      "bibid": 202,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Twayne"
  },
  {
      "bibid": 202,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 202,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Boston"
  },
  {
      "bibid": 202,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-8057-6325-2"
  },
  {
      "bibid": 202,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "155 hlm."
  },
  {
      "bibid": 202,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 202,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1978"
  },
  {
      "bibid": 202,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 202,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The Asia Foundation"
  },
  {
      "bibid": 202,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 203,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "113476"
  },
  {
      "bibid": 203,
      "fieldid": 9,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 203,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 203,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Berkeley"
  },
  {
      "bibid": 203,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0078811708"
  },
  {
      "bibid": 203,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xii, 272 hlm."
  },
  {
      "bibid": 203,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 203,
      "fieldid": 10,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 203,
      "fieldid": 11,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "McGraw-Hill"
  },
  {
      "bibid": 203,
      "fieldid": 12,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1985"
  },
  {
      "bibid": 203,
      "fieldid": 13,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 203,
      "fieldid": 14,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "28 cm."
  },
  {
      "bibid": 204,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "52559"
  },
  {
      "bibid": 204,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2"
  },
  {
      "bibid": 204,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 204,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 204,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Clive Bingley"
  },
  {
      "bibid": 204,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "100 hlm."
  },
  {
      "bibid": 204,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 204,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1965"
  },
  {
      "bibid": 204,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 204,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The British Council"
  },
  {
      "bibid": 204,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 205,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "120045. 120044"
  },
  {
      "bibid": 205,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Prentice-Hall Of India"
  },
  {
      "bibid": 205,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2"
  },
  {
      "bibid": 205,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 205,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New Delhi"
  },
  {
      "bibid": 205,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-87692-140-3"
  },
  {
      "bibid": 205,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xii, 324 hlm."
  },
  {
      "bibid": 205,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 205,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1987"
  },
  {
      "bibid": 205,
      "fieldid": 11,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "P2T"
  },
  {
      "bibid": 205,
      "fieldid": 12,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 206,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "60976"
  },
  {
      "bibid": 206,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-9"
  },
  {
      "bibid": 206,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 206,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 206,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Oxford University Press"
  },
  {
      "bibid": 206,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "132 hlm."
  },
  {
      "bibid": 206,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 206,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1971"
  },
  {
      "bibid": 206,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 206,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "18 cm."
  },
  {
      "bibid": 206,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 206,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 207,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "111255"
  },
  {
      "bibid": 207,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Holt, Rinehart and Winston"
  },
  {
      "bibid": 207,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-4"
  },
  {
      "bibid": 207,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 207,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 207,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-03-018871-7"
  },
  {
      "bibid": 207,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xii, 432 hlm."
  },
  {
      "bibid": 207,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 207,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1979"
  },
  {
      "bibid": 207,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 207,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 209,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "37075"
  },
  {
      "bibid": 209,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-7"
  },
  {
      "bibid": 209,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 209,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 209,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "A Mentor Book"
  },
  {
      "bibid": 209,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "x, 222 hlm."
  },
  {
      "bibid": 209,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 209,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1963"
  },
  {
      "bibid": 209,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "18 cm."
  },
  {
      "bibid": 209,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "PTIP"
  },
  {
      "bibid": 209,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 210,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "90655"
  },
  {
      "bibid": 210,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Amacom"
  },
  {
      "bibid": 210,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 210,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 210,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-8144-5643-X"
  },
  {
      "bibid": 210,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "192 hlm."
  },
  {
      "bibid": 210,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 210,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1981"
  },
  {
      "bibid": 210,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "28 cm."
  },
  {
      "bibid": 210,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Hadiah The Asia Foundation"
  },
  {
      "bibid": 210,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 211,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "102073"
  },
  {
      "bibid": 211,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Penerangan"
  },
  {
      "bibid": 211,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 211,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 211,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depen"
  },
  {
      "bibid": 211,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "134 hlm."
  },
  {
      "bibid": 211,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 211,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1984"
  },
  {
      "bibid": 211,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 211,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 211,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 212,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "42332"
  },
  {
      "bibid": 212,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2"
  },
  {
      "bibid": 212,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 212,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 212,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "American Book Company"
  },
  {
      "bibid": 212,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xv, 862 hlm."
  },
  {
      "bibid": 212,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 212,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1963"
  },
  {
      "bibid": 212,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "25 cm."
  },
  {
      "bibid": 212,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Hadiah"
  },
  {
      "bibid": 212,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 213,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "141841.141838.141837.141840"
  },
  {
      "bibid": 213,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 213,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 213,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 213,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "38 hlm."
  },
  {
      "bibid": 213,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "4 eks."
  },
  {
      "bibid": 213,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1983"
  },
  {
      "bibid": 213,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 213,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm."
  },
  {
      "bibid": 213,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/ID/unna"
  },
  {
      "bibid": 213,
      "fieldid": 532228,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "069.5"
  },
  {
      "bibid": 213,
      "fieldid": 532229,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 214,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "29321"
  },
  {
      "bibid": 214,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 214,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New Brunswick, N.J."
  },
  {
      "bibid": 214,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xix, 197 hlm."
  },
  {
      "bibid": 214,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 214,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "The Scarecrow Press"
  },
  {
      "bibid": 214,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1955"
  },
  {
      "bibid": 214,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "22 cm."
  },
  {
      "bibid": 214,
      "fieldid": 12,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 215,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "63512"
  },
  {
      "bibid": 215,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cornell Modern Indonesia Project"
  },
  {
      "bibid": 215,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 215,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 215,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Cornell Modern Indonesia Project"
  },
  {
      "bibid": 215,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "179 hlm."
  },
  {
      "bibid": 215,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 215,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1971"
  },
  {
      "bibid": 215,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 215,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "28 cm."
  },
  {
      "bibid": 215,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Pelita"
  },
  {
      "bibid": 215,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 216,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "116756"
  },
  {
      "bibid": 216,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Wm. C. Brown"
  },
  {
      "bibid": 216,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 216,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Dubuque, Iowa"
  },
  {
      "bibid": 216,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-697-04369-X"
  },
  {
      "bibid": 216,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xviii, 711 hlm."
  },
  {
      "bibid": 216,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 216,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1987"
  },
  {
      "bibid": 216,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 216,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 216,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The Asia Foundation"
  },
  {
      "bibid": 216,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 217,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "150783"
  },
  {
      "bibid": 217,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan"
  },
  {
      "bibid": 217,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 217,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 217,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 217,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "152 hlm."
  },
  {
      "bibid": 217,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 217,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1975"
  },
  {
      "bibid": 217,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 217,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm."
  },
  {
      "bibid": 217,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 217,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 218,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "42340"
  },
  {
      "bibid": 218,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-2"
  },
  {
      "bibid": 218,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 218,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 218,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "American Book Company"
  },
  {
      "bibid": 218,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xv, 730 hlm."
  },
  {
      "bibid": 218,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 218,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1963"
  },
  {
      "bibid": 218,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "25 cm."
  },
  {
      "bibid": 218,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Hadiah"
  },
  {
      "bibid": 218,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 219,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "59623"
  },
  {
      "bibid": 219,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 219,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 219,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Balai Pustaka"
  },
  {
      "bibid": 219,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "39 hlm."
  },
  {
      "bibid": 219,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 219,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1974"
  },
  {
      "bibid": 219,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 219,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "19 cm."
  },
  {
      "bibid": 219,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Pelita"
  },
  {
      "bibid": 219,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 220,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "53798. 53796. 53794"
  },
  {
      "bibid": 220,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 220,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 220,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Balai Pustaka"
  },
  {
      "bibid": 220,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "56 hlm."
  },
  {
      "bibid": 220,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "3 eks."
  },
  {
      "bibid": 220,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1974"
  },
  {
      "bibid": 220,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm."
  },
  {
      "bibid": 220,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Pelita"
  },
  {
      "bibid": 220,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 221,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "91528"
  },
  {
      "bibid": 221,
      "fieldid": 2,
      "tag": 110,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan"
  },
  {
      "bibid": 221,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 221,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 221,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 221,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 158 hlm."
  },
  {
      "bibid": 221,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 221,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1984"
  },
  {
      "bibid": 221,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 221,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 221,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 221,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/juf"
  },
  {
      "bibid": 221,
      "fieldid": 531115,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "080"
  },
  {
      "bibid": 222,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "46525"
  },
  {
      "bibid": 222,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 222,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 222,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Oxford University Press"
  },
  {
      "bibid": 222,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "121 hlm."
  },
  {
      "bibid": 222,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 222,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1967"
  },
  {
      "bibid": 222,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 222,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "17 cm."
  },
  {
      "bibid": 222,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 223,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "59684. 59685. 59686"
  },
  {
      "bibid": 223,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 223,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 223,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Gunung Agung"
  },
  {
      "bibid": 223,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "150 hlm."
  },
  {
      "bibid": 223,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "3 eks."
  },
  {
      "bibid": 223,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1966"
  },
  {
      "bibid": 223,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 223,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Pelita II"
  },
  {
      "bibid": 223,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 224,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "41369"
  },
  {
      "bibid": 224,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 224,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 224,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Oxford University Press"
  },
  {
      "bibid": 224,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "89 hlm."
  },
  {
      "bibid": 224,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 224,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1960"
  },
  {
      "bibid": 224,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 224,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "18 cm."
  },
  {
      "bibid": 224,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The British Council"
  },
  {
      "bibid": 224,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 227,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "123437"
  },
  {
      "bibid": 227,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 227,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 227,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 227,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "vii, 104 hlm."
  },
  {
      "bibid": 227,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 227,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1992"
  },
  {
      "bibid": 227,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 227,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 227,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 228,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "53407. 53410"
  },
  {
      "bibid": 228,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 228,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 228,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Balai Pustaka"
  },
  {
      "bibid": 228,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "107 hlm."
  },
  {
      "bibid": 228,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 228,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1974"
  },
  {
      "bibid": 228,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 228,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Pelita II"
  },
  {
      "bibid": 228,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 229,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "41361"
  },
  {
      "bibid": 229,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 229,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 229,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Oxford University Press"
  },
  {
      "bibid": 229,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "57 hlm."
  },
  {
      "bibid": 229,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 229,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1961"
  },
  {
      "bibid": 229,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 229,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "18 cm."
  },
  {
      "bibid": 229,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The British Council"
  },
  {
      "bibid": 229,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 230,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "111230"
  },
  {
      "bibid": 230,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Prentice-Hall of India"
  },
  {
      "bibid": 230,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 230,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New Delhi"
  },
  {
      "bibid": 230,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-8792-372-4"
  },
  {
      "bibid": 230,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "192 hlm."
  },
  {
      "bibid": 230,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 230,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1985"
  },
  {
      "bibid": 230,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "23 cm."
  },
  {
      "bibid": 230,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 230,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 232,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "113524"
  },
  {
      "bibid": 232,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "McGraw-Hill"
  },
  {
      "bibid": 232,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 232,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "New York"
  },
  {
      "bibid": 232,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "0-07-004852-5"
  },
  {
      "bibid": 232,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "xvii, 312 hlm."
  },
  {
      "bibid": 232,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 232,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1987"
  },
  {
      "bibid": 232,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "17 cm."
  },
  {
      "bibid": 232,
      "fieldid": 12,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan The Asia Foundation"
  },
  {
      "bibid": 232,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana/ID"
  },
  {
      "bibid": 233,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 233,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "London"
  },
  {
      "bibid": 233,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Oxford Univeriosty Press"
  },
  {
      "bibid": 233,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "32 hlm."
  },
  {
      "bibid": 233,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 233,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "[s.a.]"
  },
  {
      "bibid": 233,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 233,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "18 cm."
  },
  {
      "bibid": 233,
      "fieldid": 13,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 234,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "88436"
  },
  {
      "bibid": 234,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 234,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 234,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Depdikbud"
  },
  {
      "bibid": 234,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "111 hlm."
  },
  {
      "bibid": 234,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1 eks."
  },
  {
      "bibid": 234,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1980"
  },
  {
      "bibid": 234,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 234,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "21 cm."
  },
  {
      "bibid": 234,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 234,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
  },
  {
      "bibid": 235,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "144855.145130"
  },
  {
      "bibid": 235,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Cet. ke-3."
  },
  {
      "bibid": 235,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 235,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 235,
      "fieldid": 157512,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "027.006"
  },
  {
      "bibid": 235,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "viii, 70 hlm."
  },
  {
      "bibid": 235,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks"
  },
  {
      "bibid": 235,
      "fieldid": 157513,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Penerbit Djambatan"
  },
  {
      "bibid": 235,
      "fieldid": 157514,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1976"
  },
  {
      "bibid": 235,
      "fieldid": 157515,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il"
  },
  {
      "bibid": 235,
      "fieldid": 157516,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "20 cm"
  },
  {
      "bibid": 235,
      "fieldid": 157517,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Sobariah"
  },
  {
      "bibid": 236,
      "fieldid": 1,
      "tag": 997,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "138666. 164094"
  },
  {
      "bibid": 236,
      "fieldid": 9,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "Yayasan Obor"
  },
  {
      "bibid": 236,
      "fieldid": 3,
      "tag": 250,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Ed. ke-1"
  },
  {
      "bibid": 236,
      "fieldid": 4,
      "tag": 82,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "2",
      "field_data": "22"
  },
  {
      "bibid": 236,
      "fieldid": 5,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "Jakarta"
  },
  {
      "bibid": 236,
      "fieldid": 6,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "979-461-339-8"
  },
  {
      "bibid": 236,
      "fieldid": 7,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "lxviii, 642 hlm."
  },
  {
      "bibid": 236,
      "fieldid": 8,
      "tag": 20,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "2 eks."
  },
  {
      "bibid": 236,
      "fieldid": 10,
      "tag": 260,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "1999"
  },
  {
      "bibid": 236,
      "fieldid": 11,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "b",
      "field_data": "il."
  },
  {
      "bibid": 236,
      "fieldid": 12,
      "tag": 300,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "c",
      "field_data": "24 cm."
  },
  {
      "bibid": 236,
      "fieldid": 13,
      "tag": 541,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "h",
      "field_data": "Sumbangan"
  },
  {
      "bibid": 236,
      "fieldid": 14,
      "tag": 986,
      "ind1_cd": "N",
      "ind2_cd": "N",
      "subfield_cd": "a",
      "field_data": "nana"
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
    await queryInterface.bulkDelete('biblio_field', null, {});
  }
};
