const MEMOIZER = {}; 
function Knapsack01(items, capacity, i) {
    const key = capacity + '.' + i;
    if (key in MEMOIZER)  
        return MEMOIZER[key];

    if (capacity == 0) { // its fulfill
        return 0;
    } else if (capacity < 0) { // no valid 
        return -10000;
    } else if (i == items.length) { // top of de list
        return 0;
    }

    const result = Math.max(
        Knapsack01(items, capacity, i +1),
        // I rest capacity and add value, ;).... 
        Knapsack01(items, capacity-items[i][0], i +1) + items[i][1]);

    MEMOIZER[key] = result;
    return result;
}

const listOfItems = [   [45, 100], 
                        [10, 4], 
                        [5, 1034], 
                        [0.4, 5000] ];
function calculateCapacity(items, capacity ) {
    return Knapsack01(items, capacity, 0);
}

console.log( calculateCapacity(listOfItems, 11) );