

 const primerBoton = document.getElementById(`sandia`)
 const segundoBoton = document.getElementById(`pera`)
 const tercerBoton = document.getElementById(`naranja`)
 const resultado =document.getElementById(`correcto`)


 primerBoton.onclick = () => {
     resultado.textContent =" Incorrecto"
     primerBoton.classList.add(`rojo`)

 }

 segundoBoton.onclick = () => {
     resultado.textContent =" Correcto"
     segundoBoton.classList.add(`verde`)
 }

 tercerBoton.onclick = () => {
     resultado.textContent =" Incorrecto"
     tercerBoton.classList.add(`rojo`)
 }