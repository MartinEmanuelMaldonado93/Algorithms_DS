type NodeType = NodeClass | null;

class NodeClass {
  val: number;
  next: NodeType;
  constructor(val: number = 0, next: NodeType = null) {
    this.val = val;
    this.next = next;
  }
}

function printNodes(head: NodeType): void {
  let temp: NodeType = head;
  const arr: number[] = [];

  while (temp) {
    arr.push(temp.val);
    temp = temp.next;
  }

  console.log(arr); // ' [ 3, 2, 5,...] '
}
// push at the back
function push(head: NodeType, val: number): number {
  if (!head) return -1;

  let temp = head;
  const newNode = new NodeClass(val);

  if (temp.next === null) {
    temp.next = newNode;
  } else {
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = new NodeClass(val);
  }
  return val;
}
function removeNthNode(nth: number, head: NodeClass) {
  if (!head.next) return head;

  let dummy = new NodeClass(undefined, head);
  let left: NodeType = dummy;
  let right: NodeType = head;
  let n = nth;

  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  while (right) {
    left = left!.next;
    right = right.next;
  }

  let next: NodeType = left!.next;

  left!.next = next!.next;

  return dummy.next; // exclude the first garbage element.
}
/**
 *  LeetCode problem
 * @param head : Listnode
 */
function reorderList1(head: NodeClass) {
  let List: NodeClass[] = [];
  let temp: NodeType = head;

  while (temp) {
    List.push(temp);
    temp = temp.next;
  }

  let first = List.shift();
  let head2 = new NodeClass(first!.val);

  while (List.length > 0) {
    let node2 = List.pop();
    push(head2, node2!.val);

    if (List.length == 0) break;

    let node = List.shift();
    push(head2, node!.val);

    if (List.length == 0) break;
  }
  printNodes(head2);
}

function reorderList(head: NodeClass) {
  if (!head) return;

  let slow: NodeType = head;
  let fast = head.next;
  // search the midle of the llist
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  let second = slow!.next;
  slow!.next = null; // must be null bc is the end of the first llist
  let prev: NodeType = null;
  // Reverse the second llist, * practice reverse llist
  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }
  second = prev; // prev is the new head
  // modifing the main list
  let first: NodeType = head;
  while (second) {
    let nextFirst: NodeType = first!.next;
    let nextSecond: NodeType = second.next;

    first!.next = second;
    second.next = nextFirst;

    first = nextFirst;
    second = nextSecond;
  }
  printNodes(head);
}

let head1 = new NodeClass(1, undefined);
push(head1, 2);
push(head1, 3);
push(head1, 4);
push(head1, 5);
printNodes(head1);

console.log("# removing [-2] index, (val : 4) ...");
printNodes(removeNthNode(2, head1));
console.log("# val 4 removed!");
console.log("# List reordered");
reorderList(head1);
printNodes(head1);
