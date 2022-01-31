const btn = document.querySelector('.btn1');
const menu = document.querySelector(".menu")

btn.addEventListener('click', presentation)

function presentation() {
    btn.classList.toggle('active'); //on / off avec toggle
    if(getComputedStyle(menu).display != "none"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

