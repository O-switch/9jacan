window.onscroll = () => {
    menu.classList.remove('active')
}
let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('menu')
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active')
})

// topbtn function
let scrollBtn=document.querySelector('.topbtn')
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // adjust the value to your liking
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'mooth' });
});

// slideshow function
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}