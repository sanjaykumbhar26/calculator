const display = document.getElementById('display');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');


operators.forEach(operator => {
    operator.addEventListener('click', function () {
        const operatorValue = operator.getAttribute('data-operator');
        display.textContent += ` ${operatorValue} `;
    });
});

numbers.forEach(number => {
    number.addEventListener('click', function () {
        const numberValue = number.getAttribute('data-number');
        display.textContent += numberValue;
    });
});

clearButton.addEventListener('click', function () {
    display.textContent = '';
});

equalButton.addEventListener('click', function () {
    const result = eval(display.textContent)
    display.textContent = result;
});