
function toggleMenu(menu) {
  menu.classList.toggle('open');
  margin = document.getElementById("main").style.marginLeft;
  if (margin == "250px"){
    //document.getElementById("mobile-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  if (margin == "0"){
    //document.getElementById("mobile-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
}


