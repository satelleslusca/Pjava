function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
        <div class="conteudo-cartao" onclick="mostraResposta(this)">
            <h3>${categoria}</h3>
            <div class="pergunta-cartao">
                <p>${pergunta}</p>
            </div>
            <div class="resposta-cartao" style="display: none;">
                <p>${resposta}</p>
            </div>
        </div>
    `;
    container.appendChild(cartao);
}

function mostraResposta(cartao) {
    // Aqui, 'cartao' é o elemento que foi clicado, ou seja, o <div class="conteudo-cartao">
    const resposta = cartao.querySelector('.resposta-cartao');
    
    // Alterna a visibilidade da resposta
    if (resposta.style.display === 'none') {
        resposta.style.display = 'block'; // Exibe a resposta
    } else {
        resposta.style.display = 'none'; // Oculta a resposta
    }
}
