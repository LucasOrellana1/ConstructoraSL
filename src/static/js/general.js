
// ----- MENU -----

var miElemento = document.getElementById("botonMenu");
var menu = document.getElementById("menuCel")
        // Agrega un escuchador de eventos para cambiar la clase al hacer clic
miElemento.addEventListener("click", function() {
    // Cambia la clase

    if (menu.style.display === "block"){
        menu.style.display = "none";

    }else{
        menu.style.display = "block";
    }

});
