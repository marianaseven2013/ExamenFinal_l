import { hola } from "./componente/componente_1/componente_1.js";
import { hole } from "./componente/componente_2/componente_2.js";

let DOM = document.querySelector("#root");

let ool = document.createElement('div');
ool.className = "cc1"
ool.appendChild(hola);
DOM.appendChild(ool);


let aal = document.querySelector('div');
aal.className = "cc2"
aal.appendChild(hole);
DOM.appendChild(aal)

