
const boton1 = document.getElementById(`boton1`)
const boton2 = document.getElementById(`boton2`)
const boton3 = document.getElementById(`boton3`)
const boton4 = document.getElementById(`boton4`)
const boton5 = document.getElementById(`boton5`)
const boton6 = document.getElementById(`boton6`)



const div_contenedor =document.getElementById(`div_contenedor`)

 boton1.onclick = () => {
     document.getElementById(`boton1`)
     boton1.textContent = (`Ahora soy azul`)
    div_contenedor.classList.add( `blue`)
 }

 boton2.onclick = () => {
    document.getElementById(`boton2`)
    boton2.textContent = (`Ahora soy rojo`)
    div_contenedor.classList.add( `red`)
}

boton3.onclick = () => {
    document.getElementById(`boton3`)
    boton3.textContent = (`Ahora soy violeta`)
    div_contenedor.classList.add( `purple`)
}

boton4.onclick = () => {
    document.getElementById(`boton4`)
    boton4.textContent = (`Ahora soy amarillo`)
    div_contenedor.classList.add( `yellow`)
}

boton5.onclick = () => {
    document.getElementById(`boton5`)
    boton5.textContent = (`Ahora soy coral`)
    div_contenedor.classList.add( `coral`)
}

boton6.onclick = () => {
    document.getElementById(`boton6`)
    boton6.textContent = (`Ahora soy lime`)
    div_contenedor.classList.add( `lime`)
}
