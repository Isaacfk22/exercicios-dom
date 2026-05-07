let input = document.getElementById("nome");
let msg = document.getElementById("mensagem");

function validar(){
    let valor = input.value.trim();
    if(valor != ""){
        msg.textContent = "Nome válido"
        msg.style.color = "green"
    }
    else{
        msg.textContent = ("Campo obrigatório");
        msg.style.color = "red"
    }
}
input.addEventListener("input", validar)