
function LimitarCaracteres(event) {
    const inputValue = event.key;
    const regex = /^[a-zA-Z\u00C0-\u024F\s]*$/;
    
    if (!regex.test(inputValue)) {
        event.preventDefault(); 
    }
}

function validarContraseña() {
    const password = document.getElementById("password");
    const regex = /^(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]+$/;
    if (!regex.test(password.value)) {
        password.setCustomValidity("La contraseña debe contener al menos un carácter especial ($@$!%*?&).");
        return false;
    } else {
        password.setCustomValidity("");
        return true;
    }
}

