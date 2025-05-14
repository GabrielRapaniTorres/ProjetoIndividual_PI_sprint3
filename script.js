
var container = document.querySelector('.container');
const registros_Email = ['gabriel.torres@sptech.school'];
const registros_Senha = ['1234'];
const registros_Nome = ['Gabriel Rapani Torres'];


function signUp() {
    container.classList.add('right-panel-active');

}

function signUpButton() {
    var email = emailLogin.value;
    var senha = senhaLogin.value;

    if (email == "" || senha == "") {
        alert("Preencha todos os campos!");
        return;
    } else if (registros_Email.indexOf(email) != -1 && registros_Senha.indexOf(senha) != -1) {
        alert("Login realizado com sucesso!");
        alert('seja bem vindo ao nosso site, ' + email + ' !');

        window.location.href = "";

    } else {
        alert("Email ou senha incorretos!");
    }
}

function signInButton() {
    var email_cadastro = emailCadastro.value;
    var senha_cadastro = senhaCadastro.value;
    var nome_cadastro = nomeCadastro.value;

    if (email_cadastro == "" || senha_cadastro == "" || nome_cadastro == "") {
        alert("Preencha todos os campos!");
    } else if (registros_Email.indexOf(email_cadastro) != -1) {
        alert("Email já cadastrado!");
        var retorno = prompt("deseja voltar para a tela de login? (sim/não)");

        if (retorno == "sim") {
            container.classList.remove('right-panel-active');
        } else {
            alert("Cadastro não realizado!");
        }

    } else {
        alert("Cadastro realizado com sucesso!");
        alert('seja bem vindo ao meu site, ' + nome_cadastro + ' !');

        registros_Email.push(email_cadastro);
        registros_Senha.push(senha_cadastro);
        registros_Nome.push(nome_cadastro);

        container.classList.remove('right-panel-active');
    }
}
