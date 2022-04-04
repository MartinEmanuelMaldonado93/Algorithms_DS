let graph1 = {
    3:[],
    4:[6],
    6:[4, 5, 7, 8],
    8:[6],
    7:[6],
    5:[6],
    1:[2],
    2:[1]
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
console.log( connectedComponentsCount(graph) ); /// true 