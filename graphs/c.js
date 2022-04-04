'use strict';
var Solution = /** @class */ (function () {
    function Solution() {
    }
    Solution.prototype.namefunction = function (str) {
        return str;
    };
    return Solution;
}());
;
var myGraph = {
    a: ['c', 'b'],
    // a:['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};
function depthFirstSearch(graph, source) {
    var stack = [source];
    while (stack.length > 0) {
        var curr = stack.pop();
        console.log(curr);
        for (var _i = 0, _a = graph[curr]; _i < _a.length; _i++) {
            var neighbor = _a[_i];
            stack.push(neighbor);
        }
    }
}
function dephtRecursive(graph, curr) {
    console.log(curr);
    for (var _i = 0, _a = graph[curr]; _i < _a.length; _i++) {
        var neighbor = _a[_i];
        dephtRecursive(graph, neighbor);
    }
}
// ------------------------------------------------------------------------
function breathFirstSearch(graph, source) {
    var queue = [source];
    while (queue.length > 0) {
        var curr = queue.shift();
        console.log(curr);
        for (var _i = 0, _a = graph[curr]; _i < _a.length; _i++) {
            var neighbor = _a[_i];
            queue.push(neighbor);
        }
    }
}
//-----------------------  PROBLEMS  -----------------------------
var myGraph2 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};
function hasPath(graph, source, dst) {
    if (source === dst)
        return true;
    for (var _i = 0, _a = graph[source]; _i < _a.length; _i++) {
        var neighbor = _a[_i];
        if (hasPath(graph, neighbor, dst))
            return true;
    }
    return false;
}
function hasPathIterative(graph, source, destination) {
    var queue = [source];
    while (queue.length > 0) {
        var curr = queue.shift();
        if (curr === destination)
            return true;
        for (var _i = 0, _a = graph[curr]; _i < _a.length; _i++) {
            var neighbor = _a[_i];
            queue.push(neighbor);
        }
    }
    return false;
}
