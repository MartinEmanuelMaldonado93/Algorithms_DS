let graph1 = {
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
}
let graph = {
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
};// count --> 2
let edges = [
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v'], 
];
let edges04 = [
    ['a','c'],
    ['a','b'],
    ['c','b'],
    ['c','d'],
    ['b','d'],
    ['e','d'],
    ['g','f']
]
function connectedComponentsCount(graph:{}) {
    const visited = new Set();
    let count = 0;
    
    for (let node in graph) {// indices of object un js
        if(explore(graph, node, visited)){
            count++;
        }
    }
    return count;
}
function explore(graph:{}, currNode:string, visited:any) {
    if( visited.has( String(currNode) )) return false;

    visited.add( String(currNode) );

    for (const neighbor of graph[currNode]) {
        explore( graph, neighbor, visited);
    }
    return true;
} 
function largestComponent(graph:any) {
    let visited = new Set();
    let longest = 0;

    for (let node in graph) {
        // console.log(node);
        const size = exploreSize(graph, node, visited);
        if(size > longest)  longest = size;
    }
    return longest;
}
function exploreSize(graph:any, node: any, visited: any) { 
    if( visited.has((+node)) ) return 0; 
    visited.add((+node));
    let size = 1;
    for (const neighbor of graph[node]) {
        size += exploreSize( graph, neighbor, visited);
    }
    return size;
}
// console.log( connectedComponentsCount(graph) ); /// true 
// console.log( largestComponent(graph1) );
function shortestPath(edges:string[][], nodeA:any , nodeB:string) {
    const graph = buildGraph(edges);
    let visited = new Set( [nodeA,0] );
    const queue = [ [nodeA, 0 ] ];
    
    while(queue.length > 0){
        const [node , distance] = queue.shift(); 
        if(node === nodeB) return distance;

        for (let neighbor of graph[node]) {
            if(!(visited.has(neighbor))){
                visited.add( neighbor );
                queue.push( [neighbor, distance + 1] );   
            }
        }
    }
    return -1;
}
function buildGraph(edges:any) {
    const graph = {};
    for (const edge of edges) {
        let [a, b] = edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
} 
// console.log( shortestPath(edges, 'w', 'z') );// 2
// console.log( shortestPath( edges04, 'b', 'g') );// -1
const grid = [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W']
];
function islandCount( grid:any) {
    const visited = new Set();
    let count = 0;
    // For each cell I aply breathFirstSearch...
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if( exploreGrid(grid, row, col, visited) )// if island was visited I count it
                count++;
        }
    }
    return count;
}
function exploreGrid( grid:any,r ,c ,visited) {
    // Check if row or col are out of bounds...
    const rowsInBounds = 0 <= r && r < grid.length;
    const colsInBounds = 0 <= c && c < grid[0].length;
    if( !rowsInBounds || !colsInBounds ) return false;

    if( grid[r][c] === 'W') return false;// if cell is 'Water' retrn false and I go
//else is Land...
    const pos = r + ',' + c; // because string is primitive and we avoid refrnce problems
    if( visited.has(pos) ) return false;// if was visited i go
    visited.add(pos);// if not , added 
    // Explore around the cell for some Land...
    exploreGrid(grid, r-1, c, visited);// up
    exploreGrid(grid, r+1, c, visited);
    exploreGrid(grid, r, c-1, visited);
    exploreGrid(grid, r, c+1, visited);
    
    return true;
}
// console.log( islandCount(grid) );// 3 islands

function minimumIsland( grid:any) {
    const visited = new Set();
    let min = Number.MAX_SAFE_INTEGER; 
    // For each cell I aply breathFirstSearch...
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            let res =  exploreSize2(grid, row, col, visited);// if the entire island was visited I count it
            if(res > 0 && res < min)
                min = res;
        }
    }
    return min;
}
function exploreSize2( grid:any,r ,c ,visited) {
    // Check if row or col are out of bounds...
    const rowsInBounds = 0 <= r && r < grid.length;
    const colsInBounds = 0 <= c && c < grid[0].length;
    if( !rowsInBounds || !colsInBounds ) return 0;

    if( grid[r][c] === 'W') return 0;// if cell is 'Water' retrn false and I go
//else is Land...
    const pos = r + ',' + c; // because string is primitive and we avoid refrnce problems
    if( visited.has(pos) ) return 0;// if was visited i go
    visited.add(pos);// if not , added 
    // Explore around the cell for some Land...
    let size = 1;
    size += exploreSize2(grid, r-1, c, visited);// up
    size += exploreSize2(grid, r+1, c, visited);
    size += exploreSize2(grid, r, c-1, visited);
    size += exploreSize2(grid, r, c+1, visited); 
    return size;
} 
let gridIsland = [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W']
];
console.log( minimumIsland(gridIsland) );

