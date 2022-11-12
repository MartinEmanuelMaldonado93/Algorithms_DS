class Solution{
    constructor() { }
    
    uggly_func(str: string[]) {
        let map = new Map();
        for(let s of str){
            let s1 = s;
            let s2 = s.split('').sort().join('');
            if(! map.has(s2) ){
                map.set(s2, [] );
                map.get(s2).push(s1);
            } 
            else 
                map.get(s2).push(s1);
        }
        let values = map.values();
        let res = [];
        for (let i=0; i<map.size; i++) {
            let item =  values.next(); 
            res.push( item['value'] ); 
        }
        return res;
    }

    func1( strs:string[] ){
        let map = {};
        for(let s of strs){
            let s1 = s;
            let s2 = s.split('').sort().join('');
            if(!( s2 in map )){
                map[s2] = [] ;
                map[s2].push(s1);
            } 
            else 
                map[s2].push(s1);
        } 
        return Object.values(map);
    }
};

let s = new Solution();

console.log( s.func1(["eat","tea","tan","ate","nat","bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]