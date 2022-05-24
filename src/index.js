import validator from './validator.js';



document.getElementById('go').addEventListener('click', function(event){
    event.preventDefault()
        document.getElementById('cardVerification').style.display='block';
        document.getElementById('ready').style.display='none'
    })
  

 document.getElementById('verificar').addEventListener('click', function(){
    let cardNumber = document.getElementById('card').value;
    let firstNumbers = cardNumber.split('');
    let digits = firstNumbers.reverse();
        
    document.getElementById('demo').innerHTML=digits;
    document.getElementById('demo1').innerHTML=pairNumbers
      })
      

console.log(validator);
