'use strict'; 
class StackNode{  
    nextNode:StackNode;
    data:number;
    constructor(data:number){   
        this.data = data;
        this.nextNode = null;
    }
}; 
export default class Stack{ 
    private top:StackNode;
    private size:number; 
    constructor(){
        this.top = null; 
        this.size = 0;
    }
    get Size(){
        return this.size;
    }
    push(data:number){
        if(this.size === 0)
            this.top = new StackNode(data); 
        else{
            const newNode = new StackNode(data);
            newNode.nextNode = this.top;
            this.top = newNode;
        }
        this.size++;
    }
    pop(){ 
        if(this.size > 0)
            this.size--;
        else 
            return null;
        let nodeToDelete = this.top; 
        this.top = nodeToDelete.nextNode; 
        return nodeToDelete.data;
    }
    printNodes(){
        return this._printNodes(this.top);
    }
    private _printNodes( head:StackNode ){ 
        if(head === null) return [];
        if(head.nextNode === null)
            return [head.data]; 

        let currArr = this._printNodes( head.nextNode );
        currArr.push(head.data);
        return currArr;
    }
    printLog(){
        console.log(this.printNodes());
    }
};



// let s = new Stack();
// s.push(28);
// s.push(33);
// s.push(45);
// console.log( s.Size );
// s.printLog();
// let d = s.pop(); 
// s.pop() 
// s.printLog();
// console.log("holaa");