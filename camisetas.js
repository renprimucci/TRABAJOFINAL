(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  let kilometros = prompt("Ingrese a cuantos kilometros se encuentra de CABA")

if (kilometros < 50) {
    alert ("Su envio sera gratis")
}
else {
    alert ("El costo de su envio es de $2.000")
}