// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtém referências aos elementos
    const botao = document.getElementById('botaoMensagem');
    const divMensagem = document.getElementById('mensagem');
    
    // Array com diferentes mensagens motivacionais
    const mensagens = [
        "⚡ Você tem o poder de transformar sonhos em realidade!",
        "👋 Olá! Que seu dia seja repleto de alegria e sucesso!",
        "🎉 Bem-vindo(a) ao seu momento de inspiração diária!"
    ];
    
    // Variável para controlar se a mensagem está visível
    let mensagemVisivel = false;
    
    botao.addEventListener('click', function() {
        
        if (!mensagemVisivel) { //se a mensagem não estiver visível
            const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
            
            divMensagem.innerHTML = mensagemAleatoria;
            divMensagem.className = 'mensagem-visivel';
            botao.textContent = 'Ocultar mensagem';
        
            mensagemVisivel = true;
            
            console.log('🔊 Mensagem exibida!');
            
        } else {
            divMensagem.className = 'mensagem-oculta';
        
            botao.textContent = 'Clique para ver uma mensagem!';
            
            mensagemVisivel = false;
            
            console.log('🔇 Mensagem ocultada!');
        }
    });
});