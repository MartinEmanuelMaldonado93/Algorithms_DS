'use strict';
exports.__esModule = true;
var StackNode = /** @class */ (function () {
    function StackNode(data) {
        this.data = data;
        this.nextNode = null;
    }
    return StackNode;
}());
;
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.size = 0;
    }
    Object.defineProperty(Stack.prototype, "Size", {
        get: function () {
            return this.size;
        },
        enumerable: false,
        configurable: true
    });
    Stack.prototype.push = function (data) {
        if (this.size === 0)
            this.top = new StackNode(data);
        else {
            var newNode = new StackNode(data);
            newNode.nextNode = this.top;
            this.top = newNode;
        }
        this.size++;
    };
    Stack.prototype.pop = function () {
        if (this.size > 0)
            this.size--;
        else
            return null;
        var nodeToDelete = this.top;
        this.top = nodeToDelete.nextNode;
        return nodeToDelete.data;
    };
    Stack.prototype.printNodes = function () {
        return this._printNodes(this.top);
    };
    Stack.prototype._printNodes = function (head) {
        if (head === null)
            return [];
        if (head.nextNode === null)
            return [head.data];
        var currArr = this._printNodes(head.nextNode);
        currArr.push(head.data);
        return currArr;
    };
    Stack.prototype.printLog = function () {
        console.log(this.printNodes());
    };
    return Stack;
}());
exports["default"] = Stack;
;
