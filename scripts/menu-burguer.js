const iconBurger = document.getElementById('burger')
const menuList = document.getElementById('menu-items')
const navLinks = document.querySelectorAll('#menu #menu-items li a')

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    iconBurger.classList.toggle('hide')
    menuList.classList.toggle('show-menu')
    const active = menuList.classList.contains('show-menu')
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

iconBurger.addEventListener('click', toggleMenu);
iconBurger.addEventListener('touchstart', toggleMenu);

navLinks.forEach(navLink => navLink.addEventListener('click', () => {
    menuList.classList.remove('show-menu');
    iconBurger.classList.toggle('hide')
}));