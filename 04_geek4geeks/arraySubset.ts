function isSubset( Set:Array<number>, SubSet:Array<number> ):string{
    Set.sort( (a, b) => a - b ); // o(n logn)

    for(const x of SubSet) {
        if( !Set.includes(x) ){
            return "No";
        }
    }

    return "Yes";
}

function isSubset2(arr1:Array<number>,arr2:Array<number>):boolean {
    let MySet = new Set([...arr1, ...arr2]);

    return arr1.length == MySet.size;
}

console.log( isSubset2([10, 5, 2, 23, 19],[19, 5, 2]) );
console.log(isSubset([10, 5, 2, 23, 19],[19, 5, 2])); // "Yes" 

// console.log(isSubset([ 12,59,988,56, 67,
//                       9998,578,552, 59,89,
//                       5998, 123,1132,595,15,
//                       16, 17, 18, 19, 20],
//                      [988, 56, 67, 578, 89,
//                       15, 16, 17, 18, 19])); //  "Yes" 

//two stack on array
/*void twoStacks :: push1(int x){
      if(top1 >= size) 
          return;  
      else   
        arr[++top1]=x;
      
  }*/
  //Function to push an integer into the stack2.
 /* void twoStacks ::push2(int x){
      if(top2<0)
          return;
      else 
         arr[--top2] = x; 
  }
     
  //Function to remove an element from top of the stack1.
  int twoStacks ::pop1(){ 
      if(top1<0)
         return -1;
      else 
         return arr[top1--];
  }
  
  //Function to remove an element from top of the stack2.
  int twoStacks :: pop2(){ 
      if(top2 >= size)
          return -1; 
      else
          return arr[top2++];  
  }*/