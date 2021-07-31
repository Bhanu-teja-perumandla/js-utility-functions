const filter=require('./filter')
describe('Filter',()=>{
    test('empty array,x=>true should give []',()=>{
        expect(filter([],x=>true)).toEqual([]);
    });
    test('array [1,2,3],x=>true should give [1,2,3]',()=>{
        expect(filter([1,2,3],x=>true)).toEqual([1,2,3]);
    });
    test('array [1,2,3],x=>false should give []',()=>{
        expect(filter([1,2,3],x=>false)).toEqual([]);
    });
    test('array [1,2,3],x=>x>1 should give [2,3]',()=>{
        expect(filter([1,2,3],x=>x>1)).toEqual([2,3]);
    });
    test('array [\'a\',\'B\',\'c\',\'D\'],(x is UpperCase) should give []',()=>{
        expect(filter(['a','B','c','D'],x=>x===x.toUpperCase())).toEqual(['B','D']);
    });
});