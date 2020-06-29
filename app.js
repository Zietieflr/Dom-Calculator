const $numbers = document.querySelectorAll('span:not(.operator)')
const $operators = document.querySelectorAll('.operator:not(#clear):not(#equals)')
const $equal = document.querySelector('#equals')
const $clear = document.querySelector('#clear')
const $screen = document.querySelector('#screen')

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
  if (true) {  
    const result = Function(`"use strict"; return ${$screen.value}`)
    if (result === Infinity || result === NaN) {
      $screen.value = 'Error'
    } else {
      $screen.value = result 
    }} else {
      $screen.value = 'Error'
    }
}

function clearScreen() {
  $clear.addEventListener('click', () => $screen.value = '')
}
