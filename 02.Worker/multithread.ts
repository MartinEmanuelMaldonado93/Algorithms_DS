const sumButton = document.getElementById('sumButton');
const bgButton = document.getElementById('bgButton');
const divResult = document.getElementById('divResult');
const myWorker = new Worker('worker.js');

sumButton!.addEventListener('click', event =>{
    myWorker.postMessage('hello');
});
myWorker.onmessage = message =>{
    divResult!.innerHTML = message.data;
}
bgButton!.addEventListener('click',event=>{
    if(document.body.style.background !== 'green')
        document.body.style.background = 'green';
    else
        document.body.style.background = 'black';
});