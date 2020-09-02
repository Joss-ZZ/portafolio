const botonMenu = document.getElementById('menu_desplegable');
const menu = document.querySelector('.header__menu');

botonMenu.addEventListener('click', ()=>{
     menu.classList.toggle('show');
})
