const userInput = document.querySelector('#input-number');
const currentCalculationOutput = document.querySelector('#current-calculation');
const currentResultOutput = document.querySelector('#current-result');

const addBtn = document.querySelector('#btn-add');
const subtractBtn = document.querySelector('#btn-subtract');
const multiplyBtn = document.querySelector('#btn-multiply');
const divideBtn = document.querySelector('#btn-divide');

console.log('userInput', userInput);

console.log('currentCalculationOutput', currentCalculationOutput);
console.log('currentResultOutput', currentResultOutput);

// console.log('addBtn', addBtn);
// console.log('subtractBtn', subtractBtn);
// console.log('multiplyBtn', currentResult);
// console.log('divideBtn', divideBtn);

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function outputResult(result, text) {
  currentCalculationOutput.textContent = text;
  currentResultOutput.textContent = result;
}

function add() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  //console.log(operand1, operand2);
  currentResult = operand1 + operand2;
  const calText = `${operand1} + ${operand2}`;
  console.log(`${operand1} + ${operand2} = ${currentResult}`);
  outputResult(currentResult, calText);
}

function subtract() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  //console.log(operand1, operand2);
  currentResult = operand1 - operand2;
  const calText = `${operand1} - ${operand2}`;
  console.log(`${operand1} - ${operand2} = ${currentResult}`);
  outputResult(currentResult, calText);
}

function multiply() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  //console.log(operand1, operand2);
  currentResult = operand1 * operand2;
  const calText = `${operand1} * ${operand2}`;
  console.log(`${operand1} * ${operand2} = ${currentResult}`);
  outputResult(currentResult, calText);
}

function divide() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  if (operand2 === 0) alert('cannot divide by 0');
  else {
    //console.log(operand1, operand2);
    currentResult = operand1 / operand2;
    const calText = `${operand1} / ${operand2}`;
    console.log(`${operand1} / ${operand2} = ${currentResult}`);
    outputResult(currentResult, calText);
  }
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
