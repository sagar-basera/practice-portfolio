const hamburger_icon = document.querySelector('.hamburger');
const nav_list = document.querySelector('.nav-list');

hamburger_icon.addEventListener('click', () =>{
    nav_list.classList.toggle('open');
    hamburger_icon.classList.toggle('active');
});