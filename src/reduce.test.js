const reduce = require('./reduce')
describe('Reduce',()=>{
    test('empty array returns []',()=>{
        expect(reduce([],(x,y)=>(x+y))).toEqual(undefined);
    });    
    test('array[1,2,3,4],(x,y)=>(x+y) should return 1+2+3+4=10',()=>{
        expect(reduce([1,2,3,4],(x,y)=>x+y)).toEqual(10);
    });
    test('array[1,2,3,4],(x,y)=>(x+y),10 should return 1+2+3+4+10=20',()=>{
        expect(reduce([1,2,3,4],(x,y)=>x+y,10)).toEqual(20);
    });
    test('array[\'a\',\'b\',\'c\'],(x,y)=>(x+y) should return \'abc\'',()=>{
        expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc');
    });
    test('array[\'a\',\'b\',\'c\'],(x,y)=>(x+y),\'z\' should return \'zabc\'',()=>{
        expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc');
    });
});