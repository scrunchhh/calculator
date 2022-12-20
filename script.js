const container = document.querySelector('.container')
const operatorBox = document.querySelector('.operators')
const digitsBox = document.querySelector('.digits')
const outputBox = document.querySelector('.output')

function onClick(e) {
    //clear string on click after getting result unless its an operator
    if (typeof(calcList) == 'number' 
    && e.target.textContent != ' / ' 
    && e.target.textContent != ' x ' 
    && e.target.textContent != ' + ' 
    && e.target.textContent != ' ^ ' 
    && e.target.textContent != ' - ') {
        calcList = ''
    }
    //on equals click, run the calculator on the string input
    if (e.target.textContent == ' =') {
        
        //container.classList.add('rotated')// SPINS ON EQUALS SIGN

        calcSplit = calcList.split(' ')
        //run code until one final number remains
        while (calcSplit.length != 1) {
            if (calcSplit.includes('^')) {
                //operate on both numbers around an operator, then remove them
                //leaving only the result
                for (let i = 0; i <= calcSplit.length; i++) {
                    if (calcSplit[i] == '^') {
                        calcSplit[i] = (+calcSplit[i - 1]) ** +calcSplit[i + 1]
                        calcSplit.splice(i - 1, 1)
                        calcSplit.splice(i, 1)
                    }
                }
            }
            if (calcSplit.includes('/')) {
                for (let i = 0; i <= calcSplit.length; i++) {
                    if (calcSplit[i] == '/') {
                        calcSplit[i] = +calcSplit[i - 1] / +calScSplit[i + 1]
                        calcSplit.splice(i - 1, 1)
                        calcSplit.splice(i, 1)
                    }
                }
            }
            if (calcSplit.includes('x')) {
                for (let i = 0; i <= calcSplit.length; i++) {
                    if (calcSplit[i] == 'x') {
                        calcSplit[i] = +calcSplit[i - 1] * +calcSplit[i + 1]
                        calcSplit.splice(i - 1, 1)
                        calcSplit.splice(i, 1)
                    }
                }
            }
            if (calcSplit.includes('+')) {
                for (let i = 0; i <= calcSplit.length; i++) {
                    if (calcSplit[i] == '+') {
                        calcSplit[i] = +calcSplit[i - 1] + +calcSplit[i + 1]
                        calcSplit.splice(i - 1, 1)
                        calcSplit.splice(i, 1)
                    }
                }
            }
            if (calcSplit.includes('-')) {
                for (let i = 0; i <= calcSplit.length; i++) {
                    if (calcSplit[i] == '-') {
                        calcSplit[i] = +calcSplit[i - 1] - +calcSplit[i + 1]
                        calcSplit.splice(i - 1, 1)
                        calcSplit.splice(i, 1)
                    }
                }
            }
        }
        calcList = calcSplit[0]
    } else if (e.target.textContent == 'C') {
        calcList = ''
    } else if (e.target.textContent == 'neg') {
        calcList += '-'
    } else if (e.target.textContent == 'del') {
        if (calcList[calcList.length - 1] == ' ') {
            calcList = calcList.slice(0, -3)
        } else {
            calcList = calcList.slice(0, -1)
        }
        
    } else {
        //add input to the string
        calcList += e.target.textContent
    }
    outputBox.textContent = `${calcList}`
}

//add digits to digitBox
for (let i = 0; i <= 15; i++) {
    let arr = [1, 2, 3, '.', 4, 5, 6, ' ^ ', 7, 8, 9, 'neg', 'C', 0, " =", 'del']
    let digit = document.createElement('button')
    digit.classList.add('digit')
    digit.textContent = arr[i]
    digit.addEventListener('click', onClick)
    digitsBox.appendChild(digit)
}

//add operators to operatorBox
for (let i = 0; i <= 3; i++) {
    let arr = [' + ', ' - ', ' x ', ' / ']
    let operator = document.createElement('button')
    operator .classList.add('operator')
    operator.textContent = arr[i]
    operator.addEventListener('click', onClick)
    operatorBox.appendChild(operator)
}

let calcList = ''