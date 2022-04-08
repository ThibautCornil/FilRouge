const btn = document.querySelector('.btn1');
const menu = document.querySelector(".menu");
const html = document.querySelector("html");
const titre1 = document.querySelector('#titremenu1');
const titre2 = document.querySelector('#titremenu2');
const titre3 = document.querySelector('#titremenu3');
const titre4 = document.querySelector('#titremenu4');
const titre5 = document.querySelector('#titremenu5');
const titre6 = document.querySelector('#titremenu6');

btn.addEventListener('click', presentation)
titre1.addEventListener('click', presentation)
titre2.addEventListener('click', presentation)
titre3.addEventListener('click', presentation)
titre4.addEventListener('click', presentation)
titre5.addEventListener('click', presentation)
titre6.addEventListener('click', presentation)


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

