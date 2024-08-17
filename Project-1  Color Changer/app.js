const buttons = document.querySelectorAll('.button');
console.log(buttons);

const bodyvar = document.querySelector('body');
console.log(bodyvar);

buttons.forEach(function(buttonpasskia){
    console.log(buttonpasskia);
    buttonpasskia.addEventListener('click' , function(e){
            console.log(e);
            console.log(e.target);
            if(e.target.id ==="grey"){
                    bodyvar.style.backgroundColor = "grey";
            }
            if(e.target.id ==="white"){
                    bodyvar.style.backgroundColor = "white";
            }
            if(e.target.id ==="blue"){
                    bodyvar.style.backgroundColor = "blue";
            }
            if(e.target.id ==="yellow"){
                    bodyvar.style.backgroundColor = "yellow";
            }
    })
})