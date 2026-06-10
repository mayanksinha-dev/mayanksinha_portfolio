/* =========================================
   LIGHTBOX
========================================= */
window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

const cards =
document.querySelectorAll(".card");

const lightbox =
document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `

    <span class="close-lightbox">
        &times;
    </span>

    <img src="" alt="Certificate">

`;

document.body.appendChild(lightbox);

const lightboxImg =
lightbox.querySelector("img");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        const img =
        card.querySelector("img");

        lightboxImg.src =
        img.src;

        lightbox.classList.add("active");

    });

});

lightbox.addEventListener("click",(e)=>{

    if(
        e.target === lightbox ||
        e.target.classList.contains("close-lightbox")
    ){

        lightbox.classList.remove("active");

    }

});

/* =========================================
   ESC TO CLOSE
========================================= */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});

/* =========================================
   FILTERS
========================================= */

const filterButtons =
document.querySelectorAll(".filters button");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});

/* =========================================
   ENTRANCE ANIMATION
========================================= */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:.1
}

);

cards.forEach(card=>{

    observer.observe(card);

});

/* =========================================
   MOUSE GLOW
========================================= */

if(window.innerWidth > 768){

    const glow =
    document.createElement("div");

    glow.className =
    "mouse-glow";

    document.body.appendChild(glow);

    document.addEventListener(

    "mousemove",

    e=>{

        glow.style.left =
        e.clientX + "px";

        glow.style.top =
        e.clientY + "px";

    }

    );

}

/* =========================================
   RANDOM STAGGER LOAD
========================================= */

window.addEventListener("load",()=>{

cards.forEach((card,index)=>{

card.animate(

[
{
opacity:0,
transform:
"translateY(80px)"
},

{
opacity:1,
transform:
"translateY(0)"
}
],

{
duration:700,
delay:index*120,
fill:"forwards",
easing:"ease-out"
}

);

});

});

/* =========================================
   FILTER SUPPORT
========================================= */

const cardsList =
document.querySelectorAll(".card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

const filter =
button.textContent.trim();

cardsList.forEach(card=>{

const category =
card.querySelector(".info span")
.textContent.trim();

if(

filter==="All" ||
filter===category

){

card.style.display =
"inline-block";

}else{

card.style.display =
"none";

}

});

});

});

/* =========================================
   PARALLAX BLOBS
========================================= */

const blobs =
document.querySelectorAll(".bg-blob");

if(window.innerWidth > 768){

document.addEventListener(

"mousemove",

e=>{

const x =
e.clientX /
window.innerWidth;

const y =
e.clientY /
window.innerHeight;

blobs.forEach((blob,index)=>{

const speed =
(index+1)*15;

blob.style.transform =

`translate(
${x*speed}px,
${y*speed}px
)`;

});

}

);

}