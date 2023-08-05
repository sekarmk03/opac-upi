const valueToArray = (data) => {
    if (!data || data == null || data == "") {
        return [];
    }

    data = data.split(',');

    return data;
}

module.exports = valueToArray;