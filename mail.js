
    const usuarioCorrecto = "123456";  
    const contrasenaCorrecta = "123456"; 
    const usuarioInput = document.getElementById('nombre');
    const contrasenaInput = document.getElementById('contrasena');
    const loginForm = document.getElementById('loginForm');
    const btnRegistrarse = document.getElementById('btnRegistrarse');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  

        const usuarioIngresado = usuarioInput.value.trim();
        const contrasenaIngresada = contrasenaInput.value.trim();
        if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta) {
            window.location.href = 'web.html';
        } else {
                Swal.fire({           //------LIBRERIA-----------
                    icon: 'error',            
                    title: 'Error',         
                    text: 'Usuario o contraseña incorrectos', 
                    confirmButtonText: 'Intentar de nuevo',  
                });
        }
    });

     btnRegistrarse.addEventListener('click', function() {
        window.location.href = 'login.html';  
    });

//--------------------------------------------API---------------------------------

fetch('https://www.meteosource.com/api/v1/free/point?lat=-34.5952&lon=-60.9462&sections=all&timezone=UTC&language=en&units=metric&key=n5odz9v57dlcrtv8qn3ru5t6x45ykhhzb6x37sfz')
  .then(response => response.json())  
  .then(data => {
    const { temperature } = data.current;  
 const climaDiv = document.getElementById('clima-info');
     const climaHtml = `
      <h2>Temperatura en Junín, Buenos Aires</h2>
     <p><strong>Temperatura:</strong> ${temperature}°C</p>
      
    `;
    
    climaDiv.innerHTML = climaHtml;
  })
  .catch(error => {
    console.log('Error:', error);  
    const climaDiv = document.getElementById('clima-info');
    climaDiv.innerHTML = '<p>Hubo un error al cargar los datos del clima.</p>';
  });
