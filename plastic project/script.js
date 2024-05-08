const header= document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 0)
});


let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
};

const sr = scrollreveal ({
    distance: '30px',
    duration: 2600,
    reset: true
});

sr.reveal(".home-text",{delay:280, origin:"bottom"});
sr.reveal(".featured,.deal,.new,.brand,.contact-text",{delay:280, origin:"bottom"});