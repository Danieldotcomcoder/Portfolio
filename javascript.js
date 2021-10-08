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

let portfolioinfo = [title1= '' , Description = '',proframe=' ', projimage1 = '', technologies = '', liveversion = '', source = '',
title2 = '', Description = '', projimage2 = '',  liveversion = '', source = ''];

title1 = 'Tonic';
title2 = 'Multi-Post<br>Stories ';
Description = '<p>A daily selection of privately personalized reads; no accounts or sign-ups required </p> '
projimage1 = document.createElement('img');
projimage1.src = 'img/desktop/0.png';
projimage2 = document.createElement('img');
projimage2.src = 'img/desktop/1.png';
projimage3 = document.createElement('img');
projimage3.src = 'img/desktop/2.png';
projimage4 = document.createElement('img');
projimage4.src = 'img/desktop/3.png';

const titlelist = document.querySelectorAll('.project-title');
titlelist[0].innerHTML = title1;
titlelist[1].innerHTML = title1;

const titlelist1 = document.querySelectorAll('.project-title1');
titlelist1[0].innerHTML = title2;
titlelist1[1].innerHTML = title2;

const imglist = document.querySelectorAll('.snapshot-portfolio');
imglist[0].appendChild(projimage1);
imglist[1].appendChild(projimage2);
imglist[2].appendChild(projimage3);
imglist[3].appendChild(projimage4);

const prolist = document.querySelectorAll('.project-description');
for (let i = 0; i < 4; i++) {
  prolist[i].innerHTML = Description;
}



technologies = document.querySelectorAll('.project-tags');

var htmlimg = document.createElement('img');
htmlimg.src = 'img/html.png';
var cssimg = document.createElement('img');
cssimg.src = 'img/css.png';
var jsimg = document.createElement('img');
jsimg.src = 'img/javascript.png';

for (let i = 0; i <= 3; i++) {
  technologies[i].appendChild(htmlimg.cloneNode(true));
  technologies[i].appendChild(cssimg.cloneNode(true));
  technologies[i].appendChild(jsimg.cloneNode(true));
}

const projectinformation = [    // stores information for all projects           
  {
    title: 'Tonic',
    Description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p> ',
    image: 'img/desktop/0.png',
    tech1: 'img/html.png',
    tech2: 'img/css.png',
    tech3: 'img/javascript.png',
    link: '#',
    source: 'https://github.com/Danieldotcomcoder/Danieldotcomcoder.github.io',
  },
  {
    title: 'Multi-Post Stories ',
    Description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p> ',
    image: 'img/desktop/1.png',
    tech1: 'img/html.png',
    tech2: 'img/css.png',
    tech3: 'img/javascript.png',
    link: '#',
    source: 'https://github.com/Danieldotcomcoder/Danieldotcomcoder.github.io',
  },
  {
    title: 'Tonic',
    Description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p> ',
    image: 'img/desktop/2.png',
    tech1: 'img/html.png',
    tech2: 'img/css.png',
    tech3: 'img/javascript.png',
    link: '#',
    source: 'https://github.com/Danieldotcomcoder/Danieldotcomcoder.github.io',
  },
  {
    title: 'Multi-Post Stories ',
    Description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p> ',
    image: 'img/desktop/3.png',
    tech1: 'img/html.png',
    tech2: 'img/css.png',
    tech3: 'img/javascript.png',
    link: '#',
    source: 'https://github.com/Danieldotcomcoder/Danieldotcomcoder.github.io',
  },
]

const popupmodal = document.querySelectorAll('.popup-modal');

window.addEventListener('DOMContentLoaded', () => {
  popupmodal[0].innerHTML =
    `<div class='popup'>
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
})

function openpopup1() {
  var x = document.querySelectorAll('.popup');
  if (x[0].style.display === 'flex') {
    x[0].style.display = 'none';
  } else {
    x[0].style.display = 'flex';
  }
  window.scroll({ top: 560 });
}

function closepopup1() {
  var y = document.querySelectorAll('.popup');
  if (y[0].style.display === 'flex') {
    y[0].style.display = 'none';
  } else {
    y[0].style.display = 'flex';
  }
  workssection[0].classList.toggle('hide');
}

const seeprojectbutton = document.querySelectorAll('.seeproject');
const workssection = document.querySelectorAll('.card-works');

seeprojectbutton[0].addEventListener('click', () => {
  openpopup1();
  workssection[0].classList.toggle('hide');
});

window.addEventListener('DOMContentLoaded', () => {
  popupmodal[1].innerHTML =
    `<div class='popup'>
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
})
function openpopup2() {
  var x = document.querySelectorAll('.popup');
  if (x[1].style.display === 'flex') {
    x[1].style.display = 'none';
  } else {
    x[1].style.display = 'flex';
  }
  window.scroll({ top: 1330 });
}

function closepopup2() {
  var y = document.querySelectorAll('.popup');
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
  popupmodal[2].innerHTML =
    `<div class='popup'>
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
})
function openpopup3() {
  var x = document.querySelectorAll('.popup');
  if (x[2].style.display === 'flex') {
    x[2].style.display = 'none';
  } else {
    x[2].style.display = 'flex';
  }
  window.scroll({ top: 2100 });
}

function closepopup3() {
  var y = document.querySelectorAll('.popup');
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
  popupmodal[3].innerHTML =
    `<div class='popup'>
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
      <a href=${projectinformation[3].link}> <button>&nbsp&nbsp&nbsp&nbsp  See live <img src='img/btn-img-live.png' width='15' height='15' ></button></a>
      <a href=${projectinformation[3].source}> <button>&nbsp&nbsp&nbsp&nbsp  See Source <img src='img/btn-img-src.png' width='15' height='15'></button></a>
      </div>
  </div>`;
})
function openpopup4() {
  var x = document.querySelectorAll('.popup');
  if (x[3].style.display === 'flex') {
    x[3].style.display = 'none';
  } else {
    x[3].style.display = 'flex';
  }
  window.scroll({ top: 2870 });
}

function closepopup4() {
  var y = document.querySelectorAll('.popup');
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