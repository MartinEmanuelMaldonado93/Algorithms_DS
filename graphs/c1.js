var undirectedPath = function (edges, nodeA, nodeB) {
    if (edges === void 0) { edges = []; }
    var graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
};
// This function breaks infinite loops of nodes
function hasPath(graph, source, dest, visited) {
    if (source === dest)
        return true;
    if (visited.has(source))
        return false; //si ya fue visitado, es un loop asiq false
    visited.add(source);
    for (var _i = 0, _a = graph[source]; _i < _a.length; _i++) {
        var neighbor = _a[_i];
        if (hasPath(graph, neighbor, dest, visited)) {
            return true;
        }
    }
    return false;
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
var edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];
// console.log( buildGraph(edges) );
var result = undirectedPath(edges, 'j', 'm');
console.log(result);
