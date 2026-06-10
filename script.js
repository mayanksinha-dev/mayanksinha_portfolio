/* ==========================================
   MAYANK PORTFOLIO
   PREMIUM SCRIPT
========================================== */

gsap.registerPlugin(ScrollTrigger);

/* ==========================================
   LENIS SMOOTH SCROLL
========================================== */

const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);

/* ==========================================
   LOADER
========================================== */

window.addEventListener('load', () => {

    const tl = gsap.timeline();

    tl.to('.loader-text', {

        y: -50,
        opacity: 0,

        duration: .8,

        ease: 'power3.out'

    })

        .to('.loader', {

            yPercent: -100,

            duration: 1.2,

            ease: 'power4.inOut'

        })

        .from('.hero-title', {

            y: 120,
            opacity: 0,

            duration: 1.2,

            ease: 'power4.out'

        }, "-=.6")

        .from('.hero-subtitle', {

            y: 50,
            opacity: 0,

            duration: .8

        }, "-=1");

});

/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursor =
    document.querySelector('.cursor');

const cursorLabel =
    document.querySelector('.cursor-label');

document.addEventListener('mousemove', (e) => {

    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: .12
    });

    gsap.to(cursorLabel, {
        x: e.clientX,
        y: e.clientY,
        duration: .18
    });

});

/* ==========================================
   CURSOR HOVER STATES
========================================== */

document.querySelectorAll(
    'a, .project-card, .skill-card, .timeline-item'
).forEach(item => {

    item.addEventListener('mouseenter', () => {

        gsap.to(cursor, {
            width: 70,
            height: 70,
            duration: .3
        });

        gsap.to(cursorLabel, {
            opacity: 1,
            duration: .2
        });

    });

    item.addEventListener('mouseleave', () => {

        gsap.to(cursor, {
            width: 16,
            height: 16,
            duration: .3
        });

        gsap.to(cursorLabel, {
            opacity: 0,
            duration: .2
        });

    });

});

/* ==========================================
   FLOATING BLOBS
========================================== */

gsap.to('.blob', {

    y: -40,

    duration: 6,

    repeat: -1,

    yoyo: true,

    stagger: .5,

    ease: 'sine.inOut'

});

/* ==========================================
   FLOATING PROFILE CARD
========================================== */

gsap.to('.profile-card', {

    y: -18,

    duration: 3,

    repeat: -1,

    yoyo: true,

    ease: 'sine.inOut'

});

/* ==========================================
   FLOATING BADGES
========================================== */

gsap.to('.hero-badge', {

    y: -12,

    duration: 2.5,

    repeat: -1,

    yoyo: true,

    stagger: .2,

    ease: 'sine.inOut'

});

/* ==========================================
   HERO PARALLAX
========================================== */

document.addEventListener('mousemove', (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (window.innerHeight / 2 - e.clientY) / 40;

    gsap.to('.blob1', {
        x: x,
        y: y,
        duration: 2
    });

    gsap.to('.blob2', {
        x: -x,
        y: -y,
        duration: 2
    });

    gsap.to('.blob3', {
        x: x / 2,
        y: y / 2,
        duration: 2
    });

});

/* ==========================================
   SECTION REVEALS
========================================== */

gsap.utils.toArray('.section')
    .forEach(section => {

        gsap.from(section, {

            opacity: 0,
            y: 100,

            duration: 1,

            ease: 'power3.out',

            scrollTrigger: {
                trigger: section,
                start: 'top 85%'
            }

        });

    });

/* ==========================================
   SKILLS STAGGER
========================================== */

// gsap.from('.skill-card',{

//     opacity:0,
//     y:40,

//     stagger:.08,

//     duration:.8,

//     scrollTrigger:{
//         trigger:'.skills-grid',
//         start:'top 85%'
//     }

// });
gsap.utils.toArray('.skill-card').forEach(card => {

    gsap.from(card, {

        opacity: 0,
        y: 30,

        duration: 0.8,

        ease: 'power3.out',

        scrollTrigger: {
            trigger: card,
            start: 'top 95%',
            toggleActions: 'play none none none'
        }

    });

});

/* ==========================================
   TIMELINE STAGGER
========================================== */

gsap.utils.toArray('.timeline-item')
    .forEach(card => {

        gsap.from(card, {

            opacity: 0,
            x: -80,

            duration: 1,

            scrollTrigger: {
                trigger: card,
                start: 'top 90%'
            }

        });

    });

/* ==========================================
   PROJECT CARDS REVEAL
========================================== */

gsap.utils.toArray('.project-card')
    .forEach(card => {

        gsap.from(card, {

            opacity: 0,
            y: 120,

            duration: 1,

            scrollTrigger: {
                trigger: card,
                start: 'top 90%'
            }

        });

    });

/* ==========================================
   PROJECT CARD TILT
========================================== */

document.querySelectorAll('.project-card')
    .forEach(card => {

        card.addEventListener('mousemove', (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                (e.clientX - rect.left)
                / rect.width - .5;

            const y =
                (e.clientY - rect.top)
                / rect.height - .5;

            gsap.to(card, {

                rotateY: x * 12,
                rotateX: -y * 12,

                transformPerspective: 1000,

                duration: .3

            });

        });

        card.addEventListener('mouseleave', () => {

            gsap.to(card, {

                rotateX: 0,
                rotateY: 0,

                duration: .5

            });

        });

    });

/* ==========================================
   MAGNETIC BUTTONS
========================================== */

