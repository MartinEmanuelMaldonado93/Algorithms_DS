// JavaScript FILE change ext '.ts'
class Stack{/// ES6
    val;
    next;
    constructor(data){
        this.val = data;
        this.next = null;
    }
}
// ES5
var MinStack = function() {  
    this.topp = null;
    this.size = 0;
    this.min = Number.MAX_SAFE_INTEGER; 
};
/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) { 
    let newStack = new Stack(val);
    if( this.size === 0 ){
        this.min = Math.min(this.min, val);
        this.topp = newStack;
        this.size++;
    }
    else{
        newStack.next = this.topp;
        this.topp = newStack;
        this.size++;
        this.min = Math.min(this.min, val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() { 
    let next = this.topp.next;
    let valPoped = this.topp.val; 
    this.topp = next;
    this.size--;
    this.min = Number.MAX_SAFE_INTEGER;
    let temp = this.topp;
    while(temp !== null){ 
        // console.log( temp.val );
        this.min = Math.min(this.min, temp.val );
        temp = temp.next;
    }
    return valPoped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if( this.size > 0 ){
        return this.topp.val;
    } 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if( this.size > 0)
        return this.min;
    else
        return -1;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
let minStack = new MinStack(); 
minStack.push(-2);
minStack.push(0); 
minStack.push(-3); 
console.log(minStack.getMin()); // return -3
console.log(minStack.pop()); 
console.log(minStack.top()); 
console.log(minStack.getMin()); // return -2
