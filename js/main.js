const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBrand = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial state of menu
let menuState = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {    
    if(!menuState) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBrand.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));
        //Reset state
        menuState = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBrand.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));
        //Reset state
        menuState = false;
    }
}