var graph1 = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
};
var graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}; // count --> 2
var edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v'],
];
var edges04 = [
    ['a', 'c'],
    ['a', 'b'],
    ['c', 'b'],
    ['c', 'd'],
    ['b', 'd'],
    ['e', 'd'],
    ['g', 'f']
];
function connectedComponentsCount(graph) {
    var visited = new Set();
    var count = 0;
    for (var node in graph) { // indices of object un js
        if (explore(graph, node, visited)) {
            count++;
        }
    }
    return count;
}
function explore(graph, currNode, visited) {
    if (visited.has(String(currNode)))
        return false;
    visited.add(String(currNode));
    for (var _i = 0, _a = graph[currNode]; _i < _a.length; _i++) {
        var neighbor = _a[_i];
        explore(graph, neighbor, visited);
    }
    return true;
}
function largestComponent(graph) {
    var visited = new Set();
    var longest = 0;
    for (var node in graph) {
        // console.log(node);
        var size = exploreSize(graph, node, visited);
        if (size > longest)
            longest = size;
    }
    return longest;
}
function exploreSize(graph, node, visited) {
    if (visited.has((+node)))
        return 0;
    visited.add((+node));
    var size = 1;
    for (var _i = 0, _a = graph[node]; _i < _a.length; _i++) {
        var neighbor = _a[_i];
        size += exploreSize(graph, neighbor, visited);
    }
    return size;
}
// console.log( connectedComponentsCount(graph) ); /// true 
// console.log( largestComponent(graph1) );
function shortestPath(edges, nodeA, nodeB) {
    var graph = buildGraph(edges);
    var visited = new Set([nodeA, 0]);
    var queue = [[nodeA, 0]];
    while (queue.length > 0) {
        var _a = queue.shift(), node = _a[0], distance = _a[1];
        if (node === nodeB)
            return distance;
        for (var _i = 0, _b = graph[node]; _i < _b.length; _i++) {
            var neighbor = _b[_i];
            if (!(visited.has(neighbor))) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }
    return -1;
}
function buildGraph(edges) {
    var graph = {};
    for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
        var edge = edges_1[_i];
        var a = edge[0], b = edge[1];
        if (!(a in graph))
            graph[a] = [];
        if (!(b in graph))
            graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}
// console.log( shortestPath(edges, 'w', 'z') );// 2
// console.log( shortestPath( edges04, 'b', 'g') );// -1
var grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
];
function islandCount(grid) {
    var visited = new Set();
    var count = 0;
    // For each cell I aply breathFirstSearch...
    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[0].length; col++) {
            if (exploreGrid(grid, row, col, visited)) // if island was visited I count it
                count++;
        }
    }
    return count;
}
function exploreGrid(grid, r, c, visited) {
    // Check if row or col are out of bounds...
    var rowsInBounds = 0 <= r && r < grid.length;
    var colsInBounds = 0 <= c && c < grid[0].length;
    if (!rowsInBounds || !colsInBounds)
        return false;
    if (grid[r][c] === 'W')
        return false; // if cell is 'Water' retrn false and I go
    //else is Land...
    var pos = r + ',' + c; // because string is primitive and we avoid refrnce problems
    if (visited.has(pos))
        return false; // if was visited i go
    visited.add(pos); // if not , added 
    // Explore around the cell for some Land...
    exploreGrid(grid, r - 1, c, visited); // up
    exploreGrid(grid, r + 1, c, visited);
    exploreGrid(grid, r, c - 1, visited);
    exploreGrid(grid, r, c + 1, visited);
    return true;
}
// console.log( islandCount(grid) );// 3 islands
function minimumIsland(grid) {
    var visited = new Set();
    var min = Number.MAX_SAFE_INTEGER;
    // For each cell I aply breathFirstSearch...
    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[0].length; col++) {
            var res = exploreSize2(grid, row, col, visited); // if the entire island was visited I count it
            if (res > 0 && res < min)
                min = res;
        }
    }
    return min;
}
function exploreSize2(grid, r, c, visited) {
    // Check if row or col are out of bounds...
    var rowsInBounds = 0 <= r && r < grid.length;
    var colsInBounds = 0 <= c && c < grid[0].length;
    if (!rowsInBounds || !colsInBounds)
        return 0;
    if (grid[r][c] === 'W')
        return 0; // if cell is 'Water' retrn false and I go
    //else is Land...
    var pos = r + ',' + c; // because string is primitive and we avoid refrnce problems
    if (visited.has(pos))
        return 0; // if was visited i go
    visited.add(pos); // if not , added 
    // Explore around the cell for some Land...
    var size = 1;
    size += exploreSize2(grid, r - 1, c, visited); // up
    size += exploreSize2(grid, r + 1, c, visited);
    size += exploreSize2(grid, r, c - 1, visited);
    size += exploreSize2(grid, r, c + 1, visited);
    return size;
}
var gridIsland = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
];
console.log(minimumIsland(gridIsland));
