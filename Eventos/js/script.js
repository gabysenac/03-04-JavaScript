const btn = document.querySelector("#my-button")

btn.addEventListener("click",
function(){
    console.log("Clicou!")
})


// test
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thridBtn = document.querySelector("#other-btn");
thridBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});
