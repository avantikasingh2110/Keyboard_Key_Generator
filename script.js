let h1 = document.querySelector("h1");
let code = document.querySelector("h3");

addEventListener("keydown", (e) => {
    e.code ==="Space" ? h1.innerText = `You have pressed Space` : h1.innerText =  `You have pressed -> ${e.key.toUpperCase()}`
    code.innerText = `${e.keyCode}` 
})