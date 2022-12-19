const operatorBox = document.querySelector('.operators')
const digitsBox = document.querySelector('.digits')
const outputBox = document.querySelector('.output')

function onClick(e) {
    console.log(typeof(calcList))
    //clear string on click after getting result unless its an operator
    if (typeof(calcList) == 'number' 
    && e.target.textContent != ' / ' 
    && e.target.textContent != ' * ' 
    && e.target.textContent != ' + ' 
    && e.target.textContent != ' - ') {
        calcList = ''
    }
    //add input to the string
    calcList += e.target.textContent
    console.log(calcList)
    //on equals click, run the calculator on the string input
    if (e.target.textContent == ' =') {
        calcSplit = calcList.split(' ')
        calcSplit.pop()
        console.log(calcSplit)
        //run code until one final number remains
        while (calcSplit.length != 1) {
            if (calcSplit.includes('/')) {
                //operate on both numbers around an operator, then remove them
                //leaving only the result
                for (let i = 0; i <= calcSplit.length; i++) {
                    if (calcSplit[i] == '/') {
                        calcSplit[i] = +calcSplit[i - 1] / +calcSplit[i + 1]
                        calcSplit.splice(i - 1, 1)
                        calcSplit.splice(i, 1)
                        console.log(calcSplit)
                    }
                }
            }
            if (calcSplit.includes('*')) {
                for (let i = 0; i <= calcSplit.length; i++) {
                    if (calcSplit[i] == '*') {
                        calcSplit[i] = +calcSplit[i - 1] * +calcSplit[i + 1]
                        calcSplit.splice(i - 1, 1)
                        calcSplit.splice(i, 1)
                        console.log(calcSplit)
                    }
                }
            }
            if (calcSplit.includes('+')) {
                for (let i = 0; i <= calcSplit.length; i++) {
                    if (calcSplit[i] == '+') {
                        calcSplit[i] = +calcSplit[i - 1] + +calcSplit[i + 1]
                        calcSplit.splice(i - 1, 1)
                        calcSplit.splice(i, 1)
                        console.log(calcSplit)
                    }
                }
            }
            if (calcSplit.includes('-')) {
                for (let i = 0; i <= calcSplit.length; i++) {
                    if (calcSplit[i] == '-') {
                        calcSplit[i] = +calcSplit[i - 1] - +calcSplit[i + 1]
                        calcSplit.splice(i - 1, 1)
                        calcSplit.splice(i, 1)
                        console.log(calcSplit)
                    }
                }
            }
            
        }
        calcList = calcSplit[0]
        console.log(calcList)
    } else if (e.target.textContent == 'C') {
        calcList = ''
    }
}

//add digits to digitBox
for (let i = 0; i <= 11; i++) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, " ="]
    let digit = document.createElement('button')
    digit.classList.add('digit')
    digit.textContent = arr[i]
    digit.addEventListener('click', onClick)
    digitsBox.appendChild(digit)
}

//add operators to operatorBox
for (let i = 0; i <= 3; i++) {
    let arr = [' + ', ' - ', ' * ', ' / ']
    let operator = document.createElement('button')
    operator .classList.add('operator')
    operator.textContent = arr[i]
    operator.addEventListener('click', onClick)
    operatorBox.appendChild(operator)
}

let calcList = ''