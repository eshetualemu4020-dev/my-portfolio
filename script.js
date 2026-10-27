/* ==========================================================================
   PORTFOLIO SCRIPTS (INSPIRED BY REFERENCE DESIGN)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Typing Text via Typed.js
  if (typeof Typed !== "undefined" && document.querySelector(".multiple-text")) {
    new Typed(".multiple-text", {
      strings: [
        "Computer Science Student",
        "Front-End Developer",
        "Back-End Developer",
        "Software Developer"
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1200,
      loop: true
    });
  }

  // 2. Dynamic Year in Footer
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 3. Mobile Navigation Menu Toggle
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    });

    // Close menu when clicking any nav link
    navbar.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
      });
    });
  }

  // 4. Scrollspy: Highlight Active Nav Link & Sticky Header
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar a");
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    // Sticky header shadow effect
    if (header) {
      header.classList.toggle("sticky", scrollY > 80);
    }

    // Scrollspy active section
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // 5. Contact Form Handler
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('input[type="submit"]');
      const originalVal = submitBtn ? submitBtn.value : "Send Message";

      if (submitBtn) {
        submitBtn.value = "Sending...";
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        if (formMessage) {
          formMessage.className = "success";
          formMessage.textContent = "Thank you! Your message has been sent successfully.";
        }

        contactForm.reset();

        if (submitBtn) {
          submitBtn.value = "Sent Successfully ✓";
          setTimeout(() => {
            submitBtn.value = originalVal;
            submitBtn.disabled = false;
            if (formMessage) {
              formMessage.textContent = "";
              formMessage.className = "";
            }
          }, 4000);
        }
      }, 800);
    });
  }
});