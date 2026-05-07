
function somar(){
let n1 = Number (document.getElementById("n1").value);
let n2 = Number (document.getElementById("n2").value);
let resultado = document.getElementById("resultado");
    resultado.textContent = n1 + n2;
    console.log("aa")
}

n1.addEventListener("input", somar);
n2.addEventListener("input", somar)

