console.log("Let's get started");

const generateBtn = document.querySelector('.btn');
// console.log(generateBtn);
const inputText = document.querySelector('.inputText');
console.log(inputText);



let passWordRandom;
function generateRandomPassword (){
    const passwordChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=<>/?[]{}"
    passWordRandom = "";
    for(let i = 0; i<12; i++){
        let randomPosition = Math.floor(Math.random() * 84);  /* this randomPosition gives us number value */
        passWordRandom = passWordRandom + passwordChar[randomPosition]; /* passwordChar[koi num value] ==> koi random number k position m ja ja k bar bar (12th time tk qki i<12 hai) us passwordChar ka value ko utha k 'pasWordRandom' me add karega jab tak wo 12 length ka na ho jaye */
    }
    return passWordRandom;
}  
console.log(generateRandomPassword());   


function generatePASSWORD(){
    generateRandomPassword ();
    inputText.innerText = `${passWordRandom}`
    console.log(passWordRandom);

}                                

generateBtn.addEventListener('click' , generatePASSWORD)

