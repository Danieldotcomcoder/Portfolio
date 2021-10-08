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

/*let portfolioinfo = [title1= "" , Description = "",proframe=" ", projimage1 = "", technologies = "", liveversion = "", source = "",
title2 = "", Description = "", projimage2 = "",  liveversion = "", source = ""];*/

title1 = "Tonic";
title2 = "Multi-Post<br>Stories ";
Description = "<p>A daily selection of privately personalized reads; no accounts or sign-ups required </p> "
projimage1 = document.createElement('img');
projimage1.src = "img/desktop/0.png";
projimage2 = document.createElement('img');
projimage2.src = "img/desktop/1.png";
projimage3 = document.createElement('img');
projimage3.src = "img/desktop/2.png";
projimage4 = document.createElement('img');
projimage4.src = "img/desktop/3.png";

const titlelist = document.querySelectorAll('.project-title');
titlelist[0].innerHTML = title1;
titlelist[1].innerHTML = title1;

const titlelist1 = document.querySelectorAll('.project-title1');
titlelist1[0].innerHTML = title2;
titlelist1[1].innerHTML = title2;

const imglist = document.querySelectorAll(".snapshot-portfolio");
imglist[0].appendChild(projimage1);
imglist[1].appendChild(projimage2);
imglist[2].appendChild(projimage3);
imglist[3].appendChild(projimage4);

const prolist = document.querySelectorAll(".project-description");
for (let i = 0; i < 4; i++) {
  prolist[i].innerHTML = Description;
}



technologies = document.querySelectorAll(".project-tags");

var htmlimg = document.createElement('img');
htmlimg.src = "img/html.png";
var cssimg = document.createElement('img');
cssimg.src = "img/css.png";
var jsimg = document.createElement('img');
jsimg.src = "img/javascript.png";

for (let i = 0; i <= 3; i++) {
  technologies[i].appendChild(htmlimg.cloneNode(true));
  technologies[i].appendChild(cssimg.cloneNode(true));
  technologies[i].appendChild(jsimg.cloneNode(true));
}

const projectinformation =
{
  title: "Tonic",
  Description: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p> ",
  image: "img/desktop/0.png",
  tech1: "img/html.png",
  tech2: "img/css.png",
  tech3: "img/javascript.png",
  link: 'https://www.google.com',
  source: "#",
}


const popupmodal = document.querySelector('.popup-modal');

window.addEventListener('DOMContentLoaded', () => {
  popupmodal.innerHTML =
    `<div class="popup">
        <div class="popup-info-block">
            <div class="popup-primary-text-box">
            <div class="popup-project-title">
            ${projectinformation.title}
          </div>
          <div class="popup-project-frame">
              <h3>CANOPY</h3>
              <img src="img/Counter.png" alt="counter" width="8" height="8">
              <h4>Back End Dev</h4>
              <img src="img/Counter1.png" alt="counter1" width="8" height="8">
              <h4>2015</h4>
          </div>
      </div>
      <div class="popupsnapshot">
        <img src=${projectinformation.image} alt="pop-image" >
      </div>
      <div class="popup-project-description" id="proj-description">
      ${projectinformation.Description}
      </div>
      <div class="popup-project-tags">
      <ul>
         <li><img src=${projectinformation.tech1}> </li>
         <li><img src=${projectinformation.tech2}> </li>
         <li><img src=${projectinformation.tech3}> </li>
      </ul>
      </div>
      <div class="popup-project-buttons">
      <button onclick="window.location.href=${projectinformation.link};">&nbsp&nbsp&nbsp&nbsp  See live <img src="img/btn-img-live.png" width="15" height="15" ></button>
      <button onclick="window.location.href=${projectinformation.source};">&nbsp&nbsp&nbsp&nbsp  See Source <img src="img/btn-img-src.png" width="15" height="15"></button>
      </div>
  </div>`;
})

function  openpopup() {
  var x = document.querySelector('.popup');
  if (x.style.display === "flex") {
    x.style.display = "none";
  }  else {
    x.style.display = "flex";
  }
}
const seeprojectbutton = document.querySelector(".seeproject");
const workssection = document.querySelector(".card-works");
//const popupwindow = document.querySelector('.popup-modal');
seeprojectbutton.addEventListener('click', () => {
     openpopup();
      workssection.classList.toggle('hide');
});