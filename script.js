/* Make active nav item correspont with section (ID) in viewport */
const activeNavState = () =>
{
    /* Create an observer */
    const observer = new IntersectionObserver(entries =>
    {
        /* For each section (ID) in viewport, adjust nav link's class to correspond with target */
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id")
            if (entry.intersectionRatio > 0) {
                document.querySelector(`.nav-link a[href="#${id}"]`).classList.add("active")
            } else {
                document.querySelector(`.nav-link a[href="#${id}"]`).classList.remove("active")
            }
        })
    })
    /* Observe all sections */
    document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section)
    })
}
window.addEventListener("DOMContentLoaded", activeNavState)

/* Switch to mobile menu when screen width is less than 650px */
const toggleNavType = () =>
{
    if (window.innerWidth < 650) {
        document.querySelector(".nav-items").setAttribute("id", "mobile-nav")
    } else {
        document.querySelector(".nav-items").setAttribute("id", "")
    }
}
/* Check screen width on page load and resize */
window.addEventListener("DOMContentLoaded", toggleNavType)
window.addEventListener("resize", (e) => toggleNavType(e))