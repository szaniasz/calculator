const results = document.querySelector('#results');

const operators = document.querySelectorAll("[data-selection]");

let operator = operators.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        operator = selectionButton.dataset.selection;
        let result = operate(a, b, operator);
        results.textContent = ("Result: " + result);
});
});

let a = '';
let b = '';

function getVal() {
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
  }


const add = function(a, b) {
    return a + b;
  };
  
  const substract = function(a, b) {
    return a - b;
  };
  
  const multiply = function(a, b) {
    return a * b;
  };

  const divdie = function(a, b) {
    return a / b;
  };

  const selection = document.querySelectorAll('.selection');

    const operate = function(a, b, operator) {
      if (operator === 'add') {
          return add(a ,b);
      } else if (operator === 'substract') {
          return substract(a, b);
      } else if (operator === 'multiply') {
          return multiply(a, b);
      } else if (operator === 'divide') {
          return divdie(a, b);
      }
    };

    results.textContent = operate(a, b, operator)

