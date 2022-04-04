'use strict';

class GraphNode{
    val;
    constructor( ){ }
    namefunction(str){

        return str;
    }
};
function dephtFirstSearch(gph_node , set_visited , target) {
    if(gph_node == null) return false;
    if(gph_node.val == target) 
        return true;
    
    for( neighbor of gph_node.getNeighbors() ){
        if( set_visited.contains(neighbor) )
            continue;
        set_visited.add(neighbor);
        let bool_isFound = dephtFirstSearch(neighbor, set_visited, target);
        if( bool_isFound )
            return true;
    }
    return false;    
}

let s = new Graph();

console.log( s.namefunction());
console.log();