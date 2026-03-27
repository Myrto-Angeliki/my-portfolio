const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const scrollBtn = document.getElementById("top-btn");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");   
  navLinks.classList.toggle("open");   
});


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  });
});


window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  if (scrollPos > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo(0,0);
});
