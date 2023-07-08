let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("javaCpython");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("basedatos");
        habilidades[5].classList.add("servidores");
        habilidades[6].classList.add("auditoria");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("equipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("diseño");
        habilidades[12].classList.add("metodo");
        habilidades[13].classList.add("modelo");
        habilidades[0].classList.add("js");




    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

// Obtener el elemento del contador de visitas
var visitsCountElement = document.getElementById("visitsCount");

// Obtener el contador de visitas actual almacenado en el almacenamiento local del navegador
var visitsCount = localStorage.getItem("visitsCount");

// Verificar si ya existe un contador de visitas almacenado
if (visitsCount) {
  visitsCount = parseInt(visitsCount); // Convertir a número entero
  visitsCount++; // Incrementar el contador
} else {
  visitsCount = 1; // Establecer el contador en 1 si no existe
}

// Guardar el nuevo contador de visitas en el almacenamiento local del navegador
localStorage.setItem("visitsCount", visitsCount);

// Mostrar el contador de visitas en la página
visitsCountElement.textContent = visitsCount; 

