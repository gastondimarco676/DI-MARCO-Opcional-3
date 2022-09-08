//variables
const peliculas = [
  { id: 1, nombre: "Penny Serenade", con: "Cary Grant", año: 1941},
  { id: 2, nombre: "Suspicion", con: "Joan Fontaine", año: 1940 },
  { id: 3, nombre: "Cat People", con: "Simone Simon", año: 1942 },
  { id: 4, nombre: "Jane Eyre", con: "Orson Welles", año: 1943 },
  { id: 5, nombre: "The Suspect", con: "Charles Laugthon", año: 1944 },
  { id: 6, nombre: "Never Fear", con: "Ida Lupino", año: 1950 }
]

let nombreUsuario = prompt("Bienvenido a CINETECA NOIR! Ingresa tu nombre por favor")
let peliculaElegida = parseInt(prompt(`${nombreUsuario}, qué película clásica quieres ver? 
Indica el número por favor:

\n 1_Penny Serenade (1941)
\n 2_Suspicion (1940)
\n 3_Cat People (1942)
\n 4_Jane Eyre (1943)
\n 5_The Suspect(1944)
\n 6_Never Fear(1950)
\n 7_Deseo encargar otra película
`))

const tenemosLaPeli = peliculas.find(peli => peli.id === peliculaElegida)
let body = document.querySelector("body")

function Mensaje(tenemosLaPeli) {
  if (peliculaElegida > 0 && peliculaElegida < 7) {
    let tuEleccion = document.createElement("div")    
    tuEleccion.textContent=`${nombreUsuario}, has elegido ver: "${tenemosLaPeli.nombre}", del año ${tenemosLaPeli.año}, 
    protagonizada por ${tenemosLaPeli.con}.
    Que la disfrutes!`
    body.append(tuEleccion)
  }
  else if (peliculaElegida === 7) {
    let pedido = prompt(`${nombreUsuario},qué película te gustaría ver?`)
    let tuSugerencia = document.createElement("div")
    tuSugerencia.textContent=`Gracias por la sugerencia, ${nombreUsuario}!
Buscaremos "${pedido}" para que pronto la puedas ver por aquí.`
body.append(tuSugerencia)
  }
  else { alert(`${nombreUsuario},por favor elige una opción válida`) }
}

Mensaje(tenemosLaPeli)