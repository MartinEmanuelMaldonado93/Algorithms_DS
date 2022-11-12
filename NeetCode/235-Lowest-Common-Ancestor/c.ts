class TreeNode{
    val:number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor( val:number ){
        this.val = val;
        this.left = null;
        this.right = null;
    }  
};

let root  = new TreeNode(6);
let a = new TreeNode(8);
let b = new TreeNode(2);
root.right = a;
root.left  = b;
let c = new TreeNode(0);
let d = new TreeNode(4);
b.left = c;
b.right = d;
let e = new TreeNode(9);
let f = new TreeNode(7);
a.left = f;
a.right = e;
let g = new TreeNode(3);
let h = new TreeNode(5);
d.left = g;
h.right = h;  
function commonAncestor( root:TreeNode, p:TreeNode, q:TreeNode) {
    let curr:TreeNode|null = root;
    while(curr){
        if(p.val < root.val && q.val < root.val)
            curr = curr.left;
        else if( p.val > root.val && q.val > root.val)
            curr = curr.right;
        else
            return curr.val;
    }
};
let x = new TreeNode(2);
let y = new TreeNode(8);
console.log( commonAncestor(root, x, y));