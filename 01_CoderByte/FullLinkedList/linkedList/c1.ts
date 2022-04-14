'use strict';
class NODE{ 
    data:number = 0; 
    public nextNode:NODE = null;  
    constructor(n:number){
        this.data = n;
        this.nextNode = null;
    }
    deleteItemIterative(item:number){ 
        let buffer = this.data;
        this._deleteItemIterative(this, item); 
        if(buffer === item)
            this.pop(); 
    }
    private _deleteItemIterative(head:NODE, item:number){ 
        let prev = null;
        let curr = head; 
        if(curr.data === item){ 
            while(curr.nextNode != null){
                curr.data = curr.nextNode.data;
                curr = curr.nextNode;
            }
            return;
        } 
        while( curr !== null ){
            if(curr.data === item){
                prev.nextNode = curr.nextNode; 
            } 
            prev = curr;// I'm save the curr, wich in the next itr is prev !
            curr = curr.nextNode;
        }
    }
    private _deleteItem(head:NODE,item:number){
        if(head.nextNode === null ) return head;
        if(head.nextNode.data === item){
            let next = head.nextNode;
            head.nextNode = next.nextNode;
            return head;
        }
        else{
            head.nextNode = head._deleteItem(head.nextNode, item);
            return head;
        }
    }
    deleteItem(item:number){
        return this._deleteItem(this, item);
    }
    popBad(){
        return this._popBad(this);
    }
    private _popBad(head:NODE){
        if(head.nextNode === null){ 
            let dataPop = head.data; 
            head = null;// for some pointer/reason doesn't work 
            // head = new NODE(555);
            return dataPop;
        }
        head._popBad(head.nextNode);
    }
    // Costo pero salio 
    private _pop(head:NODE){
        if(head.nextNode === null) { 
            head = null; // Delete last node,so now the previousNode points to null...
            return head;  
        }
        else
            head.nextNode = this._pop( head.nextNode );//I catch the return value (base case is 'null' )
            return head;
    }
    pop(){
        return this._pop(this);
    }
    pushVector(arr = []){
        if(arr.length>0){
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                this.push_back(element);
            }
        }
        else
            console.log("Empty!");
    }
    push_front(newData:number){
        if(this.nextNode == null){
            this.nextNode = new NODE(newData);
            return newData;
        }
        let newNode = new NODE(newData);
        newNode.data = this.data;
        this.data = newData;
        newNode.nextNode = this.nextNode;
        this.nextNode = newNode;
        return newData;
    } 
    push_back(newData:number){
        if(this.nextNode == null){
            this.nextNode = new NODE(newData);
            return newData; 
        }
        let lastNode:NODE = this;
        while(lastNode.nextNode != null){
            lastNode = lastNode.nextNode;
        }
        lastNode.nextNode = new NODE(newData);
        return lastNode.nextNode.data;
    }
    private addNode(index:number, currNode:NODE){
        return this._addNode(this,index,currNode);
    }
    private _addNode(head:NODE, index:number, currNode:NODE){
        let len:number = this.lenNode();
        if(index >= 0 && index <= len && currNode != null){
            if(index === 0){
                currNode.nextNode = head.nextNode;
                head.nextNode = currNode; 
                return true;
            }
            else{
                let prev = this.getNode(index-1);
                currNode.nextNode = prev.nextNode;
                prev.nextNode = currNode; 
                return true;
            }
        } 
        return false;
    }
    private getNode( index:number ){
        let len:number = this.lenNode();
        if(index >= 0 && index < len){
            if(index == 0) return this;

            let i = 1;
            let temp = this.nextNode;
            while(temp != null && index != i){
                temp = temp.nextNode;
                i++;
            }
            return temp;
        }
        return null;
    }
    getData( i:number ){
        let count = 0;
        let len = this.lenNode();
        if(i < len){
            if(i == 0) return this; 
            let temp:NODE = this; 
            while(temp != null){
                if(i == count)
                    return temp;
                count++;
                temp = temp.nextNode;
            }
        }
    }
    setData(i:number, data:number){
        return this._setData(this, i, data);
    }
    private _setData(head:NODE, index:number, data:number){
        let count = 1;
        let len = head.lenNode();
        if(index >= 0 && index < len){
            if(index == 0){
                head.data = data;
                return ;
            }
            let temp = head.nextNode;
            while(temp != null){ 
                if(index === count){
                    temp.data = data;
                    break;
                }
                count++;
                temp = temp.nextNode; 
            }
        }
    }
    contains( target:number ){
        console.log( this._contains(this,target) );
    }
    private _contains( head:NODE, target:number ){
        if(head === null) return false;
        if(head.data === target) return true;
        return this._contains( head.nextNode , target );
    } 
    sortNodes(compareValues:Function){ 
       return this._sortNodes(this,compareValues);
    }
    private _sortNodes(head:NODE,compareValues:Function){
        let n = head.lenNode(); 
        let flag = true;  
        while(flag){  
            flag = false;  
            for (let i = 0; i < n-1 ; i++) {  

                let curr_i = head.getNode(i); 
                let next_j = head.getNode(i+1); 

                if(compareValues(curr_i, next_j)>0){ 
                    let buff_data = curr_i.data;
                    head.setData(i, next_j.data);
                    head.setData(i+1, buff_data); 
                    flag = true; 
                }
            }
            n--; 
        }

        // for(let i=0; i<n-1; i++){ // 6
        //     for (let j = i+1; j<n; j++) { 
        //         let curr_i = head.getNode(i); // 50
        //         let next_j = head.getNode(j); // 45 
        //         if(compareValues(curr_i, next_j)>0){
        //             let buff_data = curr_i.data;
        //             head.setData(i, next_j.data);
        //             head.setData(j, buff_data);
        //         }
        //     }
        // }
    }
    lenNode(){
        let count = 0;
        let temp:NODE = this;
        while(temp != null){
            count++;
            temp = temp.nextNode;
        }
        return count;
    }
    lenLog(){
        console.log( this._lenNode(this) );
    } 
    private _lenNode(head:NODE){
        if( head === null) return 0;
        return 1 + this._lenNode(head.nextNode);
    }
    printLog(){
        let arr = [];
        let temp:NODE = this;
        while(temp != null){
            arr.push(temp.data);
            temp = temp.nextNode;
        }
        console.log(arr);
    }
    private printRecursive(myNode:NODE, cache=[]){
        if(myNode === null)
            return cache;
        
        cache.push( myNode.data );
        this.printRecursive(myNode.nextNode, cache);
    }
    printStr(separator?:string, bool?:boolean){ 
        let ret = this._printStr(this, separator);
        if(bool){
            console.log( ret );
            return ret;
        }
        else
            return ret;
    }
    private _printStr(myNode:NODE, separator = ' '){
        if(myNode === null) return '';
        return myNode.data + separator + this._printStr(myNode.nextNode,separator);
    }
    clone(){
        return this._clone(this);
    }
    private _clone(head:NODE){
        let clone = new NODE(head.data);
        let temp = head.nextNode;
        while( temp != null){
            clone.push_back(temp.data);
            temp = temp.nextNode;
        }
        return clone;
    }
    reverse(){
        let temp = this.clone();
        return this._reverse(temp);
    }
    reverseLog(){
        let temp = this.reverse();
        temp.printArr();
    }
    private _reverse2( curr:NODE, prev=null){
        if(curr === null) return prev;
        let next = curr.nextNode;
        curr.nextNode = prev;
        this._reverse2(next, curr);
    }
    private _reverse( head:NODE ){ 
        if(head === null || head.nextNode === null)
            return head; 
        let newHead = this._reverse(head.nextNode); 
        head.nextNode.nextNode = head; 
        head.nextNode = null; 
        return newHead;
    }
    
    sumList(){
        return this._sumList(this);
    }
    private _sumList(head:NODE){
        if(head.nextNode === null)// the last node 
            return head.data; 
        return head.data + head._sumList(head.nextNode);
    }
};  
function sortedMerge(a:NODE, b:NODE) {
    if(a == null) return b;
    if(b == null) return a;

    if(a.data < b.data){
        a.nextNode = sortedMerge(a.nextNode,b);
        return a;
    } else {
        b.nextNode = sortedMerge(a,b.nextNode);
        return b;
    }
}
function compareData(nodeA:NODE, nodeB:NODE) {
    return nodeA.data - nodeB.data;
}
function reverseIterative(head:NODE) {
    let prev = null;
    let curr = head;
     
    if(head != null){ // a->b->c->null            c->b->a->null
        while(curr != null){ 
            const next = curr.nextNode;
            curr.nextNode = prev; // null<-a

            prev = curr;
            curr = next;
        }
        return prev; 
    }
    else
        return head;
}
function reverse3(curr:NODE, prev=null) { 
    if(curr === null) return prev;
    let next = curr.nextNode;
    curr.nextNode = prev;
    return reverse3(next, curr); 
}
let b = new NODE(1); 
// b.pushVector([2]);
let a = new NODE(50); // get Node
a.pushVector([60]);  

let myList = sortedMerge(a,b);    
// myList.pushVector([4,7]);// len 6 
// myList.printLog(); // 1, 2, 50, 60, 4 , 7
// myList.sortNodes(compareData);// 1, 2, 4, 7, 50, 60 
// myList.deleteItem(1);//dont work
// myList.deleteItem(50);
myList.printLog();
// let res = reverseIterative(myList);
let res = reverse3(myList);
// console.log(res.data,res.nextNode )
// myList.deleteItemIterative(1);  
res.printLog();
