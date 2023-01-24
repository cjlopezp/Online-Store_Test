class PageTitle extends HTMLElement {

    constructor() {
        super(); //super: trae todo el funcionamiento d HTML element
        this.shadow = this.attachShadow({ mode: 'open' }); //declara una propiedad (this.shadow).ShadowDOM: submodulo donde JS ejecutara acciones y si hay bloque, no afectara al resto del codigo
        this.title = this.getAttribute('title');
    }

    static get observedAttributes() { return ['title']; }

    connectedCallback() { //metodo nativo
        
        document.addEventListener("newUrl",( event =>{
            this.setAttribute('title', event.detail.title);
        }));

        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue){ //actualiza el atributo, segun haya sido cambiado por el usuario u otro modulo (programacion reactiva)
        this.render();
    }

    render() { //inicia el proceso CSS y HTML

        this.shadow.innerHTML = //si se incluyen comillas sencillas (') en el codigo, se pueden combinar lenguajes
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
        </style>

        <h2>${this.title}</h2>
        `;	
    }
}
//'page-title-component' como ejemplo. Debe tener un guion, sin carateres especiales, ni numeros. Todo en minusculas
//'page-title-component'ejecutara un componente cuando este titulo se cite en un HTML <page-title-component title="Clientes"></page-title-component>
customElements.define('page-title-component', PageTitle);

//page-title-component se conectara (ejecutara) PageTitle
