var Nombre = document.getElementById('Nombre');
var E,mail ; document.getElementById('E-mail');
var Número,telefonico = document.getElementById('Número telefonico');
var Nombre,del,ingresado = document.getElementById('Nombre del ingresado');
var Comentario,consulta = document.getElementById('Comentario/consulta');
var error = document.getElementById("error");
error.style.color = "orange";


chequiarr


function enviarformulario() {
    console.log("Enviando formulario...");

    var mensajeeroor = [];
    if(Nombre.value === null || Nombre.value === 'vacio') {
        mensajeerror.push('ingresa tu nombre');
    }
    if (E-mail.value === null || E-mail.value === 'vacio') {
        mensajeerror.push('ingresa tu e.mail');
    }
    if (Número (telefonico).value === null || Número (telefonico).value === 'vacio') {
        mensajeerror.push('ingresa tu número telefonico');
    }
    if (Nombre (del) (ingresado).value === null || Nombre (del) (ingresado).value === 'vacio') {
        mensajeerror.push('ingresa el nombre del ingresado');
    }
    error.innerHTML = mensajeeroor.join(',');
    return false;
}