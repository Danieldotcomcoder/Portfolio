const menubtn = document.getElementById('menu-btn');
const navlist = document.getElementById('navbar-list');
const rightsect = document.getElementById('rightsection');
const timesect = document.getElementById('timesection');
const closebtn = document.getElementById('close-btn');

menubtn.addEventListener('click', () => {
  navlist.classList.toggle('show');
  timesect.classList.toggle('hide');
  rightsect.classList.toggle('hide');
});

navlist.addEventListener('click', () => {
  navlist.classList.toggle('show');
  rightsect.classList.toggle('hide');
  timesect.classList.toggle('hide');
});

closebtn.addEventListener('click', () => {
  navlist.classList.toggle('show');
  rightsect.classList.toggle('hide');
  timesect.classList.toggle('hide');
});

const form = document.getElementById('form');


form.addEventListener('submit' , (e) => {
  
    const email = document.getElementById('email');
    const emailvalue = email.value;
  
    if(emailvalue !== emailvalue.toLowerCase()){
      e.preventDefault();
      document.getElementById('error-msg').innerHTML = "please make sure you email address is in lowercase";
    }
});

