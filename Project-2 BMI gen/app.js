const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = document.querySelector('#Height').value;  /* ----> yha se jo value milega wo string data type ka hoga . to isko int me change krna hoga. */
    const heightFinal = parseInt(height);                    /* ----> "height" ko interger me convert kar diya . */

    // simillarly Weight k liye 
    const weight = document.querySelector('#Weight').value;  
    const weightFinal = parseInt(weight);
    
    const result1 = document.querySelector('#result1');
    const result2 = document.querySelector('#result2');

    if(heightFinal == '' || heightFinal < 0 || heightFinal == NaN){
        result1.innerHTML = `Please Give a valid Height ${heightFinal}`;
    }
    else if(weightFinal == '' || weightFinal < 0 || weightFinal == NaN){
        result1.innerHTML = `Please Give a valid Height ${weightFinal}`;
    }
    else{
        const bmi = (weightFinal / ((heightFinal*heightFinal) / 1000)).toFixed(2);
        // show result 
        result1.innerHTML = `<span>${bmi}</span>`


        if(bmi < 18.6){
            result2.innerHTML = `<span><br><br> You are Under Weight</span>`
        }
        else if(bmi > 18.6 && bmi <= 24.9){
            result2.innerHTML = `<span><br><br> You are in Normal Range</span>`
        }
        else if(bmi > 24.9){
            result2.innerHTML = `<span><br> You are in Over Weight</span>`
        }
    }
})