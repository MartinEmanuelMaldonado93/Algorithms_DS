const array: Array<number> = [1, 1, 4, 6, 1, 2, 6, 3, 2, 3, 1, 3, 2, 5, 6];

let counts: 
Record<number, number> = {};

array.forEach( (num) => {
    num in counts ?
        counts[num]++ :
        counts[num] = 1
});

console.log(counts);