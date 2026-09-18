const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const scrollBtn = document.getElementById("top-btn");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

if (scrollBtn) {
  const updateScrollButton = () => {
    scrollBtn.classList.toggle("show", window.scrollY > 400);
  };

  window.addEventListener("scroll", updateScrollButton, { passive: true });
  updateScrollButton();

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
