const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const mensagem = document.getElementById('mensagem');

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const telefoneValue = telefone.value;
    const mensagemValue = mensagem.value;

    if(usernameValue === '') {
        setErrorFor(username, "O nome de usuário é obrigatório.")
    }else {
        setSuccssFor(username);
    }

    if (emailValue ==='') {
        setErrorFor(email, 'O email e obrigatório.')
    }else if (!checkEmail(emailValue)){
        setErrorFor(email,'Por favor, insira um email válido.')
    }else {
        setSuccssFor(email)
    }

    if(telefoneValue ===''){
        setErrorFor(telefone, 'Número de celular e obrigatório.');
    }else if (!checkTelefone(telefoneValue)) {
        setErrorFor(telefone, 'O número precisar ter no minimo 9 caracteres.');
    }else {
        setSuccssFor(telefone);
    }

    if(mensagemValue === '') {
        setErrorFor(mensagem, 'Insira uma mensagem')
    }else {
        setSuccssFor(mensagem)
    }

}

function setErrorFor(input, massage) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // Adcionar a mensagem de erro
    small.innerText = massage;

    // Adcionar a class de erro
    formControl.className = 'form-control error';
}

// Succss nas duas tegs
function setSuccssFor(input, massage) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function setSuccssFor(textarea , massage) {
    const formControl = textarea.parentElement;
    formControl.className = 'form-control success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  function checkTelefone (telefone){
    return /^(\(?\d{2}\)?\s?)?\d{4,5}[-. ]?\d{4}$/.test(telefone);
}