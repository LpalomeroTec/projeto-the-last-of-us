
/*O objetivo é clicar no botão,
deve-se mostrar a imagem de fundo correspodente.*/

/*- Passo 1 - Pegar o HTML dos botões.*/
const botoesCarrossel =  document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

/* - Passo 2 - Fazer com que seja identificado o clique
do usuario no botão.*/
botoesCarrossel.forEach((botao, indice )=>{
    botao.addEventListener('click', () => {
        
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostraImagemDeFundo(indice);
    })
} )

function mostraImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}



