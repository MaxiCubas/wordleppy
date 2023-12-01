let intentos = 6;
let diccionario=[
    "AGUAS",
    "AGUDO",
    "BACHE",
    "BALAS",
    "CORRER",
    "AVIÓN",
    "DIETA",
    "ALADO",
    "BICHO",
    "BUENO",
    "BUSCA",
    "CABRA",
    "CAMPO",
    "CHILE",
    "CITAS",
    "COLON",
    "CRUDO",
    "DEJAR",
    "DUNAS",
    "GOHAN",
    "FALTO",
    "BULMA",
    "MAURO",
    "KATYA",
    "BRIAN",
    "LUQUE",
    "FERIA",
    "BILIS",
    "JULIO",
    "JUNIO",
    "MARZO",
    "ABRIL",
    "ELOTE",
    "INDIA",
    "PODER",
    "RENTA",
    "SABIO",
    "TONTO",
    "YOGUR",
    "ZORRO",
    "ZORRA",
    "PERRO",
    "PERRA",
    "PESTE",
    "SEMEN",
    "TERCO",
    "TORPE",
    "VOLAR",
    "VENIR",
    "TOMAR",
    "BESAR",
    "AUTOS",
    "VOTAR",
    "MILEY",
    "JORGE",
    "VEMOS",
    "COGER",
    "ZURDO",
    "AILOS",
    "TAURO",
    "FENIX",
    "AKUMA",
    "DOHKO",
    "LIBRA",
    "ARIES",
    "ARIEL",
];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
window.addEventListener('load', init)
function init(){
}

    
const BOTON = document.getElementById("guess-button");
BOTON.addEventListener("click", intentar);


function intentar() {
    const intento = leerIntento();
    if (intento === palabra) {
        terminar("<h1>¡GANASTE! 😀</h1>");
        return;
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";

    for (let i in palabra) {
        const SPAN = document.createElement("span");
        SPAN.className = "letter";

        if (intento[i] === palabra[i]) { 
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = "#79b851";
        } else if (palabra.includes(intento[i])) {
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = "#f3c237";
        } else { 
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = "#a4aec4";
        }
        ROW.appendChild(SPAN);
    }

    GRID.appendChild(ROW);

    intentos--;

    if (intentos === 0) {
        terminar("<h1>¡PERDISTE! 😖</h1>");
    }
}


function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true; 
    BOTON.disabled = true;

    const answer = document.getElementById("respuesta");

  answer.innerHTML = `LA PALABRA DE HOY ES: ${palabra}`;

    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
    const reloadButton = document.getElementById("reinicio");
    reloadButton.addEventListener("click", function () {
        location.reload();
      });
}
    
  {
    window.addEventListener("load", init);
  }