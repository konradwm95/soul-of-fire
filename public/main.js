const overlayMenu = document.querySelector(".overlay_menu");
const hamburgerMenu = document.querySelector(".hamburger_menu");
closeButton = document.querySelector(".close_button");

hamburgerMenu.addEventListener("click", ()=> {
    overlayMenu.classList.add("open");
});
closeButton.addEventListener("click", ()=> {
    overlayMenu.classList.remove("open");
})

