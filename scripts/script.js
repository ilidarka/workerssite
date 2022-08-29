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
console.log(workInfo);
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

workInfo.onclick = function() {
    console.log("zxc");
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};