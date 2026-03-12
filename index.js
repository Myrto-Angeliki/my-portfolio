function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    margin = document.getElementById("main").style.marginLeft;
    if (margin == "250px"){
        document.getElementById("main").style.marginLeft = "0";
    }
    else{
        document.getElementById("main").style.marginLeft = "250px";
    }
}
