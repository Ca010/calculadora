let displayBuffer = "";
let numero = "";
let termos = [undefined, undefined, undefined];
let resultado = undefined;

function pressNum(num) {
    numero = numero.concat(num.innerHTML);
    showDisplay(num.innerHTML);
}

function pressOperador(op) {
    termos[0] = numero;
    termos[1] = op.innerHTML;
    showDisplay(op.innerHTML);
    numero = "";
}

function clearMemory() {
    numero = "";
    termos = [undefined, undefined, undefined];
    resultado = undefined;
}

function clearDisplay() {
    displayBuffer = ""
    let tela = document.getElementById('display');
    tela.value = displayBuffer;
}

function pressEqual() {
    termos[2] = numero;
    let keepresultado;
    switch (termos[1]) {
        case '+':
            resultado = Number(termos[0]) + Number(termos[2]);
            break;
        case '-':
            resultado = Number(termos[0]) - Number(termos[2]);
            break;
        case '*':
            resultado = Number(termos[0]) * Number(termos[2]);
            break;
        case "/":
            resultado = Number(termos[0]) / Number(termos[2]);
            break;
    }

    keepresultado = resultado;
    clearDisplay();
    showDisplay(resultado);
    clearMemory();
    numero = keepresultado;

}

function clearAll() {
    clearDisplay();
    clearMemory();
}

function showDisplay(conteudo) {
    displayBuffer = displayBuffer.concat(conteudo);
    let tela = document.getElementById('display');
    tela.value = displayBuffer;
}