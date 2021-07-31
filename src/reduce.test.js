const reduce = require('./reduce')
describe('Reduce',()=>{
    //Return Array if Empty
    test('empty array returns []',()=>{
        expect(reduce([],(x,y)=>(x+y))).toEqual(undefined);
    });    
    //Return Reduced Sum of Elements of Array
    test('array[1,2,3,4],(x,y)=>(x+y) should return 1+2+3+4=10',()=>{
        expect(reduce([1,2,3,4],(x,y)=>x+y)).toEqual(10);
    });
    //Return Reduced Sum of (Elements of Array and Default) 
    test('array[1,2,3,4],(x,y)=>(x+y),10 should return 1+2+3+4+10=20',()=>{
        expect(reduce([1,2,3,4],(x,y)=>x+y,10)).toEqual(20);
    });
    //Return Reduced Concatenation of Array Elements
    test('array[\'a\',\'b\',\'c\'],(x,y)=>(x+y) should return \'abc\'',()=>{
        expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc');
    });
    //Return Reduced Concatenation of (Default and Elements of Array)
    test('array[\'a\',\'b\',\'c\'],(x,y)=>(x+y),\'z\' should return \'zabc\'',()=>{
        expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc');
    });
});