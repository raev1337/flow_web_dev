const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const first_menu_div = document.querySelector('.first_menu_div');
const second_menu_div = document.querySelector('.second_menu_div');
const menu_link = document.querySelectorAll('.menu_item');



const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menu--active');
    first_menu_div.classList.toggle('first_menu_div--active');
    second_menu_div.classList.toggle('second_menu_div--active');
}

const deactivationLink = () => {
    setTimeout(function () {
        hamburger.classList.remove('hamburger--active');
        menu.classList.remove('menu--active');
        first_menu_div.classList.remove('first_menu_div--active');
        second_menu_div.classList.remove('second_menu_div--active');
    }, 0)
}

hamburger.addEventListener('click', handleClick);
menu_link.forEach(item => {
    item.addEventListener('click', deactivationLink);
});