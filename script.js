const btn = document.querySelector('.btn1');
const menu = document.querySelector(".menu");
const html = document.querySelector("html");

btn.addEventListener('click', presentation)

function presentation() {
    btn.classList.toggle('active'); //on / off avec toggle
    if(getComputedStyle(menu).display != "none"){
        menu.style.display = "none";
        html.style.overflow = "visible";
    } else {
        menu.style.display = "block";
        html.style.overflow = "hidden";

    }
}

