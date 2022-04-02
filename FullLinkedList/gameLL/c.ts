'use strict';  

class Snake{
    snakeBody:any;
    snakeBody2:any;
    constructor( ){
        this.snakeBody = [  [4,1],[4,2],[4,3],[4,4]/* HEAD */ ];
        this.snakeBody2 = [];
    }
    private direction(dirUser:any){
        const delta = {
            up: [-1,0],
            down: [1,0],
            left: [0,-1],
            right: [0,1]
        }
        this.move( delta[dirUser] );
    }
    private ctorNewHead(coordenate:any){
        let len = this.snakeBody.length;
        let currHead = this.snakeBody[ len-1 ]; 
        const [currRow, currCol ] = currHead;
        const [newRow, newCol ] = coordenate; 
        const newHead = [currRow + newRow , currCol + newCol];
        return newHead;
    }
    private outOfBounds(newHead:any){
        if( newHead[0]>9 ) // row
            return 'rowDown';
        if( newHead[0]<0 )
            return 'rowUp';

        if( newHead[1]>8 )// col
            return 'colRight';
        if( newHead[1]<0)
            return 'colLeft';

        return 'false'; 
    }
    private move( coordenates=[] ){
        let newHead = this.ctorNewHead(coordenates); 
        // let reverseNewHead = [];
        let result = this.outOfBounds(newHead);
        if(result != 'false'){
           // 'rowUp'
           //shrink curr body
           //grow head
        }

        // if(reverseNewHead.length>0){
        //     this.snakeBody.splice( len ,1);// pop the (head);   
        //     this.snakeBody2.push(currHead2);  
        // }
        // if(  reverseNewHead.length>0){
        //     this.snakeBody.splice( len ,1);
        //     this.snakeBody.splice(0,1);
        //     reverseNewHead = [ reverseNewHead[0], reverseNewHead[1]+1 ];
        //     this.snakeBody2.push( currHead2 );
        //    console.log(this.snakeBody2.length)
        // }
        else{
            this.snakeBody.push(newHead); 
            this.snakeBody.splice(0,1);  
        }
    }
    draw(){
        const grid = [];
        for (let i = 0; i < 10 ; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) 
                row.push(' ');

            grid.push(row);
        }
        this.snakeBody.forEach( (pos:any) => {
            const [row, col] = pos;
            grid[row][col] = '0';
        });
        this.snakeBody2.forEach( (pos:any) => {
            const [row, col] = pos;
            grid[row][col] = '0';
        });
        grid.forEach( row => console.log( row.join('|') ) );//spaces separated with single pipes 
    }
    play(){
        const stdin = process.stdin;
        stdin.setRawMode(true);
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data', (keyPress:string) => {
            switch(keyPress){
                case 'w': this.direction('up');
                    break;
                case 's': this.direction('down');
                    break;
                case 'a': this.direction('left');
                    break;
                case 'd': this.direction('right');
                    break;
                case '\u0003': process.exit();
                    break;  
                
                }
            console.clear();
            this.draw();
        });
    }

};

let game = new Snake(); 
game.draw();
console.log(" Comienza el juego ! ");
game.play();