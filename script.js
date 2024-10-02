let display = document.getElementById('display');
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

        if (value >= '0' && value <= '9' || value === '.') {
            handleNumber(value);
        } else if (value === 'C') {
            clear();
        } else if (value === '←') {
            backspace();
        } else if (value === '=') {
            calculate();
        } else {
            handleOperator(value);
        }
    });
});

function handleNumber(num) {
    if (operator === '') {
        firstNumber += num;
        display.innerText = firstNumber;
    } else {
        secondNumber += num;
        display.innerText = secondNumber;
    }
}

function handleOperator(op) {
    if (firstNumber !== '') {
        operator = op;
    }
}

function calculate() {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num2 !== 0 ? num1 / num2 : 'Error';
    }

    display.innerText = result;
    firstNumber = result.toString();
    secondNumber = '';
    operator = '';
}

function clear() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    display.innerText = '0';
}

function backspace() {
    if (operator === '') {
        firstNumber = firstNumber.slice(0, -1);
        display.innerText = firstNumber || '0';
    } else {
        secondNumber = secondNumber.slice(0, -1);
        display.innerText = secondNumber || '0';
    }
}
