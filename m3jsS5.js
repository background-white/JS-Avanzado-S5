const formulario =document.getElementById("formulario");

//crear evento
formulario.addEventListener("submit", validarFormulario)

//mis funciones
function validarFormulario(e){
  e.preventDefault()
  let hora=document.getElementById("hora").value;
  let categoria=document.getElementById("categoria").value;
  let añosServicio=document.getElementById("años").value;

  respuesta.textContent=`La cantidad de horas trabajadas fueron:${hora}; multiplicado por tu categoría escogida el pago por hora que te corresponde es: ${categoria}; tienes un sueldo básico de: ${hora*categoria}; y tu bonificacion es de: ${(hora*categoria)*añosServicio}; la suma de todo es: ${(hora*categoria)+((hora*categoria)*añosServicio)}`;
}




