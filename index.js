
function openNav(menu) {
  menu.classList.toggle('open');
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav(menu) {
  menu.classList.toggle('open');
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
