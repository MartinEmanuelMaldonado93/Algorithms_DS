'use strict';
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var QueueNode = /** @class */ (function () {
    function QueueNode(val) {
        this.val = val;
        this.next = null;
    }
    return QueueNode;
}());
;
var Queue = /** @class */ (function () {
    function Queue() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }
    Queue.prototype.enqueue = function (val) {
        var newNode = new QueueNode(val);
        if (this.size === 0) {
            this.back = newNode;
            this.front = newNode;
        }
        else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++;
    };
    Queue.prototype.dequeue = function () {
        if (this.size > 0) {
            var next = this.front.next;
            this.front = next;
            this.size--;
        }
        else
            -1;
    };
    Queue.prototype.printLog = function () {
        console.log(this._printLog(this.front));
    };
    // private _printLog(head:QueueNode){
    //     if( head.next === null)
    //         return [head.val];
    //     let result = this._printLog(head.next);
    //     result.push( head.val );
    //     return result;
    // }
    Queue.prototype._printLog = function (head) {
        if (head === null)
            return null;
        if (head.next === null) {
            return [head.val]; //[head.val];
        }
        var result = this._printLog(head.next);
        return __spreadArray([head.val], result, true);
    };
    return Queue;
}());
var BinNode = /** @class */ (function () {
    function BinNode(n) {
        this.data = n;
        this.rightNode = null;
        this.leftNode = null;
    }
    BinNode.prototype.bfs = function (val) {
        console.log(this._BreathFirstSearch(this, val));
    };
    BinNode.prototype._BreathFirstSearch = function (root, val) {
        var queue = [root];
        while (queue.length > 0) { // mientras haya elementos 
            var curr = queue.shift();
            if (curr.data === val)
                return true;
            if (curr.leftNode !== null)
                queue.push(curr.leftNode);
            if (curr.rightNode !== null)
                queue.push(curr.rightNode);
        }
        return false;
    };
    BinNode.prototype._BreathFirstTraversal = function (root) {
        var queue = [root];
        while (queue.length > 0) { // mientras haya elementos 
            var curr = queue.shift();
            console.log(curr.data);
            if (curr.leftNode !== null)
                queue.push(curr.leftNode);
            if (curr.rightNode !== null)
                queue.push(curr.rightNode);
        }
    };
    BinNode.prototype._print = function (head) {
        if (head === null)
            return null;
        console.log(head.data);
        var left = this._print(head.leftNode);
        if (left != null) {
            console.log(left.data);
            return left;
        }
        var right = this._print(head.rightNode);
        if (right != null) {
            console.log(right.data);
            return right;
        }
    };
    BinNode.prototype.sumTree = function () {
        return this._sumTree(this);
    };
    BinNode.prototype._sumTree = function (root) {
        var queue = [root];
        var acc = 0;
        while (queue.length > 0) { // mientras haya elementos 
            var curr = queue.shift();
            acc += curr.data;
            if (curr.leftNode !== null)
                queue.push(curr.leftNode);
            if (curr.rightNode !== null)
                queue.push(curr.rightNode);
        }
        console.log(acc);
        return acc;
    };
    BinNode.prototype.postOrder = function () {
        console.log(this._postOrder(this));
    };
    BinNode.prototype.preOrder = function () {
        console.log(this._preOrder(this));
    };
    BinNode.prototype.inOrder = function () {
        console.log(this._inOrder(this));
    };
    BinNode.prototype._depthFirstSearch = function (root, cache) {
        if (cache === void 0) { cache = []; }
        if (root === null)
            return;
        cache.push(root.data);
        this._depthFirstSearch(root.leftNode, cache);
        this._depthFirstSearch(root.rightNode, cache);
        return cache;
    };
    BinNode.prototype._inOrder = function (root, cache) {
        if (cache === void 0) { cache = []; }
        if (root === null)
            return;
        this._inOrder(root.leftNode, cache);
        cache.push(root.data);
        this._inOrder(root.rightNode, cache);
        return cache;
    };
    //Pre-order es primero el padre desp los hijos
    BinNode.prototype._preOrder = function (root) {
        var stack = [root]; // 'a', 'b', 'd', 'e', 'c', 'f'
        var arr = [];
        while (stack.length > 0) {
            var curr = stack.pop();
            arr.push(curr.data);
            if (curr.rightNode != null)
                stack.push(curr.rightNode);
            if (curr.leftNode != null)
                stack.push(curr.leftNode);
        }
        return arr;
    };
    BinNode.prototype._postOrder = function (root, cache) {
        if (cache === void 0) { cache = []; }
        if (root === null)
            return;
        this._postOrder(root.leftNode, cache);
        this._postOrder(root.rightNode, cache);
        cache.push(root.data);
        return cache;
    };
    return BinNode;
}());
;
var a = new BinNode('a');
var b = new BinNode('b');
var c = new BinNode('c');
var d = new BinNode('d');
var e = new BinNode('e');
var f = new BinNode('f');
a.leftNode = b;
a.rightNode = c;
b.leftNode = d;
b.rightNode = e;
c.rightNode = f;
// a.bfs(45);// true
// a.bfs(60);// false
// a.sumTree();
// a.preOrder();//[ 'a', 'b', 'd', 'e', 'c', 'f' ]
// a.postOrder();// [d,e,b,f,c,a] 
a.inOrder(); // 
