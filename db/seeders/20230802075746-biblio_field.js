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
        "fieldid": 9,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "Dahara Prize"
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
        "fieldid": 9,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "Andi Offset"
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
        "fieldid": 9,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "Addison-Wesley"
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
        "fieldid": 25985,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "Gramedia Widiasarana Indonesia"
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
        "fieldid": 62598,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "Dahara Prize"
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
        "bibid": 21,
        "fieldid": 109202,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "796.325"
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
        "fieldid": 23134,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "001.51"
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
        "fieldid": 17464,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "Rosda"
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
        "bibid": 12916,
        "fieldid": 1,
        "tag": 997,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "76667.76664.76666.044453.76665."
    },
    {
        "bibid": 12916,
        "fieldid": 2,
        "tag": 110,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "Indonesia. Departemen Pendidikan dan Kebudayaan."
    },
    {
        "bibid": 12916,
        "fieldid": 4,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "2",
        "field_data": "22"
    },
    {
        "bibid": 12916,
        "fieldid": 5,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "Jakarta"
    },
    {
        "bibid": 12916,
        "fieldid": 7,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "197 hlm."
    },
    {
        "bibid": 12916,
        "fieldid": 8,
        "tag": 20,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "2 eks."
    },
    {
        "bibid": 12916,
        "fieldid": 6142,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "899.2213"
    },
    {
        "bibid": 12916,
        "fieldid": 6143,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "Depdikbud"
    },
    {
        "bibid": 12916,
        "fieldid": 6144,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "1979"
    },
    {
        "bibid": 12916,
        "fieldid": 6145,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "21 cm."
    },
    {
        "bibid": 12916,
        "fieldid": 6146,
        "tag": 541,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "h",
        "field_data": "Sumbangan"
    },
    {
        "bibid": 12916,
        "fieldid": 6147,
        "tag": 986,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "Sobariah/yy2015"
    },
    {
        "bibid": 38045,
        "fieldid": 262909,
        "tag": 997,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "46195"
    },
    {
        "bibid": 38045,
        "fieldid": 262910,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "900"
    },
    {
        "bibid": 38045,
        "fieldid": 262911,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "2",
        "field_data": "22"
    },
    {
        "bibid": 38045,
        "fieldid": 262912,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "London"
    },
    {
        "bibid": 38045,
        "fieldid": 262913,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "J.M. Dent Sons"
    },
    {
        "bibid": 38045,
        "fieldid": 262914,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "1945"
    },
    {
        "bibid": 38045,
        "fieldid": 262915,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "xii, 366 hlm."
    },
    {
        "bibid": 38045,
        "fieldid": 262916,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "18 cm."
    },
    {
        "bibid": 38045,
        "fieldid": 262917,
        "tag": 20,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "1 eks."
    },
    {
        "bibid": 38045,
        "fieldid": 262918,
        "tag": 986,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "icha/ID"
    },
    {
        "bibid": 38045,
        "fieldid": 601250,
        "tag": 541,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "h",
        "field_data": "Sumbangan"
    },
    {
        "bibid": 48286,
        "fieldid": 398082,
        "tag": 997,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "164561,164562"
    },
    {
        "bibid": 48286,
        "fieldid": 398083,
        "tag": 250,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "Cet.  1"
    },
    {
        "bibid": 48286,
        "fieldid": 398084,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "338.103"
    },
    {
        "bibid": 48286,
        "fieldid": 398085,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "2",
        "field_data": "22"
    },
    {
        "bibid": 48286,
        "fieldid": 398086,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "Jakarta"
    },
    {
        "bibid": 48286,
        "fieldid": 398087,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "Raja Grafindo Persada"
    },
    {
        "bibid": 48286,
        "fieldid": 398088,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "2000"
    },
    {
        "bibid": 48286,
        "fieldid": 398089,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "xii, 283 hlm."
    },
    {
        "bibid": 48286,
        "fieldid": 398090,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "il"
    },
    {
        "bibid": 48286,
        "fieldid": 398091,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "23 cm."
    },
    {
        "bibid": 48286,
        "fieldid": 398092,
        "tag": 20,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "2  eks."
    },
    {
        "bibid": 48286,
        "fieldid": 398093,
        "tag": 541,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "h",
        "field_data": "Proyek peningkatan UPI"
    },
    {
        "bibid": 48286,
        "fieldid": 398094,
        "tag": 986,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "Sobariah/SS"
    },
    {
        "bibid": 59749,
        "fieldid": 556203,
        "tag": 997,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "2017-01630"
    },
    {
        "bibid": 59749,
        "fieldid": 556204,
        "tag": 250,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "Ed. 1. 12"
    },
    {
        "bibid": 59749,
        "fieldid": 556205,
        "tag": 20,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "979-010-004-3"
    },
    {
        "bibid": 59749,
        "fieldid": 556206,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "370.154"
    },
    {
        "bibid": 59749,
        "fieldid": 556207,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "2",
        "field_data": "23"
    },
    {
        "bibid": 59749,
        "fieldid": 556208,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "Jakarta"
    },
    {
        "bibid": 59749,
        "fieldid": 556209,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "Bumi Aksara"
    },
    {
        "bibid": 59749,
        "fieldid": 556210,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "2015"
    },
    {
        "bibid": 59749,
        "fieldid": 556211,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "viii, 128 hlm."
    },
    {
        "bibid": 59749,
        "fieldid": 556212,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "il."
    },
    {
        "bibid": 59749,
        "fieldid": 556213,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "21 cm."
    },
    {
        "bibid": 59749,
        "fieldid": 556214,
        "tag": 20,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "1 eks."
    },
    {
        "bibid": 59749,
        "fieldid": 556215,
        "tag": 541,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "h",
        "field_data": "Sumb. Alumni"
    },
    {
        "bibid": 59749,
        "fieldid": 556216,
        "tag": 986,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "Yati/ID"
    },
    {
        "bibid": 62223,
        "fieldid": 590372,
        "tag": 997,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "2019-00386"
    },
    {
        "bibid": 62223,
        "fieldid": 590373,
        "tag": 20,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "978-0-7134-8875-3"
    },
    {
        "bibid": 62223,
        "fieldid": 590374,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "391.009"
    },
    {
        "bibid": 62223,
        "fieldid": 590375,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "2",
        "field_data": "23"
    },
    {
        "bibid": 62223,
        "fieldid": 590376,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "London"
    },
    {
        "bibid": 62223,
        "fieldid": 590377,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "Batsford"
    },
    {
        "bibid": 62223,
        "fieldid": 590378,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "2004"
    },
    {
        "bibid": 62223,
        "fieldid": 590379,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "144 hlm."
    },
    {
        "bibid": 62223,
        "fieldid": 590380,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "ilus. berwarna, potret"
    },
    {
        "bibid": 62223,
        "fieldid": 590381,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "26 cm."
    },
    {
        "bibid": 62223,
        "fieldid": 590382,
        "tag": 20,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "1 eks."
    },
    {
        "bibid": 62223,
        "fieldid": 590383,
        "tag": 541,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "h",
        "field_data": "Kontribusi alumni"
    },
    {
        "bibid": 62223,
        "fieldid": 590384,
        "tag": 986,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "ID"
    },
    {
        "bibid": 63434,
        "fieldid": 606447,
        "tag": 997,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "2019-02485.2019-02486"
    },
    {
        "bibid": 63434,
        "fieldid": 606448,
        "tag": 20,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "978-602-0823-29-4"
    },
    {
        "bibid": 63434,
        "fieldid": 606449,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "004.65"
    },
    {
        "bibid": 63434,
        "fieldid": 606450,
        "tag": 82,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "2",
        "field_data": "23"
    },
    {
        "bibid": 63434,
        "fieldid": 606451,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "Depok"
    },
    {
        "bibid": 63434,
        "fieldid": 606452,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "Jasakom"
    },
    {
        "bibid": 63434,
        "fieldid": 606453,
        "tag": 260,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "2018"
    },
    {
        "bibid": 63434,
        "fieldid": 606454,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "vii, 137 hlm."
    },
    {
        "bibid": 63434,
        "fieldid": 606455,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "b",
        "field_data": "ilus."
    },
    {
        "bibid": 63434,
        "fieldid": 606456,
        "tag": 300,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "21 cm."
    },
    {
        "bibid": 63434,
        "fieldid": 606457,
        "tag": 20,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "c",
        "field_data": "2 eks."
    },
    {
        "bibid": 63434,
        "fieldid": 606458,
        "tag": 541,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "h",
        "field_data": "PPB 2019"
    },
    {
        "bibid": 63434,
        "fieldid": 606459,
        "tag": 986,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "ln/ID"
    },
    {
        "bibid": 63434,
        "fieldid": 611782,
        "tag": 250,
        "ind1_cd": "N",
        "ind2_cd": "N",
        "subfield_cd": "a",
        "field_data": "Cet. 1"
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
