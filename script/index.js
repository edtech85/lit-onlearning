// DROP MENU JS

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
// DROP MENU JS


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function cursosFunction() {
  document.getElementById("cursosDropdown").classList.toggle("show");
  document.getElementById("ajudaDropdown").classList.remove("show");
  document.getElementById("avatarDropdown").classList.remove("show");
}
function ajudaFunction() {
  document.getElementById("cursosDropdown").classList.remove("show");
  document.getElementById("ajudaDropdown").classList.toggle("show");
  document.getElementById("avatarDropdown").classList.remove("show");
}
function avatarFunction() {
  document.getElementById("cursosDropdown").classList.remove("show");
  document.getElementById("ajudaDropdown").classList.remove("show");
  document.getElementById("avatarDropdown").classList.toggle("show");
}


window.addEventListener("click", function (event){
  if (!event.target.matches(".dropdown-content-avatar") ) {
    var dropdowns = document.getElementsByClassName("dropdown-content-avatar");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  } 
});

window.addEventListener("click", function (event){
  if (!event.target.matches(".dropdown-content-ajuda") ) {
    var dropdowns = document.getElementsByClassName("dropdown-content-ajuda");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  } 
});

window.addEventListener("click", function (event){
  if (!event.target.matches(".dropdown-content-cursos") ) {
    var dropdowns = document.getElementsByClassName("dropdown-content-cursos");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  } 
});
