class ListNode {
    val:number;
    next:ListNode | null;

    constructor( val?:number, next?:ListNode ){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function printNode( head:ListNode ):void {
    let temp:ListNode|null = head;
    const arr:Array<number> = [];

    while(temp != null){
        arr.push( temp.val );
        temp = temp.next;
    }

    console.log( arr );// ' [ 3, 2, 5,... etc] '
} 

function push( head:ListNode, val:number ):void {
    if(!head) return; // if it's null undefined or something falsy

    let temp:ListNode = head;
    const newNode:ListNode = new ListNode(val , );

    if(temp.next === null){
        temp.next = newNode;
    }
    else{ 
        while(temp.next !== null){
            temp = temp.next;
        }
        temp.next = new ListNode(val , );
    }
}

function removeNthNode( nth:number, head:ListNode ) {
    if( !head.next ) return head ;

    let dummy = new ListNode( undefined , head );
    let left :ListNode | null = dummy;
    let right:ListNode | null = head;
    let n = nth;

    while( n > 0 && right ){
        right = right.next;
        n--;
    }

    while(right){
        left = left!.next;
        right = right.next;
    }

    let next = left!.next;

    left!.next = next!.next; 

    return dummy.next;// exclude the first garbage element.  
}
/**
 *  LeetCode problem
 * @param head : Listnode
 */
function reorderList1( head:ListNode ){ 
    let List:Array<ListNode> = [];
    let temp:ListNode | null = head;

    while( temp != null){
        List.push( temp );
        temp = temp.next;
    } 

    let first = List.shift();
    let head2 = new ListNode( first?.val );

    while( List.length > 0 ){ 
        let node2 = List.pop();
        push(head2, node2!.val);

        if(List.length ==0 ) break;

        let node = List.shift();
        push(head2, node!.val );

        if(List.length ==0 ) break;
    }
    printNode(head2);
}

function reorderList( head:ListNode ){ 
    if( !head ) return ;

    let slow:ListNode | null = head;
    let fast = head.next; 
    // search the midle of the llist
    while( fast && fast.next ){
        slow = slow!.next;
        fast = fast.next.next; 
    }
    let second = slow!.next; 
    slow!.next = null;// must be null bc is the end of the first llist
    let prev:ListNode | null =  null;
    // Reverse the second llist, * practice reverse llist
    while( second ){
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }
    second = prev;// prev is the new head 
    // modifing the main list
    let first:ListNode | null = head;
    while( second ){
        let nextFirst  = first!.next;
        let nextSecond = second.next;

        first!.next = second;
        second.next = nextFirst;

        first  = nextFirst;
        second = nextSecond;
    }
    printNode(head);
}

let head1  = new ListNode(1, undefined ); 
push(head1, 2);
push(head1, 3);
push(head1, 4);
push(head1, 5);
printNode(head1); 

console.log( "# removing -2 index, (val : 4)" );
let removed  = removeNthNode( 2, head1);
printNode( removed! );//  '!' its for declar never null 

reorderList(head1);
// printNode( head1 );