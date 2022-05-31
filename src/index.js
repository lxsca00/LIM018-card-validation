import validator from './validator.js'; 

document.getElementById('go').addEventListener('click', function(){
    document.getElementById('cardVerification').style.display='block'
    document.getElementById('ready').style.display='none'
    document.getElementById('brand').style.filter= 'blur(2px)'
  })




document.getElementById('verificar').addEventListener('click', function(){ 
  let creditCardNumber = document.getElementById('card').value;
  if (creditCardNumber==''){
    return 
  } 
  //console.log(creditCardNumber)
    if(validator.isValid(creditCardNumber)===true){
      document.getElementById('datos').innerHTML='¡Tarjeta validada!'
      document.getElementById('card').style.backgroundColor = '#E4F6BD'
    } else {
      document.getElementById('datos').innerHTML='Tarjeta inválida...'
      document.getElementById('card').style.backgroundColor = '#F9D0CD'
    }
  //console.log(validator.maskify(creditCardNumber))
  
  document.getElementById('card').value=validator.maskify(creditCardNumber)
  })   

  
      
//console.log(validator);
