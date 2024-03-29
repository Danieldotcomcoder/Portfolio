const menubtn = document.getElementById('menu-btn');
const navlist = document.getElementById('navbar-list');
const rightsect = document.getElementById('rightsection');
const timesect = document.getElementById('timesection');
const closebtn = document.getElementById('close-btn');
const title1 = 'Conference Page';
const title2 = 'Car Rent ';
const title3 = 'Math Magicians';
const title4 = 'Space Hub';
const Description1 = '<p> A two-page website I built for a technology conference. Using HTML/CSS and javascript I made a responsive design that looks good on both mobile and desktop devices.</p> ';
const Description2 = '<p>A car service webapp where admin can add cars and delete cars. User can navigate smoothly across the differents pages, where he can explore all cars options and details, and make a reservation for a selected item and with his specific details.</p> ';
const Description3 = '<p>A web application I built using React that serves as a calculator. Created multiple React functional components that handle different things like operations and calculation, buttons(numbers and signs), and the result.</p> ';
const Description4 = '<p>A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.</p> ';
const projimage1 = document.createElement('img');
projimage1.src = 'img/p1.png';
const projimage2 = document.createElement('img');
projimage2.src = 'img/car-rental.png';
const projimage3 = document.createElement('img');
projimage3.src = 'img/desktop/mm1.png';
const projimage4 = document.createElement('img');
projimage4.src = 'img/p4.png';
const htmlimg = document.createElement('img');
htmlimg.src = 'img/html.png';
const cssimg = document.createElement('img');
cssimg.src = 'img/css.png';
const jsimg = document.createElement('img');
jsimg.src = 'img/javascript.png';

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

const titlelist = document.querySelectorAll('.project-title');
titlelist[0].innerHTML = title1;
titlelist[1].innerHTML = title2;
titlelist[2].innerHTML = title3;
titlelist[3].innerHTML = title4;



const imglist = document.querySelectorAll('.snapshot-portfolio');
imglist[0].appendChild(projimage1);
imglist[1].appendChild(projimage2);
imglist[2].appendChild(projimage3);
imglist[3].appendChild(projimage4);

const prolist = document.querySelectorAll('.project-description');
prolist[0].innerHTML = Description1;
prolist[1].innerHTML = Description2;
prolist[2].innerHTML = Description3;
prolist[3].innerHTML = Description4;

const technologies = document.querySelectorAll('.project-tags');

for (let i = 0; i <= 3; i += 1) {
  technologies[i].appendChild(htmlimg.cloneNode(true));
  technologies[i].appendChild(cssimg.cloneNode(true));
  technologies[i].appendChild(jsimg.cloneNode(true));
}

const projectinformation = [// stores information for all projects
  {
    title: 'Tonic',
    Description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p> ',
    image: 'img/desktop/0.png',
    tech1: 'img/html.png',
    tech2: 'img/css.png',
    tech3: 'img/javascript.png',
    link: '#',
    source: 'https://github.com/Danieldotcomcoder/Danieldotcomcoder.github.io',
  },
  {
    title: 'Multi-Post Stories ',
    Description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p> ',
    image: 'img/desktop/1.png',
    tech1: 'img/html.png',
    tech2: 'img/css.png',
    tech3: 'img/javascript.png',
    link: '#',
    source: 'https://github.com/Danieldotcomcoder/Danieldotcomcoder.github.io',
  },
  {
    title: 'Tonic',
    Description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>',
    image: 'img/desktop/2.png',
    tech1: 'img/html.png',
    tech2: 'img/css.png',
    tech3: 'img/javascript.png',
    link: '#',
    source: 'https://github.com/Danieldotcomcoder/Danieldotcomcoder.github.io',
  },
  {
    title: 'Multi-Post Stories ',
    Description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>',
    image: 'img/desktop/3.png',
    tech1: 'img/html.png',
    tech2: 'img/css.png',
    tech3: 'img/javascript.png',
    link: '#',
    source: 'https://github.com/Danieldotcomcoder/Danieldotcomcoder.github.io',
  },
];

const popupmodal = document.querySelectorAll('.popup-modal');

window.addEventListener('DOMContentLoaded', () => {
  popupmodal[0].innerHTML = `<div class='popup'>
        <div class='popup-info-block'>
            <div class='popup-primary-text-box'>
            <div class='popup-project-title'>
            ${projectinformation[0].title}
            <img class='popup-closebtn' onclick='closepopup1()' src='img/Disabled.png' alt='close-button' width='44' height='45'>
          </div>
          <div class='popup-project-frame'>
              <h3>CANOPY</h3>
              <img src='img/Counter.png' alt='counter' width='8' height='8'>
              <h4>Back End Dev</h4>
              <img src='img/Counter1.png' alt='counter1' width='8' height='8'>
              <h4>2015</h4>
          </div>
      </div>
      <div class='popupsnapshot'>
        <img src=${projectinformation[0].image} alt='pop-image' >
      </div>
      <div class='popup-project-description' id='proj-description'>
      ${projectinformation[0].Description}
      </div>
      <div class='popup-project-tags'>
      <ul>
         <li><img src=${projectinformation[0].tech1}> </li>
         <li><img src=${projectinformation[0].tech2}> </li>
         <li><img src=${projectinformation[0].tech3}> </li>
      </ul>
      </div>
      <div class='popup-project-buttons'>
      <a href=${projectinformation[0].link}> <button>&nbsp&nbsp&nbsp&nbsp  See live <img src='img/btn-img-live.png' width='15' height='15' ></button></a>
      <a href=${projectinformation[0].source}> <button>&nbsp&nbsp&nbsp&nbsp  See Source <img src='img/btn-img-src.png' width='15' height='15'></button></a>
      </div>
  </div>`;
});

const workssection = document.querySelectorAll('.card-works');

function openpopup1() {
  const x = document.querySelectorAll('.popup');
  if (x[0].style.display === 'flex') {
    x[0].style.display = 'none';
  } else {
    x[0].style.display = 'flex';
  }
  x[0].scrollIntoView();
}

function closepopup1() {
  const y = document.querySelectorAll('.popup');
  if (y[0].style.display === 'flex') {
    y[0].style.display = 'none';
  } else {
    y[0].style.display = 'flex';
  }
  workssection[0].classList.toggle('hide');
}

window.addEventListener('DOMContentLoaded', () => {
  popupmodal[1].innerHTML = `<div class='popup'>
        <div class='popup-info-block'>
            <div class='popup-primary-text-box'>
            <div class='popup-project-title'>
            ${projectinformation[1].title}
            <img class='popup-closebtn1' onclick='closepopup2()' src='img/Disabled.png' alt='close-button' width='44' height='45'>
          </div>
          <div class='popup-project-frame'>
              <h3>CANOPY</h3>
              <img src='img/Counter.png' alt='counter' width='8' height='8'>
              <h4>Back End Dev</h4>
              <img src='img/Counter1.png' alt='counter1' width='8' height='8'>
              <h4>2015</h4>
          </div>
      </div>
      <div class='popupsnapshot'>
        <img src=${projectinformation[1].image} alt='pop-image' >
      </div>
      <div class='popup-project-description' id='proj-description'>
      ${projectinformation[1].Description}
      </div>
      <div class='popup-project-tags'>
      <ul>
         <li><img src=${projectinformation[1].tech1}> </li>
         <li><img src=${projectinformation[1].tech2}> </li>
         <li><img src=${projectinformation[1].tech3}> </li>
      </ul>
      </div>
      <div class='popup-project-buttons'>
      <a href=${projectinformation[1].link}> <button>&nbsp&nbsp&nbsp&nbsp  See live <img src='img/btn-img-live.png' width='15' height='15' ></button></a>
      <a href=${projectinformation[1].source}> <button>&nbsp&nbsp&nbsp&nbsp  See Source <img src='img/btn-img-src.png' width='15' height='15'></button></a>
      </div>
  </div>`;
});

function openpopup2() {
  const x = document.querySelectorAll('.popup');
  if (x[1].style.display === 'flex') {
    x[1].style.display = 'none';
  } else {
    x[1].style.display = 'flex';
  }
  x[1].scrollIntoView();
}

function closepopup2() {
  const y = document.querySelectorAll('.popup');
  if (y[1].style.display === 'flex') {
    y[1].style.display = 'none';
  } else {
    y[1].style.display = 'flex';
  }
  workssection[1].classList.toggle('hide');
}

seeprojectbutton[1].addEventListener('click', () => {
  openpopup2();
  workssection[1].classList.toggle('hide');
});

window.addEventListener('DOMContentLoaded', () => {
  popupmodal[2].innerHTML = `<div class='popup'>
        <div class='popup-info-block'>
            <div class='popup-primary-text-box'>
            <div class='popup-project-title'>
            ${projectinformation[2].title}
            <img class='popup-closebtn' onclick='closepopup3()' src='img/Disabled.png' alt='close-button' width='44' height='45'>
          </div>
          <div class='popup-project-frame'>
              <h3>CANOPY</h3>
              <img src='img/Counter.png' alt='counter' width='8' height='8'>
              <h4>Back End Dev</h4>
              <img src='img/Counter1.png' alt='counter1' width='8' height='8'>
              <h4>2015</h4>
          </div>
      </div>
      <div class='popupsnapshot'>
        <img src=${projectinformation[2].image} alt='pop-image' >
      </div>
      <div class='popup-project-description' id='proj-description'>
      ${projectinformation[2].Description}
      </div>
      <div class='popup-project-tags'>
      <ul>
         <li><img src=${projectinformation[2].tech1}> </li>
         <li><img src=${projectinformation[2].tech2}> </li>
         <li><img src=${projectinformation[2].tech3}> </li>
      </ul>
      </div>
      <div class='popup-project-buttons'>
      <a href=${projectinformation[2].link}> <button>&nbsp&nbsp&nbsp&nbsp  See live <img src='img/btn-img-live.png' width='15' height='15' ></button></a>
      <a href=${projectinformation[2].source}> <button>&nbsp&nbsp&nbsp&nbsp  See Source <img src='img/btn-img-src.png' width='15' height='15'></button></a>
      </div>
  </div>`;
});

function openpopup3() {
  const x = document.querySelectorAll('.popup');
  if (x[2].style.display === 'flex') {
    x[2].style.display = 'none';
  } else {
    x[2].style.display = 'flex';
  }
  x[2].scrollIntoView();
}

function closepopup3() {
  const y = document.querySelectorAll('.popup');
  if (y[2].style.display === 'flex') {
    y[2].style.display = 'none';
  } else {
    y[2].style.display = 'flex';
  }
  workssection[2].classList.toggle('hide');
}

seeprojectbutton[2].addEventListener('click', () => {
  openpopup3();
  workssection[2].classList.toggle('hide');
});

window.addEventListener('DOMContentLoaded', () => {
  popupmodal[3].innerHTML = `<div class='popup'>
        <div class='popup-info-block'>
            <div class='popup-primary-text-box'>
            <div class='popup-project-title'>
            ${projectinformation[3].title}
            <img class='popup-closebtn1' onclick='closepopup4()' src='img/Disabled.png' alt='close-button' width='44' height='45'>
          </div>
          <div class='popup-project-frame'>
              <h3>CANOPY</h3>
              <img src='img/Counter.png' alt='counter' width='8' height='8'>
              <h4>Back End Dev</h4>
              <img src='img/Counter1.png' alt='counter1' width='8' height='8'>
              <h4>2015</h4>
          </div>
      </div>
      <div class='popupsnapshot'>
        <img src=${projectinformation[3].image} alt='pop-image' >
      </div>
      <div class='popup-project-description' id='proj-description'>
      ${projectinformation[3].Description}
      </div>
      <div class='popup-project-tags'>
      <ul>
         <li><img src=${projectinformation[3].tech1}> </li>
         <li><img src=${projectinformation[3].tech2}> </li>
         <li><img src=${projectinformation[3].tech3}> </li>
      </ul>
      </div>
      <div class='popup-project-buttons'>
      <a href=${projectinformation[3].link}> <button>&nbsp&nbsp&nbsp&nbsp See live <img src='img/btn-img-live.png' width='15' height='15' ></button></a>
      <a href=${projectinformation[3].source}> <button>&nbsp&nbsp&nbsp&nbsp See Source <img src='img/btn-img-src.png' width='15' height='15'></button></a>
      </div>
  </div>`;
});

function openpopup4() {
  const x = document.querySelectorAll('.popup');
  if (x[3].style.display === 'flex') {
    x[3].style.display = 'none';
  } else {
    x[3].style.display = 'flex';
  }
  x[3].scrollIntoView();
}

function closepopup4() {
  const y = document.querySelectorAll('.popup');
  if (y[3].style.display === 'flex') {
    y[3].style.display = 'none';
  } else {
    y[3].style.display = 'flex';
  }
  workssection[3].classList.toggle('hide');
}

seeprojectbutton[3].addEventListener('click', () => {
  openpopup4();
  workssection[3].classList.toggle('hide');
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
  const myobjectserialized = JSON.stringify(mystoredataobject);
  localStorage.setItem('mystoredataobject', myobjectserialized);
}

function showdata() {
  const stored = JSON.parse(localStorage.getItem('mystoredataobject'));
  document.getElementById('name').value = stored.name;
  document.getElementById('email').value = stored.email;
  document.getElementById('msg').value = stored.msg;
  storedata();
}
showdata();
closepopup1();
closepopup2();
closepopup3();
closepopup4();
