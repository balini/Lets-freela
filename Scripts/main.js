 let form = document.getElementById('formulario');
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
    e.preventDefault();
});


$('#formulario').submit(function(e) {
    e.preventDefault()
   /*  let allInputs = $(":input").val();
    let valid = "";
    if(valid.test(allInputs)){
        alert("Preencha todos os campos do formulário");
    }
    else{
        alert("Obrigada");   
    }
 */

    let inputs = $('#formulario :input, textarea');
    console.log(inputs);
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
    console.log(objFormulario)
    /* 
    .then(resp => {
        if(!resp.ok)
            throw resp;
        return resp.json()
        (console.log(resp))
    })

    .catch((err) =>{
        err.json()
        .then(res =>{
            (console.log(res))
        })
        
    }) */

 });