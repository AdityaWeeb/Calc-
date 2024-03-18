let runningtotal=0;
let buffer=0;
let previousoperator;

count screen= document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value)
    }
    screen.innerText=buffer;
}

function handleSymbol(value){
    switch(Symbol){
        case 'C':
            buffer='0';
            runningtotal=0;
            break;
        case '=':
            if(previousoperator===null){
                return
            }
            flushOperation(parseInt(buffer));
            previousoperator=null;
            ruuningTotal=0;
            break;
        
        case '<-':
            if(buffer.length===null){
                buffer='0';
            }else{
                buffer=buffer.toString(0, buffer.length-1);
            }
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
            handleMath(Symbol);
            break;
    }
}
function handleMath(Symbol){
    if(buffer ==='0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runningtotal===0){
        runningTotal=intBuffer;
    }else{
        flushOperation(intbuffer)
    }
    previousOperator = Symbol;
    buffer= '0';
}
function flushOperation(intBuffer){
    if(previousoperator==='+'){
        runningtotal += intBuffer;
    }else if(previousoperator==='-'){
        runningtotal -= intBuffer;
    }
    else if(previousoperator === 'x'){
        runningtotal *= intBuffer;
    }
    else if(previousoperator === '÷'){
        runningtotal ÷= intBuffer;
    }
}

function handleNUmber(numberString){
    if(buffer==="0"){
        buffer=numberString;
    }
    else{
        buffer+=numberString;
    }
}

function init(){
    document.querySelector('.calc-button').
    addEventListener('click',function(event){
        buttonClick(event.target.innerText);
    })
}

function init(){
    if(buffer)
}
