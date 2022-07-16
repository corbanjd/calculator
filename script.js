//a function to add

function add(a,b){
return a+b;
}
// a function to subtract
function subtract(a,b){
    return a-b;
}
// a function to multiply
function multiply(a, b){
    return a*b;
}
// a function to divide
function divide(a, b){
    return a/b;
}

function operate(a, o, b){

}

let clickOperator = false;
// active screen number
let screenNumber="";
//ram number/ working number
let ramNumber ="";
// screen
let screen = document.querySelector(".screen");
// clear
let ac = document.querySelector('#ac');
//1-10
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let zero = document.querySelector('#zero');
//plus sign
let plus = document.querySelector('#plus');
//equals sign
let equals = document.querySelector('#equals');
//subtraction
let minus = document.querySelector('#minus');
//multiplication
times = document.querySelector("#x")
//confession
//division
division = document.querySelector("#division")
let confession = console.log("This was created - in the context of time - for the equals sign to only work once two numbers have been clicked")
let plusClicked = false;
let minusClicked = false;
let timesClicked = false;
let divisionClicked = false;
let equalsClicked = false;
let newScreen =0;





function clickEquals(){

// for additions
if (plusClicked === true) {
     

    screenNumber = parseInt(screenNumber, 10);
    newScreen = ramNumber+screenNumber;
    screen.textContent = newScreen;
    ramNumber = newScreen;
    screenNumber = 0;
    minusClicked = false;
    timesClicked = false;
    divisionClicked = false;
    plusClicked = false;
    equalsClicked = true;

}

else if (minusClicked === true){
    screenNumber = parseInt(screenNumber, 10);
    newScreen = ramNumber-screenNumber;
    screen.textContent = newScreen;
    ramNumber = newScreen;
    screenNumber = 0;
    minusClicked = false;
    timesClicked = false;
    divisionClicked = false;
    plusClicked = false;
    equalsClicked = true;

}

else if (timesClicked === true){
    screenNumber = parseInt(screenNumber, 10);
    newScreen = ramNumber*screenNumber;
    screen.textContent = newScreen;
    ramNumber = newScreen;
    screenNumber = 0;
    minusClicked = false;
    timesClicked = false;
    divisionClicked = false;
    plusClicked = false;
    equalsClicked = true;


    

}

else if (divisionClicked === true){
    screenNumber = parseInt(screenNumber, 10);
    newScreen = ramNumber/screenNumber;
    screen.textContent = newScreen;
    ramNumber = newScreen;
    screenNumber = 0;
    minusClicked = false;
    timesClicked = false;
    divisionClicked = false;
    plusClicked = false;
    equalsClicked = true;

/*
else if (minusClicked === true){
    screenNumber = parseInt(screenNumber, 10);
    newScreen = screen.textContent (ramNumber-screenNumber);
    ramNumber = newScreen;
    screenNumber = 0;
    minusClicked = false;
    timesClicked = false;
    divisionClicked = false;
    plusClicked = false;
}



*/
//check the function
// add it to equalsClicked
// add the query selector

// for subtractions 

}

}

function clickDivision(){

    if (ramNumber===""){
        ramNumber=parseInt(screenNumber, 10);
        minusClicked = false;
        timesClicked = false;
        divisionClicked = true;
        plusClicked = false;
        screenNumber=0;
        }

    /*
    else if (equalsClicked === true){

    }
    */

    else if (equalsClicked === true){
        ramNumber = parseInt(ramNumber, 10);
        screenNumber = parseInt(screenNumber, 10);
        ramNumber = ramNumber*1;
        minusClicked = false;
        timesClicked = false;
        divisionClicked = true;
        plusClicked = false;
        screenNumber=0;

    }
    
        else {

            ramNumber = parseInt(ramNumber, 10);
            screenNumber = parseInt(screenNumber, 10);
            ramNumber = ramNumber/screenNumber;
            minusClicked = false;
            timesClicked = false;
            divisionClicked = true;
            plusClicked = false;
            screenNumber=0;
        }

        
        
        screen.textContent =  "÷";

}


