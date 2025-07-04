var text = ``;
const result = document.getElementById("result");


function addText(symbol){
    text += symbol;
    result.textContent = text;

}

function calculate(){
    text = eval(text);
    result.textContent = text;
    text = ``;
}

function clearText(){
    text = 0;
    result.textContent = text;
    text = ``;

}

