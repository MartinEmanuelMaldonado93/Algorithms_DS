'use strict';
var Snake = /** @class */ (function () {
    function Snake() {
        this.snakeBody = [[4, 1], [4, 2], [4, 3], [4, 4] /* HEAD */];
        this.snakeBody2 = [];
    }
    Snake.prototype.direction = function (dirUser) {
        var delta = {
            up: [-1, 0],
            down: [1, 0],
            left: [0, -1],
            right: [0, 1]
        };
        this.move(delta[dirUser]);
    };
    Snake.prototype.ctorNewHead = function (coordenate) {
        var len = this.snakeBody.length;
        var currHead = this.snakeBody[len - 1];
        var currRow = currHead[0], currCol = currHead[1];
        var newRow = coordenate[0], newCol = coordenate[1];
        var newHead = [currRow + newRow, currCol + newCol];
        return newHead;
    };
    Snake.prototype.outOfBounds = function (newHead) {
        if (newHead[0] > 9) // row
            return 'rowDown';
        if (newHead[0] < 0)
            return 'rowUp';
        if (newHead[1] > 8) // col
            return 'colRight';
        if (newHead[1] < 0)
            return 'colLeft';
        return 'false';
    };
    Snake.prototype.move = function (coordenates) {
        if (coordenates === void 0) { coordenates = []; }
        var newHead = this.ctorNewHead(coordenates);
        // let reverseNewHead = [];
        var result = this.outOfBounds(newHead);
        if (result != 'false') {
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
        else {
            this.snakeBody.push(newHead);
            this.snakeBody.splice(0, 1);
        }
    };
    Snake.prototype.draw = function () {
        var grid = [];
        for (var i = 0; i < 10; i++) {
            var row = [];
            for (var j = 0; j < 10; j++)
                row.push(' ');
            grid.push(row);
        }
        this.snakeBody.forEach(function (pos) {
            var row = pos[0], col = pos[1];
            grid[row][col] = '0';
        });
        this.snakeBody2.forEach(function (pos) {
            var row = pos[0], col = pos[1];
            grid[row][col] = '0';
        });
        grid.forEach(function (row) { return console.log(row.join('|')); }); //spaces separated with single pipes 
    };
    Snake.prototype.play = function () {
        var _this = this;
        var stdin = process.stdin;
        stdin.setRawMode(true);
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data', function (keyPress) {
            switch (keyPress) {
                case 'w':
                    _this.direction('up');
                    break;
                case 's':
                    _this.direction('down');
                    break;
                case 'a':
                    _this.direction('left');
                    break;
                case 'd':
                    _this.direction('right');
                    break;
                case '\u0003':
                    process.exit();
                    break;
            }
            console.clear();
            _this.draw();
        });
    };
    return Snake;
}());
;
var game = new Snake();
game.draw();
console.log(" Comienza el juego ! ");
game.play();
