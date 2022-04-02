"   BRACKETS PROBLEM STACK IMPLEMENTATION   ";
// import Stack from "./d.js";
// https://www.samanthaming.com/tidbits/79-module-cheatsheet/ good way to sell myself
class StackNode{  
    nextNode:StackNode;
    data:any;
    constructor(data:any){   
        this.data = data;
        this.nextNode = null;
    }
}; 
class Stack{ 
    private top:StackNode;
    private size:number; 
    constructor(){
        this.top = null; 
        this.size = 0;
    }
    get Size(){
        return this.size;
    }
    get Top(){
        if(this.size > 0)
            return this.top.data;
        else return -1;
    }
    push(data:any){
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
// Limpiar brackets ( { [ ]})
function isCleanBrackets(str:string) {
    let s = new Stack(); 
    for (let i = 0; i < str.length; i++){
        
        if( str[i]=='('|| str[i]=='[' ||str[i]=='{' )
            s.push(str[i]);  
        
        else if( str[i] ==')'|| str[i] ==']' || str[i] =='}' ){
            if(s.Size === 0)
                return false;
            else
                s.pop();
        }
    } 
    return s.Size === 0 ? true:false;
}

console.log( isCleanBrackets("()") );// true 
console.log( isCleanBrackets("(( {[ ]} ))") );// true
console.log( isCleanBrackets("(({ ] }))") );// FALSE
console.log( isCleanBrackets("[(({hello}))]") );// true
console.log( isCleanBrackets("(({ a] })]") );// FALSE 
