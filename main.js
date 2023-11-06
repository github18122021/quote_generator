window.addEventListener("load", (e) => {
    grabData();
})


let grabData = async function() {
    try {
        let resp = await fetch("http://localhost:5000/quotes");
        let data = await resp.json();
        console.log(data);
        useData(data);
    } catch (error) {
        console.log(error.message);
    }
}

let previous = document.querySelector(".previous");
let quote = document.querySelector(".quote");
let next = document.querySelector(".next");

let useData= function(data) {
    let index = 0;
    let elm = data[index];
    quote.textContent = elm.text;
}
