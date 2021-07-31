const filter = (arr,Update) =>{
    if(arr.length==0) return arr;

    return arr.filter(Update);
    //Array.filter(function) is an inbuilt function
}
module.exports = filter;