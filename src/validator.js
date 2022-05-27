const validator = {
  isValid: function (creditCardNumber){
  let cardNumber = document.getElementById('card').value.split('');//Paso 1: Toma el número de tarjeta desde el input text y lo separa
  let digits = cardNumber.reverse(); // Paso 3: Invierte el orden del array, continuan siendo strings
  let cardPairNumbers = 0; //(Esta variable almacena la suma de los números de las posiciones pares luego de sumar los digitos de los >=10)
  let cardOodNumbers = 0; //(Esta variable almacena la suma de los números de las posiciones impares)
    
    //console.log(digits)
    for (let i= 1; i<digits.length;i=i+2){
        let doubleDigits = digits[i]*2 // Paso 4: Devuelve la multiplicación de números pares
        let pairNumbers
          if (doubleDigits>= 10){ //Paso 5: Suma los digitos de los números mayores a 10
            pairNumbers = doubleDigits.toString().split('').reduce(function(r,n){return parseInt(r)+parseInt(n)})
          } else {pairNumbers = doubleDigits}
        cardPairNumbers += pairNumbers //Paso 6: Suma de los números pares
      }
    //console.log(cardPairNumbers)
    for (let i=0;i<digits.length;i=i+2){ 
        cardOodNumbers += parseInt(digits[i]) //Paso 7: Suma de los números impares
    }
    let ifItsValid = (cardOodNumbers + cardPairNumbers)%10
    //console.log(cardOodNumbers)
   // console.log(ifItsValid)
    if (ifItsValid===0){
      return true
    }
  },

  maskify: function(creditCardNumber){
    creditCardNumber = document.getElementById('card').value
    function maskNumbers (num,mask){
      return (num).slice(0,-4).replace(/./g,mask)+(num).slice(-4)
    }
    return maskNumbers(creditCardNumber,'*')
  }
}



export default validator;
