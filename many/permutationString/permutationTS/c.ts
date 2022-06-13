// Xavier elon 
class Solution{
    public calculate( str:string, left:number, right:number){
        if(left == right)
            console.log(str);
        else{
            for (let i=left; i<=right; i++) {
                let swapped = this.swap(str, left, i);
                this.calculate(swapped, left+1, right)
            }
        }
    }
    private swap(str:string, i:number, j:number){
        let temp: string;
        let arr = str.split('');

        temp = arr[i]; 
        arr[i] = arr[j];
        arr[j] = temp;

        return arr.join('');
    }
}

let s:string = "ABC"; 
let permutation:Solution = new Solution;
permutation.calculate(s, 0, s.length-1);
