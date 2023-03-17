// JS para la construcción de los tabs

const tabs = document.querySelectorAll(".tabs__menu");
const tab = document.querySelectorAll(".tabs__menu-anchors");
const panel = document.querySelectorAll(".panel");
function onTabClick(event) {

    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
    }

    for (let i = 0; i < panel.length; i++) {
        panel[i].classList.remove("active");
    }

    event.target.classList.add('active');
    let classString = event.target.getAttribute('data-target');
    document.getElementsByClassName(classString)[0].classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', onTabClick, false);
}