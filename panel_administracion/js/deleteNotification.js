class Notification extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.title = this.getAttribute('type');
    }
    
    static get observedAttributes() { return ['type']; }
    
    connectedCallback() {
        
        document.addEventListener("click", event => {
            this.setAttribute('type', event.detail.type);
        });
    
        this.render();

        this.shadow.querySelector('#delete-button').addEventListener('click', () => { //hay que agregar un for para recorrertodos los botones delete en el menu
            this.shadow.querySelector('#notification').style.display = 'block';
            setTimeout(() => {
                this.shadow.querySelector('#notification').style.display = 'none';
            }, 3000);
        });
    }
    
    attributeChangedCallback(name, oldValue, newValue){
        this.render();
    }
    
    render() {
    
        this.shadow.innerHTML =
        ` 
        <style>
            h2 {   
                color: hsl(0, 0%, 100%);
                font-family: 'Ubuntu';
                font-size: 0.9em;
                font-weight: 600;
                margin: 0;
                text-decoration: none;
                text-align:center;
            }
            #notification {
                display: none;
            }
        </style>
    
        <button id="delete-button">Delete</button>
        <div id="notification"> 
            <h2>¿Quieres borrar los datos?</h2>
        </div>
        `;	
    }
}

customElements.define('delete-message', Notification);