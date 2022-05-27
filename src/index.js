import validator from './validator.js'; 

document.getElementById('go').addEventListener('click', function(){
    document.getElementById('cardVerification').style.display='block'
    document.getElementById('ready').style.display='none'
  })




document.getElementById('verificar').addEventListener('click', function(){ 
  let creditCardNumber = document.getElementById('card').value;
  //console.log(creditCardNumber)
    if(validator.isValid(creditCardNumber)===true){
      document.getElementById('datos').innerHTML='Tarjeta válida'
      document.getElementById('card').style.backgroundColor = '#E4F6BD'
    } else {
      document.getElementById('datos').innerHTML='Tajeta inválida'
      document.getElementById('card').style.backgroundColor = '#F9D0CD'
    }
   document.getElementById('demo').innerHTML= validator.maskify(creditCardNumber) 
  })   
  
      
console.log(validator);
