const butao = document.querySelector('button');
const div = document.querySelector('.conteudo');

butao.addEventListener('click', () => {
    div.classList.toggle('oculta')
})