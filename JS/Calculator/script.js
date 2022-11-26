var displayDiv = document.querySelector("#display");
var Op = "";
var first = "";
var second = "";
var result = "";
function press (element){
    if(displayDiv.innerText === '0'){
        displayDiv.innerText = `${element}`;
    } else if (Op !== "" && result !== ""){
        clr();
        displayDiv.innerText = `${element}`;
    } else if(displayDiv.innerText.split('').length < 9) {
            displayDiv.innerText += `${element}`;
    }
}

function setOP(operation){
    if (result === "" && first === ""){
        first = parseFloat(displayDiv.innerText);
    } else if (result !== "" && second !== ""){
        Op = operation;
        first = result;
    }
    Op = operation;
    displayDiv.innerText = "0";
    
}

function clr(){
    displayDiv.innerText = "0"
    Op = "";
    first = "";
    second = "";
    result = "";
}

function calculate(){
    if (result === "" && second === ""){
        second = parseFloat(displayDiv.innerText);
        result = eval(first + Op + second).toString().slice(0, 9);
    } else if (result !== "" && second !==""){
        first = result;
        result = eval(first + Op + second).toString().slice(0, 9);
    }
    console.log(first);
    console.log(second);
    
    displayDiv.innerText = result;
}


// when press buttons are clicked, innerText will display corresponding number that was initially clicked and append proceeding numbers clicked until an operator is chosen

// when operator is clicked, display will save the display number to first variable as a float

// display will reset to "0" until a number is clicked again

// when calculate button is clicked, display will save the displayed number as a float in second variable and perform the operator on both saved variables

// result of the equation is then displayed

// if a result is on display, any number button clicked will invoke clr function and all variables are reset

// if operator button is clicked while result is being displayed, the 

// Clear button will reset all variables to 0 and reset to "0" on display
