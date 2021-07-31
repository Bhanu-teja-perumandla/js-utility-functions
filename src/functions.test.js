const functions = require('./functions')
describe('Head',() =>{
    it('list is Empty case',()=>{
        expect(functions.head([])).toBeNull();
    });
    it('show head',()=>{
        expect(functions.head([69,8,9,6])).toBe(69);
    });

});
describe('Tail',() =>{
    it('list is Empty case',()=>{
        expect(functions.tail([])).toBeNull();
    });
    it('show Tail-> other than head',()=>{
        expect(functions.tail([69,8,9,6])).toEqual([8,9,6]);
    });
describe('Maximum',()=>{
    it('list is Empty case',()=>{
        expect(functions.max([])).toBeNull();
    });
    it('show Max element',()=>{
        expect(functions.max([69,8,95,6,23,1])).toBe(95);
    });
});
describe('Minimum',()=>{
    it('list is Empty case',()=>{
        expect(functions.min([])).toBeNull();
    });
    it('show Min element',()=>{
        expect(functions.min([69,8,95,6,23,1])).toBe(1);
    });
});

});