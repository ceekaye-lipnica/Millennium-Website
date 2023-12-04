// TOGGLE MENU 
const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header-mobile-nav");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headNav.classList.toggle("open");
});

// CHANGING THE COLOR OF HEADER 
const headerr = document.querySelector(".header-desktop");
window.addEventListener("scroll", () => { 
	if (window.pageYOffset >= 100) {
		headerr.classList.add("changeToBlack");
	} else {
		headerr.classList.remove("changeToBlack");
	}
});
