
const navLinks = document.querySelectorAll(".navigation__menu-link");
const navCheckbox = document.querySelector(".navigation__checkbox");
navLinks.forEach((el)=>{
    el.addEventListener("click", ()=>{
    navCheckbox.checked = false;
})
})