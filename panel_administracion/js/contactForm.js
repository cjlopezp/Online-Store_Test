import {validateForm} from './validate.js';

export let renderContactForm = () => {

    let sendFormButton = document.querySelector('.contact-send-button');

    if(sendFormButton){

        sendFormButton.addEventListener('click', event => {

            event.preventDefault();

            let form = document.querySelector('form');
    
            // if(!validateForm(form.elements)){
            //     return;
            // }
    
            // Podemos recoger el valor de todos los inputs de un formulario mediante el objeto FormData. 
            // Para ello debemos pasar como parámetro el formulario al que queremos acceder. 
            // let formData = new FormData(form);
            // Podemos añadir un nuevo dato al objeto FormData mediante el método append.
            // formData.append("fingerprint", "123456789");
    
            // Podemos recorrer el objeto FormData mediante un bucle for...of.
            // for (let pair of formData.entries()) {
            //     console.log(pair[0]+ ', ' + pair[1]); 
            // }
    
            // Capturar los datos del formulario y enviarlos mediante fetch para ser recibidos por express.
    
            // Podemos convertir el objeto FormData en un objeto json mediante el método entries.
    
            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());
            let url = form.action;

            
            console.log(url);
        
            let sendPostRequest = async () => {
                
                let request = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formDataJson)
                }).then(response => {
                    return response.json();
                }).then(data => {
                    
                    document.dispatchEvent(new CustomEvent('message', {
                        detail: {
                            text: 'Formulario enviado correctamente',
                            type: 'success'
                        }
                    }));
            
                }).catch(error => {
                    console.log(error);
                });
            }
    
            sendPostRequest();
        });
    }
    
};