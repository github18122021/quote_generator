window.addEventListener("load", (e) => {
    grabData();
})


let grabData = async function() {
    try {
        let resp = await fetch("http://localhost:5000/quotes");
        let data = await resp.json();
        // console.log(data);
        useData(data);
    } catch (error) {
        console.log(error.message);
    }
}

let previous = document.querySelector(".previous");
let quote = document.querySelector(".quote");
let next = document.querySelector(".next");

let index = 0;

let useData= function(data) {
    quote.textContent = data[index].text;

    previous.addEventListener("click", (e)=> {
        if (index === 0) {
            index = data.length - 1;
        } else {
            index = index - 1;
        }
        quote.textContent = data[index].text;
    })
    
    next.addEventListener("click", (e)=> {
        if (index === (data.length - 1)) {
            index = 0;
        } else {
            index = index + 1;
        }
        quote.textContent = data[index].text;
    })

}
