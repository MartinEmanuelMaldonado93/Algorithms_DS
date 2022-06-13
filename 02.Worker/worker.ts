
self.onmessage = function(message:MessageEvent<string>) {
    let sum = 0;
    for(let i=0; i<10_000_000_000;++i)
        sum += i; 
    let result_str = `The total sum is : ${sum}`;
    postMessage(result_str);
}
