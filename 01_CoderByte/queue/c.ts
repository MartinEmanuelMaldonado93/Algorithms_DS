'use strict';

class QueueNode{
    val:  any;
    next: QueueNode;
    constructor(val:any){
        this.val  = val;
        this.next = null;
    }
};
class Queue{
    front: QueueNode;
    back : QueueNode; 
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
let s = new Queue();
s.enqueue("martin");
s.enqueue('popis');
s.enqueue(45);
s.printLog();
s.dequeue()
s.dequeue()
s.printLog()
s.dequeue()
s.dequeue()
s.printLog() 