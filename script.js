let btn = document.querySelector('#theme');
let darkMode = document.body;
let image =  document.querySelector('#theme');
let user = document.querySelector('#user');

btn.addEventListener('click', function onClick(event) {

    // changing moon into light bulb
    if (image.src.match("img/icons8-moon-100.png")) {
        image.src = "img/icons8-light-100.png";
    }
    else {
        image.src = "img/icons8-moon-100.png";
    }

    // changing black into white
    if (user.src.match("img/black.png")) {
        user.src = "img/white.png";
    }
    else {
        user.src = "img/black.png";
    }

    darkMode.classList.toggle('dark-mode'); 
    
});


//Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Get the button
let mybutton = document.getElementById("arrow");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2300 || document.documentElement.scrollTop > 2300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
