import { enableButtons } from "./form.js";

export function agregarSpinner(accion) {
  let spinner = document.createElement("img");
  let texto = document.createElement("h1");
  texto.style.alignContent = "center";
  spinner.setAttribute("src", "./imagenes/spinner.gif");
  spinner.setAttribute("alt", "imagen spinner");

  document.getElementById("spinner").appendChild(spinner);

  switch (accion) {
    case "agregar":
      texto.textContent = "Agregando...";
      document.getElementById("alert").appendChild(texto);
      break;
    case "modificar":
      texto.textContent = "Modificando...";
      document.getElementById("alert").appendChild(texto);
      break;
    case "eliminar":
      texto.textContent = "Eliminando...";
      document.getElementById("alert").appendChild(texto);
      break;
  }

  enableButtons(false);
}

export function eliminarSpinner() {
  enableButtons(true);
  
  const spinner = document.getElementById("spinner");
  const alert =   document.getElementById("alert");

  spinner.removeChild(spinner.firstElementChild);
  alert.removeChild(alert.firstElementChild);
}
