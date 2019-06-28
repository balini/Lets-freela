let form = document.getElementById('formulario');
let nome = document.getElementById('first');
let sobrenome = document.getElementById('last')
let email = document.getElementById('inputEmail4');
let cargo = document.getElementById('text');
let empresa = document.getElementById('text2');
let campo = document.getElementById('exampleFormControlTextarea1');
let sucesso = document.getElementById('divSucesso');
let erro = document.getElementById('divErro');
let sucessoAntenado = document.getElementById('divSucessoAntenado');
let erroAntenado = document.getElementById('divErroAntenado');


form.addEventListener('submit', function(e) {
    if(nome.value == "" | sobrenome.value =="" | cargo.value == "" | empresa.value == "" | campo.value == ""){
        alert("Preencha todos os campos")
    }
    e.preventDefault();
});

$('#formAntenado').submit(function(e) {
    e.preventDefault();
    let email = $('.emailAntenado').val();
    const objFormulario = {
        firstname: '----',
        lastname: '----',
        fromMail: email,
        company: '----',
        message: '----',
        role: '----'
    }
    fetch('https://twc2wdwe32.execute-api.us-east-1.amazonaws.com/contact/mail',{
        method: 'POST',
        //converter objeto para Json
        body: JSON.stringify(objFormulario)
    })
    .then(resp => {
        console.log(resp);
        if(resp.status != 204){
            return $(erroAntenado).addClass('active'), $(sucessoAntenado).removeClass('active');
        }
        else {
            return $(sucessoAntenado).addClass('active'), $(erroAntenado).removeClass('active');
        }
        
    })
    .catch( error => {
        return $(erroAntenado).addClass('active'), $(sucessoAntenado).removeClass('active');
    })

})

$('#formulario').submit(function(e) {
    e.preventDefault()

    let inputs = $('#formulario :input, textarea');
    let valoresFormulario = {};
    inputs.each(function() {
        valoresFormulario[this.name] = $(this).val();
    })
    console.log(valoresFormulario);
    const objFormulario = {
        firstname: valoresFormulario['firstname'],
	    lastname: valoresFormulario['lastname'],
	    fromMail: valoresFormulario['email'],
	    company: valoresFormulario['company'],
	    message: valoresFormulario['message'],
	    role: valoresFormulario['role']
    }

    fetch('https://twc2wdwe32.execute-api.us-east-1.amazonaws.com/contact/mail',{
        method: 'POST',
        //converter objeto para Json
        body: JSON.stringify(objFormulario)
    })
    .then(resp => {
        console.log(resp);
        if(resp.status != 204){
            return $(erro).addClass('active'), $(sucesso).removeClass('active');
        }
        else {
            return $(sucesso).addClass('active'), $(erro).removeClass('active');
        }
        
    })
    .catch( error => {
        return $(erro).addClass('active'), $(sucesso).removeClass('active');
    })
 });