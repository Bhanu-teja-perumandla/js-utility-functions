const map = require('./map') 
describe('Map',()=>{
    it('empty array should return []',()=>{
        expect(map([],num=>Math.pow(num,3))).toEqual([]);
    });
    it('return array\'s identity',()=>{
        expect(map([69,42,9],num=>num)).toEqual([69,42,9]);
    });
    it('return array with elements cubed',()=>{
        expect(map([2,3,4],num=>Math.pow(num,3))).toEqual([8,27,64]);
    });
    
});