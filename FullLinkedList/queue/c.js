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
var s = new Queue();
s.enqueue("martin");
s.enqueue('popis');
s.enqueue(45);
s.printLog();
s.dequeue();
s.dequeue();
s.printLog();
s.dequeue();
s.dequeue();
s.printLog();
