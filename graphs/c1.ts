const undirectedPath = (edges=[], nodeA:string, nodeB:string) =>{
    const graph = buildGraph(edges);
    return hasPath( graph, nodeA, nodeB, new Set() );
} 
// This function breaks infinite loops of nodes
function hasPath( graph:{}, source:string, dest:string, visited:any ) { 
    if( source === dest ) return true;
    if( visited.has(source) ) return false;//si ya fue visitado, es un loop asiq false
    
    visited.add(source);

    for (const neighbor of graph[source]){
        if(hasPath(graph, neighbor, dest, visited)){
            return true;
        }
    }
    return false;
}
function buildGraph(edges) {
    const graph = {};

    for (let edge of edges) {
        const [ a, b] = edge;
        if( !(a in graph) )  graph[a] = [];
        if( !(b in graph) )  graph[b] = [];
        graph[a].push( b );
        graph[b].push( a );

    }
    return graph;
}
const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
];

// console.log( buildGraph(edges) );
let result = undirectedPath( edges, 'j', 'm');
console.log(result);
