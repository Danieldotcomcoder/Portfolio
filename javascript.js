const menubtn = document.getElementById('menu-btn');
const navlist = document.getElementById('navbar-list');
const rightsect = document.getElementById('rightsection');
const timesect = document.getElementById('timesection');


const closebtn = document.getElementById('close-btn');


menubtn.addEventListener('click', () => {
  
   navlist.classList.toggle('show');
   timesect.classList.toggle('hide');
   rightsect.classList.toggle('hide');
  
})

navlist.addEventListener('click', () => {
   navlist.classList.toggle('show');
   rightsect.classList.toggle('hide');
   timesect.classList.toggle('hide');
 
})

closebtn.addEventListener('click', () => {
   navlist.classList.toggle('show');
   rightsect.classList.toggle('hide');
   timesect.classList.toggle('hide');
})

