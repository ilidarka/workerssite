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