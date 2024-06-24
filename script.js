window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mob-menu'),
    menuItem = document.querySelectorAll('.navigation'),
    hamburger = document.querySelector('.burger-menu');

    hamburger.addEventListener('click', () => {
        const substring = 'icons/esc.svg';
        if (hamburger.src.match(substring)) {
            hamburger.src="icons/menu.svg";
        } else {
            hamburger.src="icons/esc.svg";
        }
        
        menu.classList.toggle('mob-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.src="icons/menu.svg";
            menu.classList.toggle('mob-menu_active');
        })
    })
})