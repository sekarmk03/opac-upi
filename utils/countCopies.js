const countCopies = (copies) => {
    const counts = copies.reduce((acc, copy) => {
        const status_cd = copy.status_cd;
        acc[status_cd] = (acc[status_cd] || 0) + 1;
        return acc;
    }, {});

    const result = counts['in'] || 0;

    return result;
};

module.exports = countCopies;