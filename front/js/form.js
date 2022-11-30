import { validateForm } from "./validate.js";

export let renderForm = () => {

    let form = document.querySelector('form');
    let sendFormButton = document.querySelector('.send-form-button');

    if(sendFormButton){

        let formInputs = form.elements;

        sendFormButton.addEventListener('click', (event) => {

            event.preventDefault();

            validateForm(formInputs);

            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Formulario enviado correctamente',
                    type: 'success'
                }
            }));

        });
    }
}
