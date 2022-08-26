//sticke header script
window.onscroll = function() {stickyheaderFunction()};

var header = document.getElementById("headerId");

var stickyHeader = header.offsetTop;

function stickyheaderFunction() {
    if(window.pageYOffset >= stickyHeader) {
        header.classList.add("stickyHeader");
    } else {
        header.classList.remove("stickyHeader");
    }
}