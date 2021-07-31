const reduce = (arr, Update, addOn = undefined) => {
    if(arr.length == 0) return addOn;
    const reduced=arr.reduce(Update);
    if(addOn) return (addOn+reduced);
    return reduced;
}
module.exports = reduce;
