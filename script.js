const operatorBox = document.querySelector('.operators')
const digitsBox = document.querySelector('.digits')
const outputBox = document.querySelector('.output')

for (let i = 0; i <= 11; i++) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, "="]
    let digit = document.createElement('div')
    digit.classList.add('digit')
    digit.textContent = arr[i]
    digitsBox.appendChild(digit)
}

for (let i = 0; i <= 3; i++) {
    let arr = ['+', '-', '*', '/']
    let operator = document.createElement('div')
    operator .classList.add('operator')
    operator.textContent = arr[i]
    operatorBox.appendChild(operator)
}