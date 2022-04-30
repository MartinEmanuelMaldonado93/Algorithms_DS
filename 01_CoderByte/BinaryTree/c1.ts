class QueueNode{
    val:string|number;
    next: QueueNode;
    constructor(val:string|number){
        this.val  = val;
        this.next = null;
    }
};
class Queue{
    front: QueueNode|null;
    back : QueueNode|null; 
    size:number;
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }
    enqueue(val:any){
        let newNode = new QueueNode(val);
        if(this.size === 0){ 
            this.back  = newNode;
            this.front = newNode;
        }
        else{
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++;
    }
    dequeue(){
        if(this.size > 0){
            let next = this.front.next;
            this.front = next;
            this.size--;
        }
        else
            -1;
    }
    printLog(){

        console.log(this._printLog( this.front ) );
        
    }
    // private _printLog(head:QueueNode){
    //     if( head.next === null)
    //         return [head.val];
    //     let result = this._printLog(head.next);
    //     result.push( head.val );
    //     return result;
    // }
    private _printLog(head:QueueNode){
        if(head === null) return null;
        if( head.next === null){ 
            return [head.val];//[head.val];
        }
        let result = this._printLog(head.next); 
        return [head.val,...result];
    }

}
class BinNode{
    data:string|number;
    rightNode:BinNode;
    leftNode :BinNode;
    constructor( n: string|number ){ 
            this.data = n;
            this.rightNode = null;
            this.leftNode  = null; 
    }
    bfs( val:any ){
        console.log(this._BreathFirstSearch( this, val )); 
    }
    private _BreathFirstSearch( root:BinNode, val:any ){
        const queue = [root];
        while( queue.length > 0){ // mientras haya elementos 
            let curr = queue.shift(); 
            if( curr.data === val ) 
                return true;

            if( curr.leftNode  !== null)
                queue.push( curr.leftNode ); 
            if( curr.rightNode !== null)
                queue.push( curr.rightNode ); 
        }
        return false;
    }
    private _BreathFirstTraversal( root:BinNode ){ 
        const queue = [root];
        while( queue.length > 0){ // mientras haya elementos 
            let curr = queue.shift();
            console.log( curr.data );

            if( curr.leftNode  !== null)
                queue.push( curr.leftNode ); 
            if( curr.rightNode !== null)
                queue.push( curr.rightNode ); 
        }
    }
    private _print(head:BinNode ){ // raiz izq der 
        if(head === null) 
            return null;
        console.log( head.data );
        let left  = this._print( head.leftNode );
        if(left  != null){ 
            console.log( left.data );
            return left;
        }
        let right = this._print( head.rightNode );
        if(right != null){ 
            console.log(right.data);
            return right;
        }  
    } 
    sumTree(){
        // return this._sumTree(this);
        console.log( this._sumTreeRecursive(this) );
    }
    private _sumTree( root:BinNode ){ 
        const queue = [root];
        let acc = 0;
        while( queue.length > 0){ // mientras haya elementos 
            let curr = queue.shift();
            acc += curr.data;

            if( curr.leftNode  !== null)
                queue.push( curr.leftNode ); 
            if( curr.rightNode !== null)
                queue.push( curr.rightNode ); 
        }
        console.log( acc );
        return acc;
    } 
    postOrder(){
        console.log( this._postOrder(this) );
    }
    preOrder(){
        console.log( this._preOrder(this) );
    }
    inOrder(){
        console.log( this._inOrder(this) );
    }
    private _depthFirstSearch(root:BinNode, cache=[]){
        if(root === null) return; 
        cache.push(root.data);
        this._depthFirstSearch( root.leftNode, cache);
        this._depthFirstSearch( root.rightNode, cache);
        return  cache;
    }
    private _inOrder( root:BinNode, cache=[]){ // left- root-right 
        if(root === null) return ;
        this._inOrder( root.leftNode , cache); 
        cache.push(root.data); 
        this._inOrder( root.rightNode, cache);
        return cache;
    }
    //Pre-order es primero el padre desp los hijos
    private _preOrder( root:BinNode ){
        let stack = [root];// 'a', 'b', 'd', 'e', 'c', 'f'
        let arr = [];
        while(stack.length > 0){
            let curr = stack.pop();
            arr.push( curr.data );

            if(curr.rightNode != null)
                stack.push( curr.rightNode );
            if(curr.leftNode  != null)
                stack.push( curr.leftNode );
            
        }
        return arr;
    }
    private _postOrder( root:BinNode, cache=[]){ 
        if(root === null) return ;
        this._postOrder( root.leftNode , cache); 
        this._postOrder( root.rightNode, cache);
        cache.push(root.data); 
        return cache; 
    } 
    private _sumTreeRecursive(root:BinNode  ){
        if(root === null) return 0;   
        return  this._sumTreeRecursive( root.leftNode ) + 
                root.data + 
                this._sumTreeRecursive( root.rightNode );
    }
};
let a = new BinNode(3); 
let b = new BinNode(2);
let c = new BinNode(7); 
let d = new BinNode(4);
let e = new BinNode(-2);
let f = new BinNode(5);
// let a = new BinNode('a'); 
// let b = new BinNode('b');
// let c = new BinNode('c'); 
// let d = new BinNode('d');
// let e = new BinNode('e');
// let f = new BinNode('f');

a.leftNode  = b;
a.rightNode = c;
b.leftNode  = d;
b.rightNode = e;
c.rightNode = f;

// a.bfs(45);// true
// a.bfs(60);// false
// a.sumTree();
// a.preOrder();//[ 'a', 'b', 'd', 'e', 'c', 'f' ]
// a.postOrder();// [d,e,b,f,c,a] 
// a.inOrder(); // 
a.sumTree();

// pre order   root- left-right 
// in order    left- root-right
// post order  left- right-root (escritura polaca)
