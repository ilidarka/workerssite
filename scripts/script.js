//sticky header script
window.onscroll = function() {stickyheaderFunction()};

var header = document.getElementById("headerId");

var stickyHeader = header.offsetTop;

function stickyheaderFunction() {
    if(window.pageYOffset >= stickyHeader) {
        header.classList.add("stickyHeader");
    } else {
        header.classList.remove("stickyHeader");
    }
};

//burger menu script
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
};

//modal window script
var modal = document.getElementById("modalWindow");
var firstBtn = document.getElementById("firstModalButton");
var secondBtn = document.getElementById("secondModalButton");
var thirdBtn = document.getElementById("thirdModalButton");
var workInfo = document.getElementsByClassName("workInfo");
var span = document.getElementsByClassName("closeButton")[0];

firstBtn.onclick = function() {
    modal.style.display = "block";
};

secondBtn.onclick = function() {
    modal.style.display = "block";
};

thirdBtn.onclick = function() {
    modal.style.display = "block";
};

for(var i = 0; i < workInfo.length; i++) {
    workInfo[i].onclick = function() {
        modal.style.display = "block";
    }
}

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};

//slider script
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}