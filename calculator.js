document.addEventListener("DOMContentLoaded", function() {
    const outputElement = document.querySelector(".output");
    const button1 = document.querySelector("#btn1");
    const button2 = document.querySelector("#btn2");
    const button3 = document.querySelector("#btn3");
    const button4 = document.querySelector("#btn4");
    const button5 = document.querySelector("#btn5");
    const button6 = document.querySelector("#btn6");
    const button7 = document.querySelector("#btn7");
    const button8 = document.querySelector("#btn8");
    const button9 = document.querySelector("#btn9");
    const button0 = document.querySelector("#btn0");
    const buttonDot = document.querySelector("#btnDot");
    const buttonSbtc = document.querySelector("#btnSubstract");
    const buttonAdd = document.querySelector("#btnAdd");
    const buttonDvsn = document.querySelector("#btnDivide");
    const buttonMtpl = document.querySelector("#btnMultiply");
    const buttonEqual = document.querySelector("#btnEqual");
    const buttonClear = document.querySelector("#btnClear");
    const numericButtons = document.querySelectorAll(".numeric-button");

    let currentResult = 0;
    let operator = null;
    let isNumericClicked = false;

    function calculate() {
        const inputValue = parseFloat(outputElement.textContent);
        if (operator === '+') {
            currentResult += inputValue;
        } else if (operator === '-') {
            currentResult -= inputValue;
        } else if (operator === '*') {
            currentResult *= inputValue;
        } else if (operator === '/') {
            currentResult /= inputValue;
        }
        outputElement.textContent = currentResult;
    }
        
    numericButtons.forEach(button => {
        button.addEventListener("click", () => {
            const numberClicked = button.textContent;
            if (isNumericClicked) {
                outputElement.textContent += numberClicked;
            } else {
                outputElement.textContent = numberClicked;
                isNumericClicked = true;
            }
        });
    });
    
    buttonClear.addEventListener("click", () => {
        outputElement.textContent = "0";
        currentResult = 0;
        isNumericClicked = false;
    });    

    button0.addEventListener("click", () => {
        if (isNumericClicked) {
            outputElement.textContent += "0";
        }
    });
    
    buttonDot.addEventListener("click", () => {
        isNumericClicked = true;
        const currentOutput = outputElement.textContent;
    
        if (!currentOutput.includes(".")) {
            outputElement.textContent += ".";
        }else if (!currentOutput.includes("+")) {
            outputElement.textContent += "0.";
        }
    });
    
    buttonAdd.addEventListener("click", () => {
        if (isNumericClicked) {
            if (operator !== null) {
                calculate();
            }
            operator = '+';
            outputElement.textContent += '+';
            isNumericClicked = false;
        }
    });
    
    buttonSbtc.addEventListener("click", () => {
        if (isNumericClicked) {
            if (operator !== null) {
                calculate();
            }
            operator = '-';
            outputElement.textContent += '-';
            isNumericClicked = false;
        }
    });
    
    buttonMtpl.addEventListener("click", () => {
        if (isNumericClicked) {
            if (operator !== null) {
                calculate();
            }
            operator = '*';
            outputElement.textContent += '*';
            isNumericClicked = false;
        }
    });
    
    buttonDvsn.addEventListener("click", () => {
        if (isNumericClicked) {
            if (operator !== null) {
                calculate();
            }
            operator = '/';
            outputElement.textContent += '/';
            isNumericClicked = false;
        }
    });
    
    
    buttonEqual.addEventListener("click", () => {
        if (isNumericClicked) {
            calculate();
            operator = null;
            isNumericClicked = false;
        }
    });

});