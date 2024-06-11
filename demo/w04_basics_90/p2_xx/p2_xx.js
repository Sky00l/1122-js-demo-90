const userInput = document.querySelector('#input-number');
const btnC = document.querySelector('#btn-c');
const btnF = document.querySelector('#btn-f');

const results = document.querySelector('#result');
const currentCalOutput = document.querySelector('#current-calculation');
function getUserInput() {
  return parseFloat(userInput.value);
}

let c, f;

btnC.addEventListener('click', () => {
  c = getUserInput().toFixed(2);
  f = ((c * 9) / 5 + 32).toFixed(2);
  currentCalOutput.textContent = `${c} C = ${f} F`;
});

btnF.addEventListener('click', () => {
  f = getUserInput().toFixed(2);
  c = (((f - 32) * 5) / 9).toFixed(2);
  currentCalOutput.textContent = `${f} F = ${c} C`;
});

/*
let c, f;
c = Number(prompt("Enter a temperature in C: ")).toFixed(2);
f = ( c * 9 /5 + 32).toFixed(2);
const output = `${c} C = ${f} F`;
console.log(output);

const result = document.querySelector('.result');
result.textContent = output;

*/
