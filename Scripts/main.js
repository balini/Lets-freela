/* let form = document.getElementById('formulario');
let nome = document.getElementById('first');
let sobrenome = document.getElementById('last')
let email = document.getElementById('inputEmail4');
let cargo = document.getElementById('text');
let empresa = document.getElementById('text2')
let campo = document.getElementById('exampleFormControlTextarea1')


form.addEventListener('submit', function(e) {
    // alerta o valor do nome
    if(nome.value == "" | sobrenome.value =="" | cargo.value == "" | empresa.value == "" | campo.value == ""){
        alert("Preencha todos os campos")
    }

    // impede o envio do form
    e.preventDefault();
});
 */

$('#formulario').submit(function() {
    let allInputs = $(":input").val();
    let valid = "";
    if(valid.test(allInputs)){
        alert("Preencha todos os campos do formulário");
    }
    else{
        alert("Obrigada");   
    }


    e.preventDefault();
 });