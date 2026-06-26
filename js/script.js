/*==========================================
            MANN MITRA
==========================================*/

const header = document.querySelector(".header");

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const fadeElements = document.querySelectorAll(".fade-up");



/*==========================================
        STICKY NAVBAR
==========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.padding = "12px 0";

        header.style.background = "rgba(255,255,255,.75)";

        header.style.backdropFilter = "blur(18px)";

    }

    else {

        header.style.padding = "20px 0";

        header.style.background = "transparent";

        header.style.backdropFilter = "none";

    }

});



/*==========================================
        MOBILE MENU
==========================================*/

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});



/*==========================================
        CLOSE MENU
==========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});



/*==========================================
        ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/*==========================================
        FADE UP ANIMATION
==========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: .15

});

fadeElements.forEach(element => {

    observer.observe(element);

});



/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});



/*==========================================
        COUNTER
==========================================*/

const counters = document.querySelectorAll(".stat-card h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.innerText);

        if (isNaN(target)) return;

        let current = 0;

        const increment = target / 80;

        const update = () => {

            current += increment;

            if (current < target) {

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(update);

            }

            else {

                counter.innerText = target + "+";

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});



/*==========================================
        BUTTON RIPPLE
==========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});



/*==========================================
        PAGE LOADER
==========================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});



/*==========================================
            BOOKING MODAL
==========================================*/

const bookingModal = document.getElementById("bookingModal");

const openButtons = document.querySelectorAll(".open-booking");

const closeModal = document.getElementById("closeModal");

/*==========================================
        MINIMUM BOOKING DATE
==========================================*/

const dateInput = document.getElementById("date");

const tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() + 1);

const year = tomorrow.getFullYear();

const month = String(tomorrow.getMonth() + 1).padStart(2, "0");

const day = String(tomorrow.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;

openButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        bookingModal.classList.add("active");

        document.body.style.overflow="hidden";

    });

});

closeModal.addEventListener("click",()=>{

    bookingModal.classList.remove("active");

    document.body.style.overflow="auto";

});

bookingModal.addEventListener("click",(e)=>{

    if(e.target===bookingModal){

        bookingModal.classList.remove("active");

        document.body.style.overflow="auto";

    }

});