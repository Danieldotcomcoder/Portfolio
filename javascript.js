const menubtn = document.getElementById('menu-btn');
const navlist = document.getElementById('navbar-list');
const closebtn = document.getElementById('close-btn');


menubtn.addEventListener('click', () => {
   navlist.classList.toggle('show');
})

closebtn.addEventListener('click', () => {
   navlist.classList.toggle('show');
})