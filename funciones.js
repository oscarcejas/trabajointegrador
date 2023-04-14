/*console.log("hola")*/

const formulario = document.querySelector(".contacto");

let formularioviaje = document.querySelector(".destino");


/*console.log("formulario")*/

//crear evento
formulario.addEventListener( "submit", validarFormulario )

formularioviaje.addEventListener( "submit", validarviaje )



//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const mail = document.querySelector("#email").value

    const respuesta = document.getElementById("mens")
    respuesta.textContent = `nombre: ${nombre} 
correo electronico: ${mail}`

formulario.reset();
 }

 function validarviaje(e){
    e.preventDefault();
    const dest = document.querySelector("#viaje").value
    const fech = document.querySelector("#fecha").value

    const resp = document.getElementById("ticket")
    resp.textContent = `DESTINO: ${dest} 
FECHA: ${fech}`

formularioviaje.reset();
 }
