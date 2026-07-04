/*==================================================
            PORTFOLIO JAVASCRIPT
==================================================*/

/*==================================================
                SELECT ELEMENTS
==================================================*/

const header = document.querySelector("header");

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

const navLinks = document.querySelectorAll("nav ul li a");

const scrollTopBtn = document.getElementById("scrollTop");

/*==================================================
                MOBILE MENU
==================================================*/

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {

        menuBtn.innerHTML =
        '<i class="ri-close-line"></i>';

    }

    else {

        menuBtn.innerHTML =
        '<i class="ri-menu-3-line"></i>';

    }

});

/*==================================================
        CLOSE MENU AFTER CLICKING LINK
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="ri-menu-3-line"></i>';

    });

});

/*==================================================
                STICKY HEADER
==================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.style.background =
        "rgba(255,255,255,0.95)";

        header.style.backdropFilter =
        "blur(18px)";

        header.style.boxShadow =
        "0 10px 35px rgba(124,58,237,.10)";

    }

    else{

        header.style.background =
        "rgba(255,255,255,.82)";

        header.style.boxShadow =
        "none";

    }

});

/*==================================================
            SMOOTH SCROLLING
==================================================*/

document.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

    anchor.addEventListener("click",

    function(e){

        e.preventDefault();

        const target =
        document.querySelector(

        this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==================================================
            SCROLL TO TOP BUTTON
==================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        scrollTopBtn.classList.add("show");

    }

    else{

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

console.log("Part 1 Loaded Successfully 🚀");

/*==================================================
        ACTIVE NAVIGATION ON SCROLL
==================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

/*==================================================
        REVEAL ANIMATION
==================================================*/

const revealItems = document.querySelectorAll(

".about-image, .about-content, .skill-card, .project-card, .timeline-item, .info-box, .contact-form"

);

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = "all .8s ease";

});

function revealElements(){

    revealItems.forEach(item => {

        const windowHeight = window.innerHeight;

        const itemTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if(itemTop < windowHeight - revealPoint){

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);

/*==================================================
            HERO IMAGE PARALLAX
==================================================*/

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x = (window.innerWidth / 2 - e.pageX) / 35;

    const y = (window.innerHeight / 2 - e.pageY) / 35;

    heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});

/*==================================================
            BUTTON HOVER EFFECT
==================================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-6px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});

/*==================================================
        PROJECT CARD ANIMATION
==================================================*/

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

/*==================================================
        SKILL CARD ANIMATION
==================================================*/

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

/*==================================================
        TIMELINE ANIMATION
==================================================*/

const timelineCards =
document.querySelectorAll(".timeline-content");

timelineCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateX(10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateX(0px)";

    });

});

console.log("Part 2 Loaded Successfully 🚀");

/*==================================================
            CONTACT FORM
==================================================*/

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "2px solid #ef4444";

            } else {

                input.style.border = "none";

            }

        });

        if (!valid) {

            alert("Please fill in all the fields.");

            return;

        }

        alert("🎉 Thank you, Saijee! Your message has been sent successfully.");

        contactForm.reset();

    });

}

/*==================================================
            COPYRIGHT YEAR
==================================================*/

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
    `© ${new Date().getFullYear()} Saijee Itokar | All Rights Reserved.`;

}

/*==================================================
            PAGE LOADING EFFECT
==================================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s ease";

        document.body.style.opacity = "1";

    },100);

});

/*==================================================
            CURSOR GLOW EFFECT
==================================================*/

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

/*==================================================
            WINDOW RESIZE
==================================================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth > 900){

        nav.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="ri-menu-3-line"></i>';

    }

});

/*==================================================
            PREVENT IMAGE DRAG
==================================================*/

document.querySelectorAll("img").forEach(image=>{

    image.setAttribute("draggable","false");

});

/*==================================================
            CONSOLE MESSAGE
==================================================*/

console.log("%cWelcome to Saijee Itokar's Portfolio 💜",
"color:#7C3AED;font-size:18px;font-weight:bold;");

console.log("%cDesigned with HTML, CSS & JavaScript",
"color:#555;font-size:14px;");

console.log("%cAspiring Data Analyst 🚀",
"color:#A855F7;font-size:14px;");

/*==================================================
            END OF SCRIPT
==================================================*/