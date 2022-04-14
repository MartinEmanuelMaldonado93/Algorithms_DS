function decToBin(num:number) {
    if(num <= 0) return ''; 

    let rem = num % 2; 
    let divResult  = Math.floor(num/2);   
    return `${decToBin(divResult)}${rem}`;
}
// 100
console.log(decToBin(8));//1000
console.log(decToBin(9));//1001