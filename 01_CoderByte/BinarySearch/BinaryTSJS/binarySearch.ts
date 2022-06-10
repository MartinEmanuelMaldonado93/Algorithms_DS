function binarySearch( arr:number[], target:number ) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){

        let mid = Math.floor(left + (right-left)/2);   

        if(arr[mid] === target) 
            return mid;
        if(arr[mid] > target)
            right = mid - 1;
        else
            left = mid + 1; 
    } 
    return -1;
}
function recursiveBinSearch(arr:number[],target:number,left:number,right:number) {
    if(left > right ) return -1;// Invalid position of arr...

    let mid = Math.floor(left + (right-left)/2);// avoid overflow
    
    if( arr[mid] === target ) 
        return mid;
    else if( target < arr[mid] )  
        return recursiveBinSearch(arr,target, left, mid-1); 
    else
        return recursiveBinSearch(arr,target, mid+1, right); 
}

let nums = [2,7,8,9,10,13,17];
console.log(binarySearch(nums, 7));//1
console.log(binarySearch(nums, 19));//7
console.log(binarySearch(nums, 15));//-1
// Recursive way ... 
console.log(recursiveBinSearch(nums,19,0,nums.length-1));//7