const navToggle = document.querySelector(".nav-toggle")
const mobileMenu = document.querySelector(".mobile-menu")

const toggleMobileMenu = (e) =>
{
    mobileMenu.className === "mobile-menu" 
    ? mobileMenu.className += " active"
    : mobileMenu.className = "mobile-menu"
}

navToggle.addEventListener("click", toggleMobileMenu)