const $numbers = document.querySelectorAll('span:not(.operator)')
const $operators = document.querySelectorAll('.operator:not(#clear):not(#equals)')
const $equal = document.querySelector('#equals')
const $clear = document.querySelector('#clear')
const $screen = document.querySelector('#screen')
const allowedCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '/', '+', '-']

function startCalculator() {
  numbersToScreen()
  operatorsToScreen()
  calculationToScreen()
  clearScreen()
}

startCalculator()

function numbersToScreen() {
  $numbers.forEach($number => {
    $number.addEventListener('click', addNumberInteraction)
  })
}

function addNumberInteraction(event) {
  $screen.value += event.target.textContent
}

function operatorsToScreen() {
  $operators.forEach($operator => $operator.addEventListener('click', addOperatorInteraction))
}

function addOperatorInteraction(event) {
  switch (event.target.textContent) {
    case '+':
    case '-':
      $screen.value += event.target.textContent
      break;
    case 'x':
      $screen.value += '*'
      break; 
    case '÷':
      $screen.value += '/'
      break; 
  }
}

function calculationToScreen() {
  $equal.addEventListener('click', returnValue);
  document.addEventListener('keyup', event => { if (event.key === 'Enter') {
    returnValue()
  }})
}

function returnValue() {
  const calculation = $screen.value
  // if (allLegalCharacters(calculation)) {  
    const result = eval(calculation)
    if (result === Infinity || result === NaN) {
      $screen.value = 'Error'
    } else {
      $screen.value = result 
    }} 
//     else {
//       $screen.value = 'Error'
//     }
// }

function clearScreen() {
  $clear.addEventListener('click', () => $screen.value = '')
}

function allLegalCharacters(calculation) {
  console.log(calculation)
  calculation.split('').forEach( character => {
    console.log(character)
    if (allowedCharacters.find(character) != undefined) {
      return false
    }
  })
  return true
}