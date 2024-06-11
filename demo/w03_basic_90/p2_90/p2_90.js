const C = document.querySelector('#btn-c');
const F = document.querySelector('#btn-f');
const inputNumber = document.querySelector('#input-number')
const output = document.querySelector('#current-calculation');
C.addEventListener('click', () => {
    const inputValue = parseFloat(inputNumber.value);
    const fahrenheit = ((inputValue * 9.0 / 5) + 32).toFixed(2); // 將計算結果存儲在 fahrenheit 變量中
    output.textContent = inputValue + ' C' + ' = ' + fahrenheit + ' F';
})

F.addEventListener('click', () => {
    const inputValue = parseFloat(inputNumber.value);
    const fahrenheit = ((inputValue - 32) * 5 / 9).toFixed(2); // 將計算結果存儲在 fahrenheit 變量中
    output.textContent = inputValue + ' F' + ' = ' + fahrenheit + ' C';

})