const processDetail = (data) => {
    const arrayOfObjects = data.map(item => {
        const key = `${item.tag}_${item.subfield_cd}`;
        return { [key]: item.field_data };
    });

    const transformedObject = arrayOfObjects.reduce((acc, obj) => {
        if ("82_2" in obj) {
            acc.ddc = obj['82_2'];
        } else if ("82_a" in obj) {
            acc.classification = obj['82_a'];
        } else if ("250_a" in obj) {
            acc.edition_stmt = obj['250_a'];
        } else if ("20_c" in obj) {
            acc.availability_term = obj['20_c'];
        } else if ("260_a" in obj) {
            acc.pub_place = obj['260_a'];
        } else if ("260_b" in obj) {
            acc.publisher = obj['260_b'];
        } else if ("260_c" in obj) {
            acc.pub_year = obj['260_c'];
        } else if ("300_a" in obj) {
            acc.pages = obj['300_a'];
        } else if ("300_b" in obj) {
            acc.phisical_detail = obj['300_b'];
        } else if ("300_c" in obj) {
            acc.dimention = obj['300_c'];
        } else if ("541_h" in obj) {
            acc.source = obj['541_h'];
        } else if ("986_a" in obj) {
            acc.operator = obj['986_a'];
        } else if ("997_a" in obj) {
            acc.no_id = obj['997_a'];
        } else if ("20_z" in obj) {
            acc.isbn_issn = obj['20_z'];
        } else if ("520_a" in obj) {
            acc.abstract = obj['520_a'];
        } else if ("520_b" in obj) {
            acc.anotasi = obj['520_b'];
        }

        if (!("520_a" in obj)) {
            acc.abstract = '';
        }

        if (!("520_b" in obj)) {
            acc.anotasi = '';
        }

        return acc;
    }, {});

    return transformedObject;
}

module.exports = processDetail;