const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function(event) {

    const id = this.getAttribute("href");

    if (id.length > 1) {

      event.preventDefault();

      const target = document.querySelector(id);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    }

  });
});
