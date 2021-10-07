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
for(let i=0 ; i < 4 ; i++){
 prolist[i].innerHTML = Description;
}



technologies = document.querySelectorAll(".project-tags");

  var htmlimg = document.createElement('img');
  htmlimg.src = "img/html.png"; 
  var cssimg = document.createElement('img');
  cssimg.src = "img/css.png"; 
  var jsimg = document.createElement('img');
  jsimg.src = "img/javascript.png"; 
  
  for (let i=0; i<=3; i++){
  technologies[i].appendChild(htmlimg.cloneNode(true));
  technologies[i].appendChild(cssimg.cloneNode(true));
  technologies[i].appendChild(jsimg.cloneNode(true));
  }

  const projectinformation = [
    {
    title:"Tonic1",
    Description:"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p> ",
    image:"img/desktop/0.png",
    technologies:"HMTL,CSS,JAVASCRIPT",
    link:"#",
    source:"#",
    },
    {
    title:"Multi-Post<br>Stories",
    Description:"<p>A daily selection of privately personalized reads; no accounts or sign-ups required </p>",
    image:"img/desktop/1.png",
    technologies:"HTML,CSS,JAVASCRIPT",
    link:"#",
    source:"#",
    },
    {
    title:"Tonic1",
    Description:"<p>A daily selection of privately personalized reads; no accounts or sign-ups required </p> ",
    image:"img/desktop/2.png",
    technologies:"HMTL,CSS,JAVASCRIPT",
    link:"#",
    source:"#",
    },
    {
    title:"Multi-Post<br>Stories",
    Description:"<p>A daily selection of privately personalized reads; no accounts or sign-ups required </p> ",
    image:"img/desktop/3.png",
    technologies:"HMTL,CSS,JAVASCRIPT",
    link:"#",
    source:"#",
    },
  ]
  
  const portfoliocards = document.querySelectorAll('.card-works');
 const seeprobutton = document.querySelectorAll(".seeproject");
 var closeimg = document.createElement('img');
 closeimg.src = "img/Xicon.png";
 closeimg.style.width = "25px";
 closeimg.style.height = "25px";
 closeimg.style.marginLeft = "10%";
 closeimg.style.marginTop = "3%";
 portfoliocards[0].appendChild(closeimg);


 for (i of seeprobutton){

  i.addEventListener('click', () => {
 
  
  portfoliocards[0].classList.toggle('popup');
  
  
  
 
 const titlelist1popup = document.querySelectorAll('.project-title');
 const titlelist2popup = document.querySelectorAll('.project-title1');
 
 titlelist1popup[0].innerHTML = projectinformation[0].title;
 titlelist1popup[1].innerHTML = projectinformation[1].title;
 titlelist1popup[0].innerHTML = projectinformation[2].title;
 titlelist1popup[1].innerHTML = projectinformation[3].title;

 //const imagelistpop =  document.querySelectorAll(".snapshot-portfolio");
 
 const descriptionlist = document.querySelectorAll('.popup .project-description');
 
 for(let i=0 ; i < 4 ; i++){
 descriptionlist[i].innerHTML = projectinformation[i].Description;
 }

});
}



closeimg.addEventListener('click', () => { 
  portfoliocards[0].classList.toggle('popup');

 })