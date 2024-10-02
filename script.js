let display = document.getElementById('display');
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;
        handleInput(value);
    });
});

// Adding keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if ((key >= '0' && key <= '9') || key === '.') {
        handleInput(key); // Handle number and decimal input
    } else if (key === 'Escape') {
        clear(); // Handle Escape key (clear)
    } else if (key === 'Backspace') {
        backspace(); // Handle Backspace key
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        handleInput(key); // Handle operator input
    } else if (key === 'Enter' || key === '=') {
        calculate(); // Handle Enter or = for calculation
    }
});

function handleInput(value) {
    if (value >= '0' && value <= '9' || value === '.') {
        handleNumber(value);
    } else if (value === 'AC') {
        clear();
    } else if (value === '←') {
        backspace();
    } else if (value === '=') {
        calculate();
    } else {
        handleOperator(value);
    }
}

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