function clickTimes(){
    if (ramNumber===""){
        ramNumber=parseInt(screenNumber, 10);
        minusClicked = false;
        timesClicked = true;
        divisionClicked = false;
        plusClicked = false;
        screenNumber=0;
        }

    /*
    else if (equalsClicked === true){

    }
    */

    else if (equalsClicked === true ){
        ramNumber = parseInt(ramNumber, 10);
        screenNumber = parseInt(screenNumber, 10);
        ramNumber = ramNumber*1;
        minusClicked = false;
        timesClicked = true;
        divisionClicked = false;
        plusClicked = false;
        screenNumber=0;

    }
    
        else {

            ramNumber = parseInt(ramNumber, 10);
            screenNumber = parseInt(screenNumber, 10);
            ramNumber = ramNumber*screenNumber;
            minusClicked = false;
            timesClicked = true;
            divisionClicked = false;
            plusClicked = false;
            screenNumber=0;
        }

        
        
        screen.textContent =  "x";
    

}



function clickMinus(){
    if (ramNumber===""){
        ramNumber=parseInt(screenNumber, 10);
        minusClicked = true;
        timesClicked = false;
        divisionClicked = false;
        plusClicked = false;
        }
    
    
    
        else {
            
            ramNumber=parseInt(ramNumber, 10) - parseInt(screenNumber, 10);
            minusClicked = true;
            timesClicked = false;
            divisionClicked = false;
            plusClicked = false;
        }
        screenNumber=0;
        
        screen.textContent =  "-";
    

}

function clickPlus(){
   
    if (ramNumber===""){
    ramNumber=parseInt(screenNumber, 10);
    minusClicked = false;
    timesClicked = false;
    divisionClicked = false;
    plusClicked = true;
    }



    else {
        
        ramNumber=parseInt(ramNumber, 10) + parseInt(screenNumber, 10);
        minusClicked = false;
        timesClicked = false;
        divisionClicked = false;
        plusClicked = true;
    }
    screenNumber=0;
    
    screen.textContent =  "+";

}




function clickAC(){
    screenNumber = "";
    ramNumber = "";
    screen.textContent = "LET'S START OVER.";
    minusClicked = false;
    timesClicked = false;
    divisionClicked = false;
    plusClicked = false;
    equalsClicked = false;
}

function clickOne() { 
    screenNumber=screenNumber + "1";
    screen.textContent=screenNumber;

}

function clickTwo(){
    screenNumber=screenNumber + "2";
    screen.textContent=screenNumber;
}

function clickThree(){
    screenNumber=screenNumber + "3";
    screen.textContent=screenNumber;
}
function clickFour(){
    screenNumber=screenNumber + "4";
    screen.textContent=screenNumber;
}

function clickFive(){
    screenNumber=screenNumber + "5";
    screen.textContent=screenNumber;
}

function clickSix(){
    screenNumber=screenNumber + "6";
    screen.textContent=screenNumber;
}

function clickSeven(){
    screenNumber=screenNumber + "7";
    screen.textContent=screenNumber;
}

function clickEight(){
    screenNumber=screenNumber + "8";
    screen.textContent=screenNumber;
}

function clickNine(){
    screenNumber=screenNumber + "9";
    screen.textContent=screenNumber;
}

function clickZero(){
    screenNumber=screenNumber + "0";
    screen.textContent=screenNumber;
}

//1 - 10
one.addEventListener('click', clickOne);
two.addEventListener('click', clickTwo);
three.addEventListener('click', clickThree);
four.addEventListener('click', clickFour);
five.addEventListener('click', clickFive);
six.addEventListener('click', clickSix);
seven.addEventListener('click', clickSeven);
eight.addEventListener('click', clickEight);
nine.addEventListener('click', clickNine);
zero.addEventListener('click', clickZero);
ac.addEventListener('click', clickAC);
plus.addEventListener('click', clickPlus);
equals.addEventListener('click', clickEquals);
minus.addEventListener('click', clickMinus);
times.addEventListener('click', clickTimes);
division.addEventListener('click', clickDivision);

let dividingByZero = false;
