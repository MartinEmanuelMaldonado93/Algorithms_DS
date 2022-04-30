const combinations = (elements:string[]) => {
    if(elements.length === 0){
        return [ [] ];
    }
    const firstEl = elements[0];// 'a'
    const rest = elements.slice(1); // 'b' 'c'
    const combsWithoutFirst = combinations(rest);
    const combsWithFirst = [];
    combsWithoutFirst.forEach( (comb:[]) => {
        const combWithFirst = [...comb,firstEl];
        console.log(combWithFirst);
        combsWithFirst.push(combWithFirst);
    });
    return [...combsWithoutFirst,...combsWithFirst];
};

combinations(["1","2"]);
combinations(["1","2"]);
// combinations(['a','b','c']);
//console.log(combinations(['a','b','c']));
// []
// [a]
// [b]
// [c]
// [a,b]
// [b,c]
// [a,c]
// [a,b,c]