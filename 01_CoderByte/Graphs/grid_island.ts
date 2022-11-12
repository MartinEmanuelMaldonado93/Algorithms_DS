 let edges04 = [
    ['a','c'],
    ['a','b'],
    ['c','b'],
    ['c','d'],
    ['b','d'],
    ['e','d'],
    ['g','f']
];
"------------------------------------------------------------------------"
let graph = {
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
};
// Count how many modules are in the graph 
function connectedComponentsCount( graph:{} ) {
    const visited:Set<string> = new Set();
    let count = 0;
    for (let node in graph) { // * in: indices of object in js *
        if( explore(graph, node, visited) )
            count++; 
    }
    return count;
}
// Travel a node, and set nodes has been visited
function explore( graph:Record<string,string[]>, currNode:string, visited:Set<string>) { 
    if( visited.has( String(currNode) ) )
        return false;
    visited.add(  String(currNode) );  
    for (let neighbor of graph[currNode]) { 
        explore( graph, neighbor, visited);
    }
    return true;
}
console.log( connectedComponentsCount(graph) );// --> 2
"------------------------------------------------------------------------"
function largestComponent( graph:{} ) {
    let visited = new Set();
    let longest = 0; 
    for (let node in graph) { 
        longest = Math.max(longest, exploreSize(graph, node, visited) ); 
    }
    return longest;
}
function exploreSize(graph:Record<string,string[]>, node: any, visited: any) { 
    if( visited.has( +node ) ) 
        return 0;

    visited.add( +node );

    let size = 1;
    for (const neighbor of graph[node]) {
        size += exploreSize( graph, neighbor, visited);
    }
    return size;
}
// console.log( largestComponent(graph) );// --> 4  
"------------------------------------------------------------------------"
let edges = [
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v'], 
];
function shortestPath(edges:string[][], nodeA:string , nodeB:string ) {
    const graph = buildGraphIsland(edges);
    let visited = new Set( [ nodeA, 0 ] ); 
    const queue:[string, number][] = [ [nodeA, 0 ] ]; 
    
    while( queue.length ){  
        let itemShifted = queue.shift(); 
        if(itemShifted){
            let [node, distance] = [...itemShifted]; 
            if(node === nodeB) 
                return distance;

            for (let neighbor of graph.get(node) ) { 
                if(!(visited.has(neighbor))){
                    visited.add( neighbor );
                    queue.push( [neighbor, distance+1] );   
                }
            }
        }
    }
    return -1;
}
function buildGraphIsland(edges:string[][]):Map<string,string[]> {
    const graph:Map<string,string[]> = new Map();

    for (const edge of edges) {
        let [a, b] = edge; 
        if(!(graph.has(a))) graph.set(a,[]);
        if(!(graph.has(b))) graph.set(b,[]) ;
        graph.get(a).push(b);
        graph.get(b).push(a);
    }
    // console.log(graph)
    return graph;
}
// console.log( shortestPath(edges, 'w', 'z') );// -->2
// console.log( shortestPath( edges04, 'b', 'g') );// -->1
"------------------------------------------------------------------------"
const grid = [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W']
];
function islandCount( grid:Array<string[]> ) {
    const visited:Set<string> = new Set();
    let count = 0;
    // For each cell  aply BFS ...
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if( exploreGrid(grid, row, col, visited) )// if island was visited I count it
                count++;
        }
    }
    return count;
}
function exploreGrid( grid:Array<string[]>,r:number ,c:number ,visited:Set<string>) {
    // Check if row or col are out of bounds...
    const rowsInBounds = 0 <= r && r < grid.length;
    const colsInBounds = 0 <= c && c < grid[0].length;
    if( !rowsInBounds || !colsInBounds ) return false;

    if( grid[r][c] === 'W') return false;// if cell is 'Water' retrn false and  go out
//else is Land...
    const pos = r + ',' + c; // because string is primitive and we avoid refrnce problems
    if( visited.has(pos) ) return false;// if was visited i go
    visited.add(pos);// if not , added 
    // Explore around the cell for some Land...
    exploreGrid(grid, r-1, c, visited);// up
    exploreGrid(grid, r+1, c, visited);// down
    exploreGrid(grid, r, c-1, visited);// left
    exploreGrid(grid, r, c+1, visited);// right
    
    return true;
}
// console.log( islandCount(grid) );// --> 3 islands
"------------------------------------------------------------------------"
let gridIsland = [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W']
];
function minimumIsland( grid:Array<string[]>) {
    const visited:Set<string> = new Set();
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
function exploreSize2( grid:Array<string[]>,r:number,c:number,visited:Set<string>) {
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
console.log( minimumIsland(gridIsland) );
"------------------------------------------------------------------------"