const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 200){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});

const menuBtn = document.getElementById("menuBtn");
const navlinks = document.getElementById("navlinks");

menuBtn.addEventListener("click", () => {

menuBtn.classList.toggle("active");
navlinks.classList.toggle("active");

});

document.addEventListener("click", function(event){

const isClickInsideMenu = navlinks.contains(event.target);
const isClickMenuBtn = menuBtn.contains(event.target);

if(!isClickInsideMenu && !isClickMenuBtn){

menuBtn.classList.remove("active");
navlinks.classList.remove("active");

}

});

document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", () => {

menuBtn.classList.remove("active");
navlinks.classList.remove("active");

});
});