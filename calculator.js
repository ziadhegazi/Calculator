const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operators")
const equal = document.querySelector(".equal")
const del = document.querySelector(".del")
const ac = document.querySelector(".ac")
const dataLowerText = document.querySelector(".lower")
const dataUpperText = document.querySelector(".upper")

// Defining Calculator start

class Calculator{
    constructor(dataUpperText, dataLowerText) {
        this.dataUpperText = dataUpperText
        this.dataLowerText = dataLowerText
        this.clear()
    }

    clear() {
        this.dataUpper = ""
        this.dataLower = ""
        this.operation = undefined

    }

    delete() {
        this.dataLower = this.dataLower.toString().slice(0,-1);
    }

    appendNumber(number) {
        if (number === "." && this.dataLower.includes("."))return;
        else{this.dataLower = this.dataLower + number}
        

    }
    
    updateDisplay() {
        this.dataLowerText.innerText = this.dataLower
        
        if(this.operation !== undefined){
            this.dataUpperText.innerText = `${this.dataUpper} ${this.operation}`;
        }else{
            this.dataUpperText.innerText = this.dataUpper;
        }
        }

    chooseOperation(operation) {
        if(this.dataLower === "") return;
        if(this.dataUpper !== ""){
            calculator.calculate()
        }
        this.operation = operation;
        this.dataUpper = this.dataLower;
        this.dataLower = "";
    }

    calculate() {
        let value;
        const top = parseFloat(this.dataUpper);
        const bottom = parseFloat(this.dataLower);

        if(isNaN(top) || isNaN(bottom))return;
        switch(this.operation){
            case "+":
                value = top + bottom;
                break;
            case "-":
                value = top - bottom;
                break;
            case "x":
                value = top * bottom;
                break;
            case "/":
                value = top / bottom;
                break;
        }
        calculator.clear();
        this.dataLower = value;
    }
}
// Instantiate Object calculator
const calculator = new Calculator(dataUpperText, dataLowerText)

// Adding each number clicked on to the dataLower

numbers.forEach(number => { 
    // console.log(button.innerText)
    number.addEventListener("click", () => {
        calculator.appendNumber(number.innerText)
        calculator.updateDisplay()
    })
    
})

// Adding operator + numbers on dataLower to dataUpper

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        calculator.chooseOperation(operator.innerText);
        calculator.updateDisplay();
    })
})

// Equal sign button to calculate 

equal.addEventListener("click", () => {
    calculator.calculate();
    calculator.updateDisplay();
})

// Delete button to delete one character back

del.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
})

// AC button to clear all output display

ac.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
})

//------------------------------------------------------------