const reducePub = (biblios) => {
    const finBiblios = biblios.reduce((acc, obj) => {
        const existingObj = acc.find(item => item.bibid == obj.bibid);

        if (!existingObj) {
          acc.push({
            bibid: obj.bibid,
            title: obj.title,
            author: obj.author,
            publisher: obj.subfield_cd === "b" ? obj.field_data : null,
            year: obj.subfield_cd === "c" ? obj.field_data : null,
          });
        } else {
            if (obj.subfield_cd === "b") {
                existingObj.publisher = obj.field_data;
            } else if (obj.subfield_cd === "c") {
                existingObj.year = obj.field_data;
            }
        }
    
        return acc;
    }, []);

    return finBiblios;
}

module.exports = reducePub;