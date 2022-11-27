
// var calculator = {
    //     operand: null,
    //     val1: null,
    //     val2: null,
    // result: null,
    // }
    
    
    // function press (el){
        //     // replaces 0 with current element clicked
        //     let number = parseFloat(el);
        //     if(calculator.val1 === null){
            //         calculator.val1 = number;
            //         screen.innerText = number;
            //     }  else {
                //     // appends element if display is not 0
                //         while(screen.innerText.length < 9){
                    //             screen.innerText += parseFloat(number);
                    //             break;
//         }
//     }
// }

// function setOP(operation){
    //     // stores the desired operation
    //     calculator.val1 = screen.innerText;
    
    //     // stores current screen as val1
    //     // returns screen to display 0
    // }
    
    // function clr(){
        //     // resets all values in calculator object
        //     calculator.val1 = null;
        //     calculator.val2 = null;
        //     calculator.operand = null;
        //     calculator.result = null;
        //     screen.innerText = 0;
        
        // }
        
        // function calculate(){
            //     // calculates the result of val1 and val2 using desired operand
            //     // returns value to display   
            // }
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
            Op = operation;
            displayDiv.innerText = "0";
        } else {
            displayDiv.innerText = "clearing";
            setTimeout(() => {
                clr();
            }, 1000);
        }
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
    } else {
        first = result;
        result = eval(first + Op + second).toString().slice(0, 9);
    }
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
