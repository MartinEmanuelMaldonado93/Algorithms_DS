class ListNod {
    val:number;
    next:ListNod;
    constructor(val:number, next:ListNod){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function print(head:ListNod){
    let temp = head;
    let arr = [];
    while(temp != null){
        arr.push( temp.val );
        temp = temp.next;
    }
    console.log(arr);
}
function push(head:ListNod, val:number){
    let nuNode = new ListNod(val,undefined);
    let temp = head;
    if(temp.next === null)
        temp.next = nuNode;
    else{

        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = new ListNod(val,undefined);
    }
}
function removeNthNode(nth:number, head:ListNod ) {
    if( head.next === null) return head ;
    let dummy = new ListNod(0, head );
    let left = dummy;
    let right = head;
    let n = nth;
    while( n>0 && right ){
        right = right.next;
        n--;
    }
    while(right){
        left = left.next;
        right = right.next;
    }
    let next = left.next;
    left.next = next.next; 
    return dummy.next;// exclude the first garbage element.  
}
let head1  = new ListNod(1, undefined ); 
push(head1, 2);
push(head1, 3);
push(head1, 4);
push(head1, 5);
print(head1); 
let removed  = removeNthNode( 2, head1);
print( removed );