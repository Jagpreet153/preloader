var loader=document.querySelector(".preloader");
window.addEventListener('load',function(){
    loader.style.display="none";
   
});

const stars=document.querySelectorAll('#star');

stars.forEach(star=>{
    let duration=Math.random()*(1.2-0.6)+0.6;
    star.style.animation=`stars ${duration}s  infinite linear`;
});
