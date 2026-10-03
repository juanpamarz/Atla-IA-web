const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent =
      "Tu solicitud quedó preparada. Conecta este formulario con el canal de contacto de AtlaIA para enviarla.";
    contactForm.reset();
  });
}

const revealItems = document.querySelectorAll(
  ".problem-item, .solution-step, .process-list article, .service-list > div, .metric, .tech-pipeline > div"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    revealObserver.observe(item);
  });
}
