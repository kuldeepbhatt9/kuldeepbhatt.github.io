document.documentElement.classList.add("js");

const fadeElements = document.querySelectorAll(".fade-up");

function showAllContent() {
  fadeElements.forEach(element => {
    element.classList.add("visible");
  });
}

/* Smooth scrolling for internal navigation */
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function (event) {
    const id = this.getAttribute("href");

    if (!id || id === "#") {
      return;
    }

    const target = document.querySelector(id);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* Fade-in animation */
if ("IntersectionObserver" in window) {

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observerInstance.unobserve(entry.target);
      }

    });

  }, observerOptions);


  fadeElements.forEach(element => {
    observer.observe(element);
  });

} else {

  /* Older browser fallback */
  showAllContent();

}


/*
  Extra safety:
  if an animation has not triggered for any reason,
  make sure the website can never remain invisible.
*/
window.addEventListener("load", () => {

  setTimeout(() => {
    showAllContent();
  }, 1500);

});
