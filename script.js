const Form = document.getElementById('formula');

Form.addEventListener ('submit', function(event){
    event.preventDefault();

    const cadastro = new Object() ;
    cadastro.nome = document.getElementById('nome').value;
    cadastro.email = document.getElementById('email').value;
    cadastro.tele = document.getElementById('tele').value;
    cadastro.CPF = document.getElementById('CPF').value;
    cadastro.senha = document.getElementById('senha').value;
    cadastro.Csenha = document.getElementById('Csenha').value;
    cadastro.feed = document.getElementById('feedback').value;

    if(cadastro.senha != cadastro.Csenha){
        alert("Senhas Diferentes!");
        return;
    }
    else{
        alert("Parabéns " + cadastro.nome + ", agora você está cadastrado em nosso site!");
    }

})