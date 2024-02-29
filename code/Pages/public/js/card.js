function card_display() {
    const visaRadio = document.getElementById('visa');
    const cardDiv = document.querySelector('.card');
    const numeroTarjetaInput = document.getElementById('numero_tarjeta');
    const cvvInput = document.getElementById('cvv');
    const fechaExpInput = document.getElementById('fecha_exp');

    visaRadio.addEventListener('change', function () {
        if (visaRadio.checked) {
            cardDiv.style.display = 'flex';
            numeroTarjetaInput.required = true;
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