document.querySelectorAll(
    '.contact-links a, .nav-links a'
).forEach(button => {

    button.addEventListener('mousemove', (e) => {

        const rect =
            button.getBoundingClientRect();

        const x =
            e.clientX -
            rect.left -
            rect.width / 2;

        const y =
            e.clientY -
            rect.top -
            rect.height / 2;

        gsap.to(button, {

            x: x * .25,
            y: y * .25,

            duration: .3

        });

    });

    button.addEventListener('mouseleave', () => {

        gsap.to(button, {

            x: 0,
            y: 0,

            duration: .5

        });

    });

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progress =
    document.createElement('div');

progress.classList.add(
    'progress-bar'
);

document.body.appendChild(progress);

Object.assign(progress.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '0%',
    height: '5px',
    background: '#111',
    zIndex: '999999'
});

window.addEventListener('scroll', () => {
    IntersectionObserver
    // const scrollTop =
    // document.documentElement.scrollTop;

    // const height =
    // document.documentElement.scrollHeight -
    // document.documentElement.clientHeight;

    // const percent =
    // (scrollTop / height) * 100;

    // progress.style.width =
    // percent + '%';

});
gsap.utils.toArray('.journey-card')
    .forEach(card => {

        gsap.from(card, {

            y: 80,
            opacity: 0,

            duration: 1,

            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            }

        });

    });
gsap.from(".skills-v2", {
    opacity: 0,
    y: 40,
    duration: 0.8
});
/* ==========================================
   NAVBAR EFFECT
========================================== */

window.addEventListener('scroll', () => {

    const nav =
        document.querySelector('.navbar');

    if (window.scrollY > 80) {

        nav.style.backdropFilter =
            'blur(30px)';

        nav.style.background =
            'rgba(255,255,255,.92)';

    } else {

        nav.style.backdropFilter =
            'blur(20px)';

        nav.style.background =
            'rgba(255,255,255,.75)';
    }

});

/* ==========================================
   MARQUEE SPEED BOOST
========================================== */

const marquee =
    document.querySelector('.track');

if (marquee) {

    gsap.to(marquee, {

        xPercent: -50,

        ease: 'none',

        duration: 20,

        repeat: -1

    });

}

/* ==========================================
   CONTACT CARD REVEAL
========================================== */

gsap.from('.contact-card', {

    scale: .9,
    opacity: 0,

    duration: 1,

    scrollTrigger: {
        trigger: '.contact-card',
        start: 'top 85%'
    }

});
gsap.to(".contact-shape", {

    y: -20,

    duration: 3,

    repeat: -1,

    yoyo: true,

    stagger: .2,

    ease: "sine.inOut"

});
/* ==========================================
   CONSOLE CREDIT
========================================== */

console.log(
    '%c🚀 Portfolio by Mayank Sinha',
    'font-size:18px;font-weight:bold;color:#111;'
);
/* =========================================
   LENIS SMOOTH SCROLL
========================================= */

// const lenis = new Lenis({

//     duration: 1.2,

//     smoothWheel: true,

//     wheelMultiplier: 0.9,

//     touchMultiplier: 1.5,

//     infinite: false

// });
// if(typeof Lenis !== "undefined"){

//     const lenis = new Lenis({
//         duration:1.1,
//         smoothWheel:true
//     });

//     function raf(time){

//         lenis.raf(time);

//         requestAnimationFrame(raf);

//     }

//     requestAnimationFrame(raf);

// }

// function raf(time){

//     lenis.raf(time);

//     requestAnimationFrame(raf);

// }

// requestAnimationFrame(raf);
// lenis.on('scroll', () => {

//     document.body.classList.add('scrolling');

//     clearTimeout(window.scrollTimer);

//     window.scrollTimer = setTimeout(() => {

//         document.body.classList.remove('scrolling');

//     }, 150);

// });
// window.addEventListener("load", () => {

//     const loader =
//     document.querySelector(".loader");

//     if(loader){

//         loader.style.opacity = "0";

//         setTimeout(() => {

//             loader.style.display = "none";

//         }, 500);

//     }

// });
/* =====================================
   MOBILE SIDEBAR
===================================== */

/* =====================================
   MOBILE SIDEBAR
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn =
        document.querySelector(".mobile-menu-btn");

    const sidebar =
        document.querySelector(".mobile-sidebar");

    const overlay =
        document.querySelector(".sidebar-overlay");

    if (menuBtn && sidebar && overlay) {

        menuBtn.addEventListener("click", () => {

            const icon =
                menuBtn.querySelector("span");

            if (sidebar.classList.contains("active")) {

                sidebar.classList.remove("active");

                overlay.classList.remove("active");

                icon.textContent = "☰";

            } else {

                sidebar.classList.add("active");

                overlay.classList.add("active");

                icon.textContent = "✕";

            }

        });
        overlay.addEventListener("click", () => {

            sidebar.classList.remove("active");

            overlay.classList.remove("active");

            menuBtn.querySelector("span").textContent = "☰";

        });

        document
            .querySelectorAll(".mobile-sidebar a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    sidebar.classList.remove("active");

                    overlay.classList.remove("active");

                    menuBtn.querySelector("span").textContent = "☰";

                });

            });

    }

});
const overlay =
    document.querySelector(".sidebar-overlay");

// menuBtn.addEventListener("click",()=>{

//     sidebar.classList.toggle("active");

//     overlay.classList.toggle("active");

// });

// overlay.addEventListener("click", () => {

//     sidebar.classList.remove("active");

//     overlay.classList.remove("active");

// });