class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  addNode(n) {
    let newNode = new ListNode(n);
    if (this.next === null) {
      this.next = newNode;
      return;
    }
    let curr = this.next;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  addArray(arr = []) {
    for (let n of arr) {
      this.addNode(n);
    }
  }
  printNodes() {
    let arr = [];
    let curr = this.next;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }
}

let l1 = new ListNode();
l1.addArray([1, 2, 3]);
let l2 = new ListNode();
l2.addArray([2, 4, 5]);

function mergeTwoLists(a, b) {
  if (a === null) return b;
  if (b === null) return a;

  if (a.val < b.val) {
    // if a.next it's null, then the reminder of b is returned and
    // appended to a.next and return a, easy peasy lemon squeezy
    a.next = mergeTwoLists(a.next, b);
    return a;
  } else {
    b.next = mergeTwoLists(a, b.next);
    return b;
  }
}
function reverseList(head) {
  let curr = head.next;
  console.warn(curr);
  let prev = null;
  while (curr) {
    // console.log(curr.val);
    let next = curr.next;
    curr.next = prev; // wich is null
    prev = curr;
    curr = next;
  }
  return prev;
}

let res = mergeTwoLists(l1, l2);
res.printNodes();
reverseList(res);
res.printNodes();
