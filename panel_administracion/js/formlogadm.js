import {API_URL} from '../config/config.js'

class Formlog extends HTMLElement {

    constructor() {
        super(); //super: trae todo el funcionamiento d HTML element
        this.shadow = this.attachShadow({ mode: 'open' }); //declara una propiedad (this.shadow).ShadowDOM: submodulo donde JS ejecutara acciones y si hay bloque, no afectara al resto del codigo
    }

   
    connectedCallback() {
        this.render();
    }

    
    render() { 

        this.shadow.innerHTML =    
        ` 
        <style>

        .forms 
        {
            display:flex;
            justify-content: center;
        }

        .input
        {
            display:flex;
            justify-content: flex-end; 
        }


        </style>

        <div class="forms">

            <form action="" method="get" class="form-example">
                
                <div class="form-example">
                    <label for="email">E-MAIL: </label>
                    <input type="text" name="email" id="email" required>
                </div>
                
                <div class="form-example2">
                    <label for="password">Password: </label>
                    <input type="password" name="password" id="password" required>
                </div>
               
                <div class="form-example3">
                    <input class="logadm-button" type="submit" class="button-expand" value="Log In">
                </div>
                
            </form>

        </div>

        `;

        //ini

        this.shadow.querySelector('.logadm-button').addEventListener('click', (event) => {
            event.preventDefault();
            const form = event.target.closest('form');
            const formData = new FormData(form);
            const formDataJson = Object.fromEntries(formData.entries());
            fetch(`${API_URL}/api/auth/users/signin`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formDataJson)
            })
              .then(response => response.json())
              .then(data => {
                if (data.accessToken) {
                  sessionStorage.setItem('accessToken', data.accessToken);
                  window.location.href = 'admin.html';
                }
              })
              .catch(error => console.error(error));
        });


        //end




             
    };

}

customElements.define('log-component', Formlog);



