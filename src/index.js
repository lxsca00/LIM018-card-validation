import validator from './validator.js'; 

document.getElementById('goPay').addEventListener('click', function(){
    document.getElementById('cardVerification').style.display='block';
    document.getElementById('ready').style.display='none';
    document.getElementById('brand').style.filter= 'blur(2px)';
    document.querySelector('.myShoppingCart').style.display='none';
  })

document.getElementById('exit').addEventListener('click', function(){
  if (document.getElementById('card').style.display='block'){
    document.getElementById('cardVerification').style.display='none';
    document.getElementById('ready').style.display='block';
    document.getElementById('brand').style.filter='none';
    document.querySelector('.myShoppingCart').style.display='block'
  }
})


document.getElementById('verificar').addEventListener('click', function(){ 
  let creditCardNumber = document.getElementById('card').value;
  if (creditCardNumber==''){
    return 
  } 

    if(validator.isValid(creditCardNumber)===true){
      document.getElementById('datos').innerHTML='¡Tarjeta validada!'
      document.getElementById('card').style.backgroundColor = '#E4F6BD'
      document.getElementById('tryAgain').style.visibility='hidden'
    } else {
      document.getElementById('datos').innerHTML='Tu tarjeta no es válida...'
      document.getElementById('card').style.backgroundColor = '#F9D0CD'
      document.getElementById('tryAgain').style.visibility='visible'
    }
  
  document.getElementById('card').value=validator.maskify(creditCardNumber)
  })   
