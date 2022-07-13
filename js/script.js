function cadPessoa(nome, email, nasc, tel) {

    var tb = document.getElementById("tbPessoa");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellId = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellEmail = linha.insertCell(2);
    var cellNasc = linha.insertCell(3);
    var cellTel = linha.insertCell(4);

    cellId.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellEmail.innerHTML = email;
    cellNasc.innerHTML = nasc;
    cellTel.innerHTML = tel;
}

//function validaCampo() {
//    var nomeValue = nome.value;
//    var emailValue = email.value;
//    var nascValue = nasc.value;
//    var telValue = tel.value;

//    if (nomeValue === "") {
//        setErrorFor(nome, "Este campo é obrigatório.")
//    }
//}

//function setErrorFor (input, message) {

//}

const formato = {

    phone(value) {

        return value

            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1)$2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')

    }

}

document.querySelectorAll('input').forEach(($input) => {

    const string = $input.dataset.js

    $input.addEventListener('input', (e) => {

        e.target.value = formato[string](e.target.value)

    }, false)

})