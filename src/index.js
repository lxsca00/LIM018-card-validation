import validator from './validator.js'; 

document.getElementById('goPay').addEventListener('click', function(){
    document.getElementById('payPage').style.display='block';
    document.getElementById('ready').style.display='none';
    document.querySelector('.brand').style.filter= 'blur(2px)';
    document.getElementById('myShoppingCart').style.display='none';
  })

document.getElementById('exit').addEventListener('click', function(){
  if (document.getElementById('card').style.display='block'){
    document.getElementById('payPage').style.display='none';
    document.getElementById('ready').style.display='block';
    document.querySelector('.brand').style.filter='none';
    document.getElementById('myShoppingCart').style.display='block'
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
    } else {
      document.getElementById('datos').innerHTML='Tu tarjeta no es válida...'
      document.getElementById('card').style.backgroundColor = '#F9D0CD'
    }
  
  document.getElementById('card').value=validator.maskify(creditCardNumber)
  })   
