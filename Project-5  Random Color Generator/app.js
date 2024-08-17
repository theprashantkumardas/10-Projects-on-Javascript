console.log("lets start it");
let container = document.querySelector('.container');
let code = document.querySelector('.code');

let hexColor;
function randomColor(){
    const randHEX = '0123456789ABCDEF';
    hexColor = '#';
    // let randColorthPosition = Math.floor(Math.random() * 16);  here we cant define the random color code of 16 digit selector , 
    for(let i = 0; i < 6; i++){
        let randColorthPosition = Math.floor(Math.random() * 16);
        hexColor = hexColor + randHEX[randColorthPosition];
    }
    return hexColor;
}
console.log(randomColor());

let startBtn = document.querySelector('.startBtn');
let stopBtn = document.querySelector('.stopBtn');



let intervalID;
function startChangingColor(){
    function changeContainerColor(){
        container.style.backgroundColor = randomColor();
        console.log(hexColor)
        code.innerText = `${hexColor}`
    }
    intervalID = setInterval(changeContainerColor , 1000);
    
}

function stopChangingColor(){
    clearInterval(intervalID);
    intervalID = null;
}
//selecting the start button and apply 'startChangingColor' method by creating it;
startBtn.addEventListener('click' , startChangingColor) ;

//selecting the stop button and apply 'stopChangingColor' method by creating it;
stopBtn.addEventListener('click' , stopChangingColor) ;
