// STACK PROBLEM
// import Stack from "./d.js";
// https://www.samanthaming.com/tidbits/79-module-cheatsheet/ good way to sell myself
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
    Object.defineProperty(Stack.prototype, "Top", {
        get: function () {
            if (this.size > 0)
                return this.top.data;
            else
                return -1;
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
;
// Limpiar brackets ( { [ ]})
function isCleanBrackets(str) {
    var s = new Stack();
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '[' || str[i] == '{')
            s.push(str[i]);
        else if (str[i] == ')' || str[i] == ']' || str[i] == '}') {
            if (s.Size === 0)
                return false;
            else
                s.pop();
        }
    }
    return s.Size === 0 ? true : false;
}
console.log(isCleanBrackets("()")); // true 
console.log(isCleanBrackets("(( {[ ]} ))")); // true
console.log(isCleanBrackets("(({ ] }))")); // FALSE
console.log(isCleanBrackets("[(({hello}))]")); // true
console.log(isCleanBrackets("(({ a] })]")); // FALSE 
