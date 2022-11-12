class ListNode{
    val:number|string;
    next:null|ListNode;
    constructor(val:number){
        this.val = val;
        this.next = null;
    }
}
function push(head:ListNode, val:number){
    let nuNode = new ListNode(val);
    let temp = head;
    if(temp.next === null)
        temp.next = nuNode;
    else{ 
        while(temp.next != null)
            temp = temp.next;
        
        temp.next = new ListNode(val);
    }
}
function print(head:ListNode){
    let temp = head;
    let arr = [];
    while(temp != null){
        arr.push( temp.val );
        temp = temp.next;
    }
    console.log(arr);
}
function reorderList1( head:ListNode ){ 
    let List:ListNode[] = [];
    let temp = head;
    while( temp != null){
        List.push( temp );
        temp = temp.next;
    } 
    let first = List.shift();
    let head2 = new ListNode(first!.val);
    while( List.length > 0 ){ 
        let node2 = List.pop();
        push(head2, node2!.val);
        if(List.length ==0 )
            break;
        let node = List.shift();
        push(head2, node!.val );
        if(List.length ==0 )
            break;
    }
    print(head2);
}
function reorderList( head:ListNode ){ 
    let slow = head;
    let fast = head.next; 
    // search the midle of the llist
    while( fast && fast.next ){
        slow = slow.next;
        fast = fast.next.next; 
    }
    let second = slow.next; 
    slow.next = null;// must be null bc is the end of the first llist
    let prev =  null;
    // Reverse the second llist, * practice reverse llist
    while( second ){
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }
    second = prev;// prev is the new head 
    // modifing the main list
    let first = head;
    while( second ){
        let nextFirst  = first.next;
        let nextSecond = second.next;

        first.next = second;
        second.next = nextFirst;

        first  = nextFirst;
        second = nextSecond;
    }
    print(head);
}
let head = new ListNode(1); 
push(head, 2);
push(head, 3);
push(head, 4);
push(head, 5);

// let head = new ListNode(1); 
// push(head, 2);
// push(head, 3);
// push(head, 4);
print(head);
reorderList(head); 