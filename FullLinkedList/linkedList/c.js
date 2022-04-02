'use strict';
var NODE = /** @class */ (function () {
    function NODE(n) {
        this.data = 0;
        this.nextNode = null;
        this.data = n;
        this.nextNode = null;
    }
    NODE.prototype.deleteItemIterative = function (item) {
        var buffer = this.data;
        this._deleteItemIterative(this, item);
        if (buffer === item)
            this.pop();
    };
    NODE.prototype._deleteItemIterative = function (head, item) {
        var prev = null;
        var curr = head;
        if (curr.data === item) {
            while (curr.nextNode != null) {
                curr.data = curr.nextNode.data;
                curr = curr.nextNode;
            }
            return;
        }
        while (curr !== null) {
            if (curr.data === item) {
                prev.nextNode = curr.nextNode;
            }
            prev = curr; // I'm save the curr, wich in the next itr is prev !
            curr = curr.nextNode;
        }
    };
    NODE.prototype._deleteItem = function (head, item) {
        if (head.nextNode === null)
            return head;
        if (head.nextNode.data === item) {
            var next = head.nextNode;
            head.nextNode = next.nextNode;
            return head;
        }
        else {
            head.nextNode = head._deleteItem(head.nextNode, item);
            return head;
        }
    };
    NODE.prototype.deleteItem = function (item) {
        return this._deleteItem(this, item);
    };
    NODE.prototype.popBad = function () {
        return this._popBad(this);
    };
    NODE.prototype._popBad = function (head) {
        if (head.nextNode === null) {
            var dataPop = head.data;
            head = null; // for some pointer/reason doesn't work 
            // head = new NODE(555);
            return dataPop;
        }
        head._popBad(head.nextNode);
    };
    // Costo pero salio 
    NODE.prototype._pop = function (head) {
        if (head.nextNode === null) {
            head = null; // Delete last node,so now the previousNode points to null...
            return head;
        }
        else
            head.nextNode = this._pop(head.nextNode); //I catch the return value (base case is 'null' )
        return head;
    };
    NODE.prototype.pop = function () {
        return this._pop(this);
    };
    NODE.prototype.pushVector = function (arr) {
        if (arr === void 0) { arr = []; }
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                var element = arr[i];
                this.push_back(element);
            }
        }
        else
            console.log("Empty!");
    };
    NODE.prototype.push_front = function (newData) {
        if (this.nextNode == null) {
            this.nextNode = new NODE(newData);
            return newData;
        }
        var newNode = new NODE(newData);
        newNode.data = this.data;
        this.data = newData;
        newNode.nextNode = this.nextNode;
        this.nextNode = newNode;
        return newData;
    };
    NODE.prototype.push_back = function (newData) {
        if (this.nextNode == null) {
            this.nextNode = new NODE(newData);
            return newData;
        }
        var lastNode = this;
        while (lastNode.nextNode != null) {
            lastNode = lastNode.nextNode;
        }
        lastNode.nextNode = new NODE(newData);
        return lastNode.nextNode.data;
    };
    NODE.prototype.addNode = function (index, currNode) {
        return this._addNode(this, index, currNode);
    };
    NODE.prototype._addNode = function (head, index, currNode) {
        var len = this.lenNode();
        if (index >= 0 && index <= len && currNode != null) {
            if (index === 0) {
                currNode.nextNode = head.nextNode;
                head.nextNode = currNode;
                return true;
            }
            else {
                var prev = this.getNode(index - 1);
                currNode.nextNode = prev.nextNode;
                prev.nextNode = currNode;
                return true;
            }
        }
        return false;
    };
    NODE.prototype.getNode = function (index) {
        var len = this.lenNode();
        if (index >= 0 && index < len) {
            if (index == 0)
                return this;
            var i = 1;
            var temp = this.nextNode;
            while (temp != null && index != i) {
                temp = temp.nextNode;
                i++;
            }
            return temp;
        }
        return null;
    };
    NODE.prototype.getData = function (i) {
        var count = 0;
        var len = this.lenNode();
        if (i < len) {
            if (i == 0)
                return this;
            var temp = this;
            while (temp != null) {
                if (i == count)
                    return temp;
                count++;
                temp = temp.nextNode;
            }
        }
    };
    NODE.prototype.setData = function (i, data) {
        return this._setData(this, i, data);
    };
    NODE.prototype._setData = function (head, index, data) {
        var count = 1;
        var len = head.lenNode();
        if (index >= 0 && index < len) {
            if (index == 0) {
                head.data = data;
                return;
            }
            var temp = head.nextNode;
            while (temp != null) {
                if (index === count) {
                    temp.data = data;
                    break;
                }
                count++;
                temp = temp.nextNode;
            }
        }
    };
    NODE.prototype.contains = function (target) {
        console.log(this._contains(this, target));
    };
    NODE.prototype._contains = function (head, target) {
        if (head === null)
            return false;
        if (head.data === target)
            return true;
        return this._contains(head.nextNode, target);
    };
    NODE.prototype.sortNodes = function (compareValues) {
        return this._sortNodes(this, compareValues);
    };
    NODE.prototype._sortNodes = function (head, compareValues) {
        var n = head.lenNode();
        var flag = true;
        while (flag) {
            flag = false;
            for (var i = 0; i < n - 1; i++) {
                var curr_i = head.getNode(i);
                var next_j = head.getNode(i + 1);
                if (compareValues(curr_i, next_j) > 0) {
                    var buff_data = curr_i.data;
                    head.setData(i, next_j.data);
                    head.setData(i + 1, buff_data);
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
    };
    NODE.prototype.lenNode = function () {
        var count = 0;
        var temp = this;
        while (temp != null) {
            count++;
            temp = temp.nextNode;
        }
        return count;
    };
    NODE.prototype.lenLog = function () {
        console.log(this._lenNode(this));
    };
    NODE.prototype._lenNode = function (head) {
        if (head === null)
            return 0;
        return 1 + this._lenNode(head.nextNode);
    };
    NODE.prototype.printLog = function () {
        var arr = [];
        var temp = this;
        while (temp != null) {
            arr.push(temp.data);
            temp = temp.nextNode;
        }
        console.log(arr);
    };
    NODE.prototype.printRecursive = function (myNode, cache) {
        if (cache === void 0) { cache = []; }
        if (myNode === null)
            return cache;
        cache.push(myNode.data);
        this.printRecursive(myNode.nextNode, cache);
    };
    NODE.prototype.printStr = function (separator, bool) {
        var ret = this._printStr(this, separator);
        if (bool) {
            console.log(ret);
            return ret;
        }
        else
            return ret;
    };
    NODE.prototype._printStr = function (myNode, separator) {
        if (separator === void 0) { separator = ' '; }
        if (myNode === null)
            return '';
        return myNode.data + separator + this._printStr(myNode.nextNode, separator);
    };
    NODE.prototype.clone = function () {
        return this._clone(this);
    };
    NODE.prototype._clone = function (head) {
        var clone = new NODE(head.data);
        var temp = head.nextNode;
        while (temp != null) {
            clone.push_back(temp.data);
            temp = temp.nextNode;
        }
        return clone;
    };
    NODE.prototype.reverse = function () {
        var temp = this.clone();
        return this._reverse(temp);
    };
    NODE.prototype.reverseLog = function () {
        var temp = this.reverse();
        temp.printArr();
    };
    NODE.prototype._reverse2 = function (curr, prev) {
        if (prev === void 0) { prev = null; }
        if (curr === null)
            return prev;
        var next = curr.nextNode;
        curr.nextNode = prev;
        this._reverse2(next, curr);
    };
    NODE.prototype._reverse = function (head) {
        if (head === null || head.nextNode === null)
            return head;
        var newHead = this._reverse(head.nextNode);
        head.nextNode.nextNode = head;
        head.nextNode = null;
        return newHead;
    };
    NODE.prototype.sumList = function () {
        return this._sumList(this);
    };
    NODE.prototype._sumList = function (head) {
        if (head.nextNode === null) // the last node 
            return head.data;
        return head.data + head._sumList(head.nextNode);
    };
    return NODE;
}());
;
function sortedMerge(a, b) {
    if (a == null)
        return b;
    if (b == null)
        return a;
    if (a.data < b.data) {
        a.nextNode = sortedMerge(a.nextNode, b);
        return a;
    }
    else {
        b.nextNode = sortedMerge(a, b.nextNode);
        return b;
    }
}
function compareData(nodeA, nodeB) {
    return nodeA.data - nodeB.data;
}
function reverseIterative(head) {
    var prev = null;
    var curr = head;
    if (head != null) { // a->b->c->null            c->b->a->null
        while (curr != null) {
            var next = curr.nextNode;
            curr.nextNode = prev; // null<-a
            prev = curr;
            curr = next;
        }
        return prev;
    }
    else
        return head;
}
function reverse3(curr, prev) {
    if (prev === void 0) { prev = null; }
    if (curr === null)
        return prev;
    var next = curr.nextNode;
    curr.nextNode = prev;
    return reverse3(next, curr);
}
var b = new NODE(1);
// b.pushVector([2]);
var a = new NODE(50); // get Node
a.pushVector([60]);
var myList = sortedMerge(a, b);
// myList.pushVector([4,7]);// len 6 
// myList.printLog(); // 1, 2, 50, 60, 4 , 7
// myList.sortNodes(compareData);// 1, 2, 4, 7, 50, 60 
// myList.deleteItem(1);//dont work
// myList.deleteItem(50);
myList.printLog();
// let res = reverseIterative(myList);
var res = reverse3(myList);
// console.log(res.data,res.nextNode )
// myList.deleteItemIterative(1);  
res.printLog();
