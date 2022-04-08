
const botaoMenu = document.getElementById("btn-menu__hamburguer");
const botaoFechar = document.getElementById("btn-menu__close");

botaoMenu.addEventListener("click", function() {
    document.getElementById("menu-mobile").style.width = "50%";
});

botaoFechar.addEventListener("click", function() {
    document.getElementById("menu-mobile").style.width = "0";
});