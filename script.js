// Exemplo de uma animação de rolagem suave e destaque para o link ativo
const links = document.querySelectorAll('nav ul li a');

// Função para remover a classe de 'ativo' de todos os links
function removeActiveClass() {
    links.forEach(link => {
        link.classList.remove('ativo');
    });
}

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        
        // Remove a classe 'ativo' de todos os links antes de adicionar ao link atual
        removeActiveClass();
        link.classList.add('ativo');
        
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});
