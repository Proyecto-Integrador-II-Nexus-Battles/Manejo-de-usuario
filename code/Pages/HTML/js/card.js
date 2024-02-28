function card_display() {
    const visaRadio = document.getElementById('visa');
    const cardDiv = document.querySelector('.card');
    const nombreTarjetaInput = document.getElementById('nombre_tarjeta');
    const cvvInput = document.getElementById('cvv');
    const fechaExpInput = document.getElementById('fecha_exp');

    visaRadio.addEventListener('change', function () {
        if (visaRadio.checked) {
            cardDiv.style.display = 'flex';
            nombreTarjetaInput.required = true;
            cvvInput.required = true;
            fechaExpInput.required = true;
        }
    });
    
        if(!visaRadio.checked){
            cardDiv.style.display = 'none';
            nombreTarjetaInput.required = false;
            cvvInput.required = false;
            fechaExpInput.required = false;
        }
}
