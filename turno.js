
const datosUsuario = JSON.parse(localStorage.getItem('usuarioNuevo'));

if (datosUsuario) {
     const bienvenidaElement = document.getElementById('bienvenida');
    const nombreUsuario = datosUsuario.nombre;
    const apellidoUsuario = datosUsuario.apellido;

    if (bienvenidaElement) {
        bienvenidaElement.textContent = `¡Bienvenido/a, ${nombreUsuario} ${apellidoUsuario}!`;
    }
} else {
    window.location.href = 'login.html';
}
const doctores = [
    {
        nombre: "Dr. Juan Pérez",
        especializacion: "Cardiología",
        turnos: [
            { fecha: "2025-01-30", hora: "09:00 AM" },
            { fecha: "2025-01-30", hora: "10:00 AM" }
        ]
    },
    {
        nombre: "Dra. Ana Gómez",
        especializacion: "Pediatría",
        turnos: [
            { fecha: "2025-01-30", hora: "11:00 AM" },
            { fecha: "2025-01-30", hora: "01:00 PM" }
        ]
    },
    {
        nombre: "Dr. Pedro López",
        especializacion: "Dermatología",
        turnos: [
            { fecha: "2025-01-30", hora: "08:00 AM" },
            { fecha: "2025-01-30", hora: "02:00 PM" }
        ]
    }
];
function cargarEspecializaciones() {
    const selectEspecializacion = document.getElementById('especializacion');
    const especializaciones = Array.from(new Set(doctores.map(doc => doc.especializacion)));  
    especializaciones.sort(); 
    especializaciones.forEach(especializacion => {
        const option = document.createElement('option');
        option.value = especializacion;
        option.textContent = especializacion;
        selectEspecializacion.appendChild(option);
    });
}
function cargarDoctores(especializacion) {
    const selectDoctor = document.getElementById('doctor');
    selectDoctor.innerHTML = '<option value="">-- Selecciona un doctor --</option>';  

    const doctoresFiltrados = doctores.filter(doc => doc.especializacion === especializacion);
    
    doctoresFiltrados.forEach(doc => {
        const option = document.createElement('option');
        option.value = doc.nombre;
        option.textContent = doc.nombre;
        selectDoctor.appendChild(option);
    });
}
function cargarTurnos(doctorSeleccionado) {
    const selectTurno = document.getElementById('turno');
    selectTurno.innerHTML = '<option value="">-- Selecciona un turno --</option>'; 
     
    const doctor = doctores.find(doc => doc.nombre === doctorSeleccionado);

    if (doctor) {
        doctor.turnos.forEach(turno => {
            const option = document.createElement('option');
            option.value = `${turno.fecha} ${turno.hora}`;
            option.textContent = `${turno.fecha} - ${turno.hora}`;
            selectTurno.appendChild(option);
        });
    }
}
document.getElementById('especializacion').addEventListener('change', function() {
    const especializacion = this.value;
    if (especializacion) {
        cargarDoctores(especializacion);
    }
});
document.getElementById('doctor').addEventListener('change', function() {
    const doctorSeleccionado = this.value;
    if (doctorSeleccionado) {
        cargarTurnos(doctorSeleccionado);
    }
});
document.getElementById('turnoForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    const turnoSeleccionado = document.getElementById('turno').value;
    if (turnoSeleccionado) {
        Swal.fire({
            icon: 'success',
            title: '¡Turno seleccionado!',
            text: `Tu turno para el ${turnoSeleccionado} ha sido reservado con éxito.`,
            confirmButtonText: 'Aceptar'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Por favor, selecciona un turno.',
            confirmButtonText: 'Intentar nuevamente'
        });
    }
});
window.onload = cargarEspecializaciones;
