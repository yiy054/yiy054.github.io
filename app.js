const scrollUp = document.querySelector("#scroll-up");

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// const bg=document.querySelector(".bg");


scrollUp.addEventListener("click", () => 
    {window.scrollTo({top: 0, left: 0, behavior: "smooth",}); 
});

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

// bg.addEventListener("scroll", ()=>{
//     const scrollY = window.scrollY;
//     if(scrollY != 0){
//         bg.style.backgroundPosition = "calc(50% +" +scrollY+ "px) calc(50% +" +scrollY+ "px)"; 
//     }else{
//         bg.style.backgroundPosition = "";
//     }
// });