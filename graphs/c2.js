var graph1 = {
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
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
console.log(connectedComponentsCount(graph)); /// true 
