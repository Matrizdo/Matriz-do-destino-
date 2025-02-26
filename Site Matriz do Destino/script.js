```javascript
   // Exemplo de uma simples animação de rolagem suave ao clicar nos links de navegação
   const links = document.querySelectorAll('nav ul li a');

   links.forEach(link => {
       link.addEventListener('click', (e) => {
           e.preventDefault();
           const target = document.querySelector(link.getAttribute('href'));
           window.scrollTo({
               top: target.offsetTop,
               behavior: 'smooth'
           });
       });
   });
   ```