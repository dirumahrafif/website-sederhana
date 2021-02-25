var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}