/*-------------------------------- Constants --------------------------------*/

const ADD_OPERATOR = "+"
const SUBTRACT_OPERATOR = "-"
const MULTIPLY_OPERATOR = "*"
const DIVIDE_OPERATOR = "/"
const CLEAR = "C"
const EQUALS = "="

/*-------------------------------- Variables --------------------------------*/

let currentOperand = ""
let previousOperand = ""
let operator = ""
/*------------------------ Cached Element References ------------------------*/

const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".button")
/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent

    if (button.classList.contains("number")) {
      appendNumber(value)
    } else if (button.classList.contains("operator")) {
      handleOperator(value)
    } else if (button.classList.contains("equals")) {
      calculate()
    }
  })
})

/*-------------------------------- Functions --------------------------------*/

function appendNumber(number) {
  currentOperand += number
  display.textContent = currentOperand
}

function handleOperator(op) {
  if (currentOperand === "") return
  operator = op
  previousOperand = currentOperand
  currentOperand = ""
}

function calculate() {
  const prev = parseFloat(previousOperand)
  const curr = parseFloat(currentOperand)

  if (isNaN(prev) || isNaN(curr)) return

  let result
  switch (operator) {
    case ADD_OPERATOR:
      result = prev + curr
      break
    case SUBTRACT_OPERATOR:
      result = prev - curr
      break
    case MULTIPLY_OPERATOR:
      result = prev * curr
      break
    case DIVIDE_OPERATOR:
      result = prev / curr
      break
    default:
      return
  }

  display.textContent = result
  currentOperand = result.toString()
  previousOperand = ""
  operator = ""
}

function clearDisplay() {
  currentOperand = ""
  previousOperand = ""
  operator = ""
  display.textContent = ""
}
