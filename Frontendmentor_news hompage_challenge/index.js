const navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close'),
navMenu = document.getElementById('nav-menu')

if(navToggle){
  navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show__menu');
  })
}

if(navClose){
  navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show__menu')
  })
}




