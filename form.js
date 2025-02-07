
function guardarDatos(event) {
    event.preventDefault();  

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
 const datosUsuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono
    };

    localStorage.setItem('usuarioNuevo', JSON.stringify(datosUsuario));
    console.log(datosUsuario)

    Swal.fire({                //LIBRERIA
        icon: 'success',  
        title: '¡Formulario enviado correctamente!',
        text: 'Sus datos han sido guardados.',
        confirmButtonText: 'Continuar',
    }).then((result) => {
        if (result.isConfirmed) 
            console.log("Redirigiendo a web.html"); {
            
            window.location.href = 'web.html';
        }
    });

    document.getElementById('registroForm').reset();
}
