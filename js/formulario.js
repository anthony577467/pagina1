  function validarFormulario() {
    var carrera = document.querySelector('input[name="carrera"]:checked');
    var nombre = document.querySelector('input[name="nombre"]');
    var apellidos = document.querySelector('input[name="apellidos"]');
    var correo = document.querySelector('input[name="correo"]');
    var asunto = document.querySelector('input[name="Asunto"]');
    var fecha = document.querySelector('input[name="Fecha"]');
    var telefono = document.querySelector('input[name="Telefono"]');
    var estado = document.querySelector('input[name="Estado"]');
    var nombreEstudiante = document.querySelector('input[name="Nombre de Estudiante"]');
    var apellidoEstudiante = document.querySelector('input[name="Apellido de Estudiante"]');
    var seccion = document.querySelector('input[name="Secciòn"]');

    if (!carrera || !nombre || !apellidos || !correo || !asunto || !fecha || !telefono || !estado || !nombreEstudiante || !apellidoEstudiante || !seccion) {
      alert('Por favor, complete todos los campos.');
      return false;
    }
    return true;
  }

  function mostrarConfirmacion() {
    alert('¡Formulario enviado con éxito!');
  }