function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var mid = Math.floor(left + (right - left) / 2); // 0---9 4
        console.log(mid);
        if (arr[mid] === target)
            return mid;
        if (arr[mid] > target)
            right = mid - 1;
        else
            left = mid + 1;
    }
    return -1;
}
function recursiveBinSearch(arr, target, left, right) {
    if (left > right)
        return -1; // Invalid position of arr...
    var mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target)
        return mid;
    else if (target < arr[mid])
        return recursiveBinSearch(arr, target, left, mid - 1);
    else
        return recursiveBinSearch(arr, target, mid + 1, right);
}
var nums = [2, 7, 8, 9, 10, 13, 17, 19, 21];
console.log(binarySearch(nums, 7)); //1
console.log(binarySearch(nums, 19)); //7
console.log(binarySearch(nums, 15)); //-1
// Recursive way ... 
console.log(recursiveBinSearch(nums, 19, 0, nums.length - 1)); //7
