const display = document.getElementById('screen');

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        const result = eval(display.value);
        display.value = result;
    }
    catch(error){
        display.value ='Error Entry'
    }
}

function clearDisplay(){
    display.value ='';
}