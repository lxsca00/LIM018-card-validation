import validator from './validator.js'; 

document.getElementById('go').addEventListener('click', function(){
    document.getElementById('cardVerification').style.display='block'
    document.getElementById('ready').style.display='none'
  })


document.getElementById('verificar').addEventListener('click', function(){
    let cardNumber = document.getElementById('card').value; //Paso 1: Toma el número de tarjeta desde el input text
    let firstNumbers = cardNumber.split(''); //Paso 2: Separa el número el un array de strings
    let digits = firstNumbers.reverse(); // Paso 3: Invierte el orden del array, continuan siendo strings
    let cardPairNumbers = 0; //(Esta variable almacena la suma de los números de las posiciones pares luego de sumar los digitos de los >=10)
    let cardOodNumbers = 0; //(Esta variable almacena la suma de los números de las posiciones impares)
    
    console.log(digits)
    for (let i= 1; i<digits.length;i=i+2){
        let doubleDigits = digits[i]*2 // Paso 4: Devuelve la multiplicación de números pares
        let pairNumbers
          if (doubleDigits>= 10){ //Paso 5: Suma los digitos de los números mayores a 10
            pairNumbers = doubleDigits.toString().split('').reduce(function(r,n){return parseInt(r)+parseInt(n)})
          } else {pairNumbers = doubleDigits}
        cardPairNumbers += pairNumbers //Paso 6: Suma de los números pares
      }
    console.log(cardPairNumbers)
    for (let i=0;i<digits.length;i=i+2){ 
        cardOodNumbers += parseInt(digits[i]) //Paso 7: Suma de los números impares
    }
    let ifItsValid = (cardOodNumbers + cardPairNumbers)%10
    console.log(cardOodNumbers)
    console.log(ifItsValid)
    if(ifItsValid===0){
      document.getElementById('datos').innerHTML='Tarjeta válida'
      document.getElementById('card').style.backgroundColor = '#E4F6BD'
    } else {
      document.getElementById('datos').innerHTML='Tarjeta inválida'
      document.getElementById('card').style.backgroundColor = '#F9D0CD'
    }
    
  })   
  
      
console.log(validator);
