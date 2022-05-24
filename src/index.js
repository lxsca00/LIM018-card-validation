import validator from './validator.js'; 

document.getElementById('go').addEventListener('click', function(){
    document.getElementById('cardVerification').style.display='block'
    document.getElementById('ready').style.display='none'
  })


/*let digits = document.getElementById('card').value;
let cardNumber = digits.split('');
let arrReverse = cardNumber.reverse();

document.getElementById('verificar').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('demo').innerHTML=arrReverse
})*/


  document.getElementById('verificar').addEventListener('click', function(){
    let cardNumber = document.getElementById('card').value;
    let firstNumbers = cardNumber.split('');
    let digits = firstNumbers.reverse();
    //let creditCardNumber = parseInt(digits)
    console.log(typeof digits[2])
    for (let i = 1; i<digits.length;i=i+2){
        let twice = digits[i]*2
        if (twice >= 10){

        } else {}
        console.log(typeof twice[0])
    }
    //document.getElementById('demo').innerHTML= digits
   // document.getElementById('demo1').innerHTML= typeof creditCardNumber
  })
  
      
console.log(validator);
