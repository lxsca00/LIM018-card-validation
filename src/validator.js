const validator = {
  isValid: function (creditCardNumber){
  let cardNumber = creditCardNumber.split('');//Paso 1: Toma el número de tarjeta y lo separa
  let digits = cardNumber.reverse(); // Paso 3: Invierte el orden del array, continuan siendo strings
  let cardPairNumbers = 0; //(Esta variable almacena la suma de los números de las posiciones pares luego de sumar los digitos de los >=10)
  let cardOodNumbers = 0; //(Esta variable almacena la suma de los números de las posiciones impares)

    for (let i= 1; i<digits.length;i=i+2){
        let doubleDigits = digits[i]*2 // Paso 4: Devuelve la multiplicación de números pares
        let pairNumbers
          if (doubleDigits>= 10){ //Paso 5: Suma los digitos de los números mayores a 10
            pairNumbers = doubleDigits.toString().split('').reduce(function(digit1,digit2){return parseInt(digit1)+parseInt(digit2)})
          } else {pairNumbers = doubleDigits}
        cardPairNumbers += pairNumbers //Paso 6: Suma de los números pares
      }

    for (let i=0;i<digits.length;i=i+2){ 
        cardOodNumbers += parseInt(digits[i]) //Paso 7: Suma de los números impares
    }
    let ifItsValid = (cardOodNumbers + cardPairNumbers)%10
    if (ifItsValid===0){
      return true
    } else {
      return false
    }
  },

  maskify: function hideNumbers (creditCardNumber){
    let toMask = creditCardNumber.split(''); //Paso 1: Toma el número de tarjeta y lo separa
    let hideNumbers =''
    for (let i=0;i<toMask.length-4;i++){
      hideNumbers += (toMask[i]='#') //Paso 2: Toma los números del array excepto los 4 últimos y los convierte a #
    }
    let visibleNumbers = creditCardNumber.slice(-4) //Paso 3: Toma los últimos 4 números
    return hideNumbers + visibleNumbers
  }
}



export default validator;
