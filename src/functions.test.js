const functions = require('./functions')
describe('Head',() =>{
    //Return Null if Array is Empty
    it('list is Empty case',()=>{
        expect(functions.head([])).toBeNull();
    });
    //Return Head of the Array(1st Element)
    it('show head',()=>{
        expect(functions.head([69,8,9,6])).toBe(69);
    });

});
describe('Tail',() =>{
    //Return Null if Array is Empty
    it('list is Empty case',()=>{
        expect(functions.tail([])).toBeNull();
    });
    //Return Tail of the Array(Last Element)
    it('show Tail-> other than head',()=>{
        expect(functions.tail([69,8,9,6])).toEqual([8,9,6]);
    });
describe('Maximum',()=>{
    //Return Null if Array is Empty
    it('list is Empty case',()=>{
        expect(functions.max([])).toBeNull();
    });
    //Return Maximum value of all the Array Elements
    it('show Max element',()=>{
        expect(functions.max([69,8,95,6,23,1])).toBe(95);
    });
});
describe('Minimum',()=>{
    //Return Null if Array is Empty
    it('list is Empty case',()=>{
        expect(functions.min([])).toBeNull();
    });
    //Return Minimum value of all the Array Elements
    it('show Min element',()=>{
        expect(functions.min([69,8,95,6,23,1])).toBe(1);
    });
});

});