
let button = document.querySelector(".ratings");

let output = document.querySelector(".p-with-js");
let section1 = document.querySelector(".section-1");
let section2 = document.querySelector(".section-2");

let submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
    section2.classList.toggle("section-2-active");
    section1.classList.toggle("section-1-block");
})
button.addEventListener("click", (e) => {
        output.innerHTML =  ` You selected ${e.target.innerHTML} out of 5`;
        
})