const slider =
document.querySelector('.slider');
const slides =
document.querySelectorAll('.slides img');
let currentslide=0;

setInterval(()=>{
    currentslide =(currentslide + 1) % slides.length;
    slider.computedStyleMap.transform =`translateX(-${currentslide * 100}%)`;
},3000
);




















