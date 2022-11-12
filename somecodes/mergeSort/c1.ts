'use strict';

class Solution{
    constructor( ){ }
    mergeSort(data:number[]){
        return this.wrapMergeSort( data, 0, data.length-1 );
    }
    wrapMergeSort( data:number[], start:number, end:number ){
        if( start < end ){
            let mid = Math.floor( (end + start)/2 );
            this.wrapMergeSort(data, start, mid);
            this.wrapMergeSort(data, mid+1, end);
            this.merge(data, start, mid, end);
        }
        return data;
    }
    // Recives an array cuted in main call 
    merge(data:number[], start:number, mid:number, end:number){
        let temp:number[] = new Array( end-start+1 );//size of data , 
        let i = start, j = mid + 1, k = 0; 

        while(i <= mid && j <= end){ // sea algo lógico hasta la mitad 
            if( data[i] <= data[j] ){ // Si esta correctamente ordenado 
                temp[k] = data[i];// Me llevo i 
                i++; k++;
            }else{
                temp[k] = data[j];//sino me llevo el medio 
                k++; j++;
            }
        }
        while(i <= mid){ // remaining 
            temp[k] = data[i];
            k++; i++;
        }
        while(j <= end){
            temp[k] = data[j];
            k++; j++;
        }
        for (let i = start; i <= end; i++) {
              data[i] = temp[i - start];
        }
    }
};

let s = new Solution();
let n = [5,4,1,10,9];

console.log( s.mergeSort(n));
console.log();