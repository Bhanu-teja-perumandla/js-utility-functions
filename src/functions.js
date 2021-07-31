const funtions = {

     head: function (arr){
        if(arr.length==0) {return null;}
        else { return arr[0];}

    },
    tail: function (arr) {
        if(arr.length==0) {return null;}
        else {
            arr.shift();
            return arr;
            //Array.shift() gives 1st element and removes it from Array 
        }
    },
    max: function (arr) {
        if(arr.length==0) {return null;}
        else {
            arr.sort();
            return arr[arr.length-1];
        }
    },
    min: function (arr) {
        if(arr.length==0) {return null;}
        else {
            arr.sort();
            return arr[0];
        }
    }
}

module.exports =funtions;