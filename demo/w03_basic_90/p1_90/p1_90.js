let c, f;
c = Number(prompt('Enter a Temperature in c')).toFixed(2);
console.log('c', c);
f = (c * 9.0 / 5 + 32).toFixed(2);
console.log('f', f);
const output = `${c} C = ${f} F`;
console.log(output);

const result = document.querySelector('.result');
result.textContent = output;