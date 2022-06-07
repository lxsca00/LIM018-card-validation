import validator from './validator.js'; 

document.getElementById('goPay').addEventListener('click', function(){
    document.getElementById('cardVerification').style.display='block';
    document.getElementById('ready').style.display='none';
    document.querySelector('.brand').style.filter= 'blur(2px)';
    document.getElementById('myShoppingCart').style.display='none';
  })

document.getElementById('exit').addEventListener('click', function(){
    document.getElementById('cardVerification').style.display='none';
    document.getElementById('ready').style.display='block';
    document.querySelector('.brand').style.filter='none';
    document.getElementById('myShoppingCart').style.display='block'
  })


document.getElementById('verificar').addEventListener('click', function(){ 
  let creditCardNumber = document.getElementById('card').value;
  if (creditCardNumber==''){
    return 
  } 

    if(validator.isValid(creditCardNumber)===true){
      document.getElementById('datos').innerHTML='¡Tarjeta validada!'
      document.getElementById('card').style.backgroundColor = '#E4F6BD'
    } else {
      document.getElementById('datos').innerHTML='Tu tarjeta no es válida...'
      document.getElementById('card').style.backgroundColor = '#F9D0CD'
      document.getElementById('reset').style.visibility='visible'
    }

document.getElementById('reset').addEventListener('click', function(){
  document.getElementById('datos').innerHTML= 'Ingresa tus datos';
  document.getElementById('card').style.backgroundColor = '#FFFFFF';
  document.getElementById('reset').style.visibility='hidden'
})
  
  document.getElementById('card').value=validator.maskify(creditCardNumber)
  })   
