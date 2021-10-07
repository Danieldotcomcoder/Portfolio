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

form.addEventListener('submit', (e) => {
  const email = document.getElementById('email');
  const emailvalue = email.value;
  if (emailvalue !== emailvalue.toLowerCase()) {
    e.preventDefault();
    document.getElementById('error-msg').innerHTML = 'Make sure your email address is in lowercase';
  }
});

function storedata() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('msg').value;
  const mystoredataobject = { name, email, msg };
  let myobjectserialized = JSON.stringify(mystoredataobject);
  localStorage.setItem( 'mystoredataobject', myobjectserialized); 
}

function showdata() {
  const stored = JSON.parse(localStorage.getItem('mystoredataobject'));
  document.getElementById('name').value = stored.name;
  document.getElementById('email').value = stored.email;
  document.getElementById('msg').value = stored.msg;
  storedata();
}
showdata();