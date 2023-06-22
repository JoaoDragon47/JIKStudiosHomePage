function abrirLink(url) {
    if (url!=undefined) {
        let conteudoPrincipal = document.getElementById("principal");
        let conteudoSobreNos = document.getElementById("area-quem-somos");
        let botao = document.querySelector('button')

        if (url == 'sobre-nos') {
            if (conteudoPrincipal.classList.contains("escondido")) {
                document.title = 'JIKS Studios'
                conteudoPrincipal.classList.remove("escondido");
                conteudoSobreNos.classList.add("escondido");
            } else {
                document.title = 'Sobre Nós'
                conteudoPrincipal.classList.add("escondido");
                conteudoSobreNos.classList.remove("escondido");
            }
        } else {
            window.open(url, '_blank');
        }
    } else {
        let conteudoPrincipal = document.getElementById("principal");
        let conteudoErro = document.getElementById("area-erro");

        function alternarConteudo() {
            if (conteudoPrincipal.classList.contains("escondido")) {
                document.title = 'JIKS Studios'
                conteudoPrincipal.classList.remove("escondido");
                conteudoErro.classList.add("escondido");
            } else {
                document.title = 'Erro 😰'
                conteudoPrincipal.classList.add("escondido");
                conteudoErro.classList.remove("escondido");
            }
        }

        alternarConteudo()
    }
}


// function voltarAba() {
//     window.location.href = '../index.html'
// }
// function abrirCaixaTexto() {
//     var email = prompt("Digite seu e-mail:");
//     var mensagem = prompt("Digite sua mensagem:");
// }