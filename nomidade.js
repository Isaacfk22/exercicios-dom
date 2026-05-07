
function check(){
let nome = document.getElementById("nome").value.trim()
let idade = Number (document.getElementById("idade").value)
let respostaNome = document.getElementById("resposta-nome")
let respostaIdade = document.getElementById("resposta-idade")
let acesso = document.getElementById("acesso") 

if(nome = ""){
    acesso.textContent = "Acesso negado"
    acesso.style.color ="red"
} else if (idade < 18){
    acesso.textContent = "Acesso negado"
    acesso.style.color ="red"
} else{
    acesso.textContent = "Acesso permitido"
    acesso.style.color ="green"
}
}





