import {API_URL} from '../config/config.js'

class Notification extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('type');
    }
    
    static get observedAttributes() { return ['url']; }
    
    connectedCallback() {

        document.addEventListener("newUrl",( event =>{
            this.setAttribute('url', event.detail.url);
        }));
        
        document.addEventListener("showDeleteModal", event => {
            this.id = event.detail.id;
            this.shadow.querySelector('#delete-modal').classList.add("active");
        });
    
        this.render();
    }
    
    attributeChangedCallback(name, oldValue, newValue){
        this.render();
    }
    
    render() {
    
        this.shadow.innerHTML =
        ` 
        <style>
            h2 {   
                color: hsl(0, 0%, 0%);
                font-family: 'Ubuntu';
                font-size: 0.9em;
                font-weight: 600;
                margin: 0;
                text-decoration: none;
                text-align:center;
                padding: 0.5vh;
            }

            #delete-modal{
                border-width: 5px;
                border-color: hsl(0, 0%, 0%);
                background-color: white;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: -1;
                opacity: 0;
                padding: 10px;
                transition: opacity 0.3s;
            }

            #delete-modal.active{
                z-index: 9999;
                opacity: 1;
            }

            #notification {
                display: flex;
                justify-content: center;
            }

            #delete-button{
                display: flex;
                
            }

            .delete-modal-buttons{
                display: flex;
                justify-content: space-evenly;
                padding: 0.5vh;
            }
            


        </style>
    
        
        <div id="delete-modal"> 
            <h2>¿Quieres borrar los datos?</h2>  
            <div class="delete-modal-buttons">          
                <button id="delete-button">Sí</button>
                <button id="cancel-button">No</button>
            </div>
        </div>
        `;	

        this.renderButtons();
    }

    renderButtons() {
        this.shadow.querySelector('#cancel-button').addEventListener('click', () => {
            this.shadow.querySelector('#delete-modal').classList.remove("active");
        });


        // this.getAttribute('url')  this.id
        this.shadow.querySelector('#delete-button').addEventListener('click', async () => {
            try {
                const response = await fetch(`${API_URL}${this.getAttribute("url")}/${this.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
                    }
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                this.shadow.querySelector('#delete-modal').classList.remove("active");
                
                document.dispatchEvent(new CustomEvent('refreshTable'))

            } catch (error) {
                console.error(error);
            }
        });

    }

}

customElements.define('delete-message', Notification);