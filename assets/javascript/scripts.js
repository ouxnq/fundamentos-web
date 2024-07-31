function hello() {
    alert("Hello World");
};

let nome = document.getElementById("nome");
let email = document.getElementById("email");

function exibeNome() {
    alert("Seja muito bem vinde, " + nome.value);
};
function exibeNomeEmail() {
    alert("Seja muito bem vinde, " + nome.value + ". Entrarei em contato pelo email: " + email.value);
};