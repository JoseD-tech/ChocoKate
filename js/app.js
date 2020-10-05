const menuMovil = document.querySelector(".menu-movil");
const nav = document.querySelector('.nav');

menuMovil.addEventListener('click', menu);

function menu(e) {
    e.preventDefault;

    menuMovil.classList.toggle('btn-movil-activo');

    if (menuMovil.classList.contains('btn-movil-activo')) {
        nav.classList.add('nav-activo');
    } else {
        nav.classList.remove('nav-activo');
    }


}