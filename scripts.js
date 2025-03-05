document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded");

    /* Sticky Navbar */
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    /* Smooth Scrolling with Offset */
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetElement = document.getElementById(this.getAttribute("href").substring(1));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight,
                    behavior: "smooth"
                });
            }
        });
    });

    /* Active Link Highlighting */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const highlightNavLink = () => {
        let scrollY = window.scrollY + navbar.offsetHeight;
        sections.forEach(section => {
            if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.toggle("active", link.getAttribute("href").substring(1) === section.id);
                });
            }
        });
    };

    window.addEventListener("scroll", highlightNavLink);
    highlightNavLink(); // Run on page load

    /* Auto-Close Mobile Menu */
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click();
            }
        });
    });

    /* Scroll-to-Top Button */
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollTopBtn.classList.add("scroll-to-top");
    document.body.appendChild(scrollTopBtn);

    const toggleScrollTopBtn = () => {
        scrollTopBtn.style.opacity = window.scrollY > 300 ? "1" : "0";
        scrollTopBtn.style.pointerEvents = window.scrollY > 300 ? "auto" : "none";
    };

    window.addEventListener("scroll", toggleScrollTopBtn);
    toggleScrollTopBtn(); // Run on page load

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* Fade-in Animations */
    const fadeElements = document.querySelectorAll(".fade-in");

    const fadeInOnScroll = () => {
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on page load
});
