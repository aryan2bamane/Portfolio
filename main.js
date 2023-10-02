import './components/about.css'
import './components/contact.css'
import './components/footer.css'
import './components/header.css'
import './components/intro.css'
import './components/projects.css'
import './components/skills.css'
import './components/style.css'


let hamburger = document.querySelector(".hamburger");
let header = document.querySelector("header");
let nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
    header.classList.toggle("expanded");
    nav.classList.toggle("active");
})