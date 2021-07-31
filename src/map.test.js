const map = require('./map') 
describe('Map',()=>{
    //Return Array if Empty Array
    it('empty array should return []',()=>{
        expect(map([],num=>Math.pow(num,3))).toEqual([]);
    });
    //Return Identity of the Array
    it('return array\'s identity',()=>{
        expect(map([69,42,9],num=>num)).toEqual([69,42,9]);
    });
    //Return Array with elements cubed
    it('return array with elements cubed',()=>{
        expect(map([2,3,4],num=>Math.pow(num,3))).toEqual([8,27,64]);
    });
    
});