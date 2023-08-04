const removeDuplicate = (data) => {
    const reducedData = data.reduce((acc, obj) => {
        const existingItem = acc.find(item => item.title === obj.title);
      
        if (!existingItem) {
          acc.push(obj);
        }
      
        return acc;
    }, []);

    return reducedData;
}

module.exports = removeDuplicate;