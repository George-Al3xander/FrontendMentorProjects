let btn = document.getElementById("btn-menu");
let close= document.getElementById("btn-close");
let menu = document.querySelector(".mobile-menu");
let body = document.body;
//body - overflow: hidden;
//mobile menu - display:flex

function showMenu() {    
    menu.style.display = "flex";
    body.style.overflow = "hidden";    
}

function closeMenu() {
    menu.style.display = "none";
    body.style.overflow = "auto";
}


