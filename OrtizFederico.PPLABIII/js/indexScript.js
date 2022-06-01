import Anuncio_Auto from "./anuncio_auto.js"
import { getLocalStorageData } from "./localStorage.js";

var localData;

window.addEventListener("load", () => {
    localData = getLocalStorageData(Anuncio_Auto.getLocalStorage());
    console.log(localData);

    localData.forEach(item => {
        createDivs(item);
    });
});

function createDivs(item) {
    const article = document.querySelector("#articles");
    const div = document.createElement("div");
    div.className = "article";

    const title = document.createElement("h2");
    const description = document.createElement("p");
    
    const price = document.createElement("p");
    price.id = "price";

    const puertas = document.createElement("p");
    puertas.style.display = "inline-block";

    const km = document.createElement("p");
    km.style.display = "inline-block";
    
    const potencia = document.createElement("p");
    potencia.style.display = "inline-block";    

    const puertasIcon = document.createElement("img");
    puertasIcon.src = "./imagenes/door.png";
    puertasIcon.style.margin = "5px";
    puertasIcon.id = "iconIndex"

    const kmIcon = document.createElement("img");
    kmIcon.src = "./imagenes/tachometer.png";
    kmIcon.style.margin = "5px";
    kmIcon.id = "iconIndex"


    const potenciaIcon = document.createElement("img");
    potenciaIcon.src = "./imagenes/engine.png";
    potenciaIcon.style.margin = "5px";
    potenciaIcon.id = "iconIndex"


    const boton = document.createElement("button");
    boton.id = "btnCancelar";
    boton.className = "formButtons";        
    boton.innerHTML = "Ver Vehiculo";


    title.innerHTML = item.titulo;
    description.innerHTML = item.descripcion;
    price.innerHTML = "$" + item.precio;
    puertas.innerHTML = item.puertas;
    km.innerHTML = item.kms;
    potencia.innerHTML = item.potencia;
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(puertasIcon);
    div.appendChild(puertas);
    div.appendChild(kmIcon);
    div.appendChild(km);
    div.appendChild(potenciaIcon);
    div.appendChild(potencia);
    div.appendChild(boton);


    article.appendChild(div);
}
