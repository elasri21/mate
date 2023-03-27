const toggleNav = document.querySelector(".toggle-nav");
const nav = document.querySelector("nav");
toggleNav.addEventListener("click", function() {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        nav.style.display = "none";
    } else {
        this.classList.add("clicked");
        nav.style.display = "block";
    }
});

// header
const header = document.querySelector("header");
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY < 200) {
        header.classList.remove("white-bg");
        goUp.style.opacity = "0";
    } else if (this.scrollY >= 200) {
        header.classList.add("white-bg");
        goUp.style.opacity = "1";
    }
});


// portfolio
const categories = Array.from(document.querySelectorAll(".categories span"));
const projects = Array.from(document.querySelectorAll(".project"));
categories.forEach(span => {
    span.addEventListener("click", function (){
        for(let i = 0; i < categories.length; i++) {
            categories[i].classList.remove("active");
        }
        projects.forEach(p => {
            if(p.dataset.id == this.id && this.id != "all") {
                p.classList.remove("hide");
            } else if(this.id == "all") {
                p.classList.remove("hide");
            } else {
                p.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});
// https://preview.uideck.com/items/mate-1.2/