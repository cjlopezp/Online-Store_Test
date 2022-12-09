import {validateForm} from './validate.js';

export let renderForm = () => {

    let form = document.querySelector('form');
    let sendFormButton = document.querySelector('.save-button');

    sendFormButton.addEventListener('click', event => {

        event.preventDefault();

        if(!validateForm(form.elements)){
            return;
        }

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
        let href = window.location.href;
        let endpointSplit = href.split('/')
        let endpoint = endpointSplit[endpointSplit.length - 1].split('.')[0];
        let url = 'http://192.168.1.16:8080/api/admin/' + endpoint;

        // // console.log(JSON.stringify(formDataJson));

        let sendPostRequest = async () => {
            
            let request = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': sessionStorage.getItem('accessToken')
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
};