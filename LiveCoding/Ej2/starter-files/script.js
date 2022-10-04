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

    if (validation()) {
        getData();
    }

})

function clear() {
    answer.innerText = "";
    document.getElementById("input").value = '';
}

function validation() {
    if (document.getElementById("input").value) {
        return true;
    } else {
        console.log("Pregunta algo Y/N");
        return false;
    }

}

const getData = () => {
    let promesa = fetch("https://yesno.wtf/api", {
        method: "GET"
    });
    promesa.then((response) => {
        response.json().then((data) => {
            console.log(data.answer);
            r.innerText = data.answer;
            setTimeout(clear, 3000);
        }).catch((error) => {
            console.error(error);
        });
    }).catch((error) => {
        console.log("error " + error);
    })
}//getData

