class Solution{
    constructor( ){ }
    func( target:number,  matrix:number[][] ){
        let midrow, midcol;
        let trow = 0;
        let brow = matrix.length-1;//3
        let lcol = 0;
        let rcol = matrix[0].length-1;

        midrow = Math.floor(brow/2);
        midcol = Math.floor(rcol/2);

        if( matrix[midrow][midcol] == target ) return true;

        while(trow<brow){ 
            if(matrix[midrow][0]>target){
                trow = midrow;
            }
        }


    }
};

let s = new Solution();

console.log( s.func(5, [[1,3,5,7],
                    [10,11,16,20],
                    [23,30,34,60]]));