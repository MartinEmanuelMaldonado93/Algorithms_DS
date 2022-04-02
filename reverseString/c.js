function reverseStr(str) {
    if(str.length === 0) return [];
    let lastChar = str[str.length-1];
    let substring = str.substr(0,str.length-1);

    let result = reverseStr(substring);//[n] 
    return [lastChar,...result].join(''); 
}
function reverseSimple(str) {
    if( str.length == 0) return '';
     
    return reverseSimple( str.substr(1) ) + str[0];
}
let str = "Martin";
// console.log(str,reverseStr(str));// n,itraM
console.log( reverseSimple(str) );
// let str = "martin "

// let substring = str.substr(0,str.length-2);
// console.log(substring)