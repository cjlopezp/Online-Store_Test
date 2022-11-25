//https://programadorwebvalencia.com/cursos/javascript/formularios/

export let renderboton_val_form = () => {


    const miInput = document.querySelector('textarea');

    // Quita la validación mientras escribes
    miInput.addEventListener('textarea', () => {
        alert("funcion!!!!")
        // Quita el mensaje según escribes
        miInput.setCustomValidity('');
        // Comprueba si debe validarlo
        miInput.checkValidity();
    });

    // Muestra el mensaje de validación
    miInput.addEventListener('invalid', () => {
        miInput.setCustomValidity('Si no es molesta... ¿me dices tu nombre?');
    });
}    