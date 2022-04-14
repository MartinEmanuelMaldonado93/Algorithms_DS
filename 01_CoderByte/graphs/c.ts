'use strict';

class Solution{
    constructor( ){ }
    namefunction(str:string[]){

        return str;
    }
};
const myGraph = {
    a:['c','b'],
    // a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}
function depthFirstSearch( graph:{}, source:string ) { 
    const stack = [source];
    while( stack.length > 0){
        let curr = stack.pop();
        console.log(curr);
        for (const neighbor of graph[curr]) {
            stack.push(neighbor);
        }
    } 
}
function dephtRecursive( graph:{}, curr:string) {
    console.log(curr);
    for(let neighbor of graph[curr])
        dephtRecursive(graph , neighbor);

}
// ------------------------------------------------------------------------
function breathFirstSearch(graph:{} , source) {
    let queue = [source];
    while(queue.length > 0){
        let curr = queue.shift();
        console.log(curr); 
        for(let neighbor of graph[curr]){
            queue.push(neighbor);
        }
    }
}
//-----------------------  PROBLEMS  -----------------------------
const myGraph2 = {
    f:['g','i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[]
}
function hasPath(graph:{}, source:string, dst:string){
    if(source === dst)  return true;
    for (const neighbor of graph[source]) {
        if(hasPath(graph,neighbor,dst))
            return true;
    }
    return false;
}
function hasPathIterative(graph:{}, source:string, destination:string) {
    const queue = [source];
    while(queue.length > 0){
        const curr = queue.shift();
        if(curr === destination) 
            return true;
        for (const neighbor of graph[curr]) {
            queue.push( neighbor ); 
        }
    }
    return false;
}

// dephtRecursive( myGraph, 'a' );// abdfce 
// depthFirstSearch( myGraph, 'a' );//  abdfce 
// breathFirstSearch( myGraph, 'a');// acbedf
// console.log(hasPath( myGraph2 , 'f', 'k'));
// console.log(hasPathIterative( myGraph2 , 'f', 'k'));
