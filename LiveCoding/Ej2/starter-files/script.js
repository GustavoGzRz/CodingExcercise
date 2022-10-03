// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

let boton = document.getElementById("button");
let r = document.getElementById("answer");

boton.addEventListener("click", function(e){
    e.preventDefault();

    fetchAnswer();
    r.innerHTML =fetchAnswer();

})


function fetchAnswer(){

    (fetch("https://yesno.wtf/api")
    .then(res => res.json)
    .then(respuesta=> {
        console.log(respuesta)
    }))

}