const displayHistory = document.querySelector(".display-history");
const display = document.querySelector(".display-input");
const tempResult = document.querySelector(".temp-result");
const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const clearLast = document.querySelector(".last-entity-clear");

let disp1Num = "";
let disp2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

number.forEach ((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot){
            haveDot = true;
        } else if (e.target.innerText === "." && haveDot) {
            console.log(e.target.innerText);
            return;
        }
        disp2Num += e.target.innerText;
        display.innerText = disp2Num;
    })
})

operation.forEach ((operation) => {
    operation.addEventListener("click", (e) => {
        if (disp2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (disp1Num && disp2Num && lastOperation) {
            console.log("test mtk")
            mathOperation ()
        } else {
            result = parseFloat (disp2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})
function clearVar (name = "") {
    disp1Num += disp2Num + " " + name + " ";
    displayHistory.innerText = disp1Num;
    display.innerText = "";
    disp2Num = "";
    tempResult.innerText = result;
}
function mathOperation () {
    if (lastOperation === "X") {
        result = parseFloat(result) * parseFloat(disp2Num);
        }  else if ( lastOperation === "+") {
            result = parseFloat(result) + parseFloat(disp2Num);
        }  else if ( lastOperation === "-") {
            result = parseFloat(result) - parseFloat(disp2Num);
        }  else if ( lastOperation === "/") {
            result = parseFloat(result) / parseFloat(disp2Num);
        }  else if ( lastOperation === "%") {
            result = parseFloat(result) % parseFloat(disp2Num);
        } 
};

equal.addEventListener("click", () => {
    if(!disp1Num || !disp2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display.innerText = result;
    tempResult.innerText = "";
    disp2Num = result;
    disp1Num = "";
});

clearAll.addEventListener("click", () => {
    disp1Num = "";
    disp2Num = "";
    haveDot = false;
    displayHistory.innerText = "";
    display.innerText = "";
    tempResult.innerText = "";
    result = "";
    lastOperation = "";
})

clearLast.addEventListener("click", () => {
    display.innerText = "";
    disp2Num = "";
})

window.addEventListener("keydown", (e) => {
    if ( 
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" || 
        e.key === "9" 
     ) {
        clickButton(e.key)
     } else if(e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
        clickOperation(e.key);
     } else if ( e.key === "*"); {
        clickOperation("X");
     } 

     });

function clickButton(key) {
    number.forEach((button) => {
        if (button.innerText === key) {
            button.click()
        }
    })
}

function clickOperation (key) {
    operation.forEach((operation) => {
        if (operation.innerText === key) {
            operation.click()
        }
    })
}