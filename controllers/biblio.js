const Fuse = require('fuse.js');
const countCopies = require('../utils/countCopies');
const processDetail = require('../utils/biblioDetail');
const bibRepo = require('../repository/biblio');
const valueToArray = require('../utils/valueToArray');

module.exports = {
    basicSearch: async (req, res, next) => {
        try {
            let {
                sort = "bibid", type = "ASC", search = null, key = "", page = "1", limit = "10"
            } = req.query;

            sort = sort.toLowerCase();
            search = search ? search.toLowerCase() : null;
            key = key.toLowerCase();
            // if (sort == 'date') sort = 'last_change_dt';

            page = parseInt(page);
            limit = parseInt(limit);
            let start = 0 + (page - 1) * limit;
            let end = page * limit;

            let biblios;

            if (search == 'subject') {
                biblios = await bibRepo.subjectSearch(search, key, sort, type, limit, start);
            } else {
                biblios = await bibRepo.basicSearchRepo(search, key, sort, type, limit, start);
            }

            let count = biblios.count;
            let pagination = {};
            pagination.totalRows = count;
            pagination.totalPages = Math.ceil(count/limit);
            pagination.thisPageRows = biblios.rows.length;
            pagination.currentPage = page;
            pagination.next = end < count ? page + 1 : null;
            pagination.prev = start > 0 ? page - 1 : null;

            const data = biblios.rows.map(({
                bibid, create_dt, call_nmbr1, call_nmbr2, call_nmbr3, title, title_remainder, author, cover, collection, material, copies
            }) => ({
                biblio_id: bibid,
                created_at: create_dt,
                cover: cover ? cover : 'default.jpg',
                call_number: [call_nmbr1, call_nmbr2, call_nmbr3].join(' '),
                title,
                subtitle: title_remainder,
                author,
                collection: collection.description,
                material: material.description,
                available: countCopies(copies),
                copies: copies.length
            }));

            return res.status(200).json({
                status: 'OK',
                message: 'Basic Search - Get Biblios success',
                pagination,
                data: data
            });
        } catch (error) {
            next(error);
        }
    },

    biblioDetail: async (req, res, next) => {
        try {
            const { biblio_id } = req.params;
            const id = parseInt(biblio_id);

            const biblio = await bibRepo.findById(id);

            if (!biblio) {
                return res.status(404).json({
                    status: 'NOT FOUND',
                    message: 'Biblio not found',
                    data: null
                });
            }

            const detailData = await bibRepo.findDetailById(id);

            // let searchedData = await bibRepo.simpleSubjectSearch(biblio.topic1, biblio.topic2, biblio.topic3);
            // const queryTitle = biblio.title;

            // const fuse = new Fuse(searchedData, {
            //     keys: ['title']
            // });

            // const similarBiblio = fuse.search(queryTitle).map(({item}) => (item));

            const copiesData = biblio.copies.map(({copyid, barcode_nmbr, status_cd, status, status_begin_dt, due_back_dt}) => ({
                copy_id: copyid,
                barcode: barcode_nmbr,
                status_code: status_cd,
                status: status.description,
                begin_date: status_begin_dt,
                back_date: due_back_dt
            }));

            const data = {
                biblio_id: biblio.bibid,
                created_at: biblio.create_dt,
                cover: biblio.cover ? biblio.cover : 'default.jpg',
                call_number: [biblio.call_nmbr1, biblio.call_nmbr2, biblio.call_nmbr3].join(' '),
                title: biblio.title,
                subtitle: biblio.title_remainder,
                subjects: [biblio.topic1, biblio.topic2, biblio.topic3].join(', '),
                author: biblio.author,
                responsibility: biblio.responsibility_stmt,
                collection: biblio.collection.description,
                material: biblio.material.description,
                ...processDetail(detailData),
                copies: {
                    available: countCopies(biblio.copies),
                    totalCopies: biblio.copies.length,
                    copiesData
                },
                // recommendation: similarBiblio.slice(0, 11)
                recommendation: []
            };

            return res.status(200).json({
                status: 'OK',
                message: 'Get Biblio detail success',
                data: data
            });
        } catch (error) {
            next(error);
        }
    },

    advancedSearch: async (req, res, next) => {
        try {
            let {
                sort = "bibid", type = "ASC", page = "1", limit = "10", title = null, author = null, year = null, subject = null, publisher = null, material = null, collection = null, all = null
            } = req.query;

            page = parseInt(page);
            limit = parseInt(limit);
            let start = 0 + (page - 1) * limit;
            let end = page * limit;

            sort = sort.toLowerCase();
            if (sort == 'date') sort = 'last_change_dt';
            title = valueToArray(title);
            author = valueToArray(author);
            subject = valueToArray(subject);
            year = valueToArray(year);
            publisher = valueToArray(publisher);
            all = valueToArray(all);

            const biblios = await bibRepo.advanceSearch(sort, type, limit, start, title, author, subject, material, collection, publisher, year, all);

            let count = biblios.count;
            let pagination = {};
            pagination.totalRows = count;
            pagination.totalPages = Math.ceil(count/limit);
            pagination.thisPageRows = biblios.rows.length;
            pagination.currentPage = page;
            pagination.next = end < count ? page + 1 : null;
            pagination.prev = start > 0 ? page - 1 : null;

            const data = biblios.rows.map(({
                bibid, create_dt, call_nmbr1, call_nmbr2, call_nmbr3, title, title_remainder, author, cover, collection, material, copies
            }) => ({
                biblio_id: bibid,
                created_at: create_dt,
                cover: cover ? cover : 'default.jpg',
                call_number: [call_nmbr1, call_nmbr2, call_nmbr3].join(' '),
                title,
                subtitle: title_remainder,
                author,
                collection: collection.description,
                material: material.description,
                available: countCopies(copies),
                copies: copies.length,
            }));

            return res.status(200).json({
                status: 'OK',
                message: 'Advanced Search - Get Biblios success',
                pagination,
                data: data
            });
        } catch (error) {
            next(error);
        }
    },

    test: async (req, res, next) => {
        try {
            const data = await bibRepo.test();

            return res.status(200).json({
                data
            });
        } catch (error) {
            next(error);
        }
    }
}