const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

let currentOperand = '';
let previousOperand = '';
let operation = undefined;

const operate = () => {
  let compute
  if(!previousOperand || !currentOperand) {
  return
  }
  const previous = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if(isNaN(previous) || isNaN(current)){
    return;
  }
  switch(operation) {
    case '+':
      compute = previous + current;
      break
    case '-':
      compute = previous - current;
      break
    case 'x':
      compute = previous * current;
      break
    case '÷':
      if(current === 0) {
        previousOperand = ''
        operation = undefined
        currentOperand = "czy ty masz boga w sercu człowieku?"
      } else {
      compute = previous / current;
      break}
    default: 
     return
  }
  currentOperand = compute;
  operation = undefined;
  previousOperand = '';
}

const chooseOperation = (operator) => {
  
  if(currentOperand === '' || currentOperand === "czy ty masz boga w sercu człowieku?" || currentOperand === "szanujmy się") {
    return
  }
  if(previousOperand !== ''){
    operate()
  }
  operation = operator;
  previousOperand = currentOperand
  currentOperand = ''
}
const updateOperand = () => {
  currentOperandTextElement.innerText = currentOperand;
  if(operation !== undefined) {
    previousOperandTextElement.innerText = previousOperand + ' ' + operation;
  } else {
    previousOperandTextElement.innerText = '';
  }

}

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      chooseOperation(button.innerText);
      updateOperand();
    })
  })

numberButtons.forEach((number) => {
  number.addEventListener('click', () => {
    if(currentOperand === "czy ty masz boga w sercu człowieku?" || currentOperand === "szanujmy się") {
      return
    }
    if(number.innerText === ".") {
      if(currentOperand.includes('.')) {
        return;
      } 
    }
    appendNumber(number.innerText)
    updateOperand();
  })
})

const appendNumber = (number) => {
  currentOperand = currentOperand.toString() + number.toString();
}
allClearButton.addEventListener('click', () => {
  previousOperand = '';
  currentOperand = '';
  operation = undefined
  updateOperand();
})

deleteButton.addEventListener('click', () => {
 currentOperand = currentOperand.slice(0, -1);
 updateOperand();
})

equalsButton.addEventListener('click', () => {
  if(previousOperand === '' || currentOperand === '') {
    currentOperand = 'szanujmy się'
  }
  operate();
  updateOperand();
})