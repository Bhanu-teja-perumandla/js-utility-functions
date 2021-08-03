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

    it('array with object [a={x:10}] and a=>a.x+1 should give a.x+1',()=>{
        expect(map([a={x:10}],a=>a.x+1)).toEqual([11]);
    });
    it('array with object [a={x:10}] and a=>pow((a.x),3) should give 1001',()=>{
        expect(map([a={x:10}],a=>Math.pow(a.x,3)+1)).toEqual([1001]);
    });
    
});