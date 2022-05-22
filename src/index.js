import validator from './validator.js';

let creditCardNumber = '5362590285774569'


document.getElementById('go').addEventListener('click', function(event){
    event.preventDefault()
        document.getElementById('cardVerification').style.display='block'
    })


/*document.getElementById('verificar').addEventListener('click', function(event){
   event.preventDefault()
    document.getElementById('datos').innerHTML ='¡Tarjeta validada!'
})*/
   

console.log(validator);
