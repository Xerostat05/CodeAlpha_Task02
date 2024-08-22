const screen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let firstValue = '';
let secondValue = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const value = button.textContent;

    buttonAnimation(button); // Add animation

    if (action === 'clear') {
      currentInput = '';
      firstValue = '';
      secondValue = '';
      operator = '';
      screen.value = '';
    } else if (action === 'equals') {
      secondValue = currentInput;
      screen.value = calculate(firstValue, operator, secondValue);
      currentInput = '';
    } else if (action === 'operator') {
      operator = value;
      firstValue = currentInput;
      currentInput = '';
    } else if (action === 'number') {
      currentInput += value;
      screen.value = currentInput;
    }
  });
});

function calculate(first, operator, second) {
  switch (operator) {
    case '+':
      return parseFloat(first) + parseFloat(second);
    case '-':
      return parseFloat(first) - parseFloat(second);
    case '*':
      return parseFloat(first) * parseFloat(second);
    case '/':
      return parseFloat(first) / parseFloat(second);
    default:
      return '';
  }
}

function buttonAnimation(button) {
  button.classList.add('pressed');
  setTimeout(() => button.classList.remove('pressed'), 100);
}
