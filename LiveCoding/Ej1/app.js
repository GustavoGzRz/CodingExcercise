// Escribe tu código aquí.

const entradas = ["monitor","mouse","teclado","microfono","webcam",
                "gabinete","procesador","fuente","ventilador","memoria",];
let palabra = document.getElementById("wordList");
let arrayPrueba = prueba("pelota", entradas);
output(arrayPrueba);

function output(arrayA){
    for (let i = 0; i <= arrayA.length; i++) {
        let elemento = arrayA[i];
        palabra.innerHTML += `<li id="wordList">${arrayA[i]}</li>`
    }// for i
}// function salida

function prueba(newW, arrayB){
    palabra = [];
    for (let j = 0; j <= arrayB.length; j++) {
        let elemento = arrayB[j];
        if(newW.length<arrayB[j].length){
            palabra.push(arrayB[j]);
        }//if
    }// for i
    return palabra;
}// function salida

