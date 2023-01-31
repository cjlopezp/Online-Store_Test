class Table extends HTMLElement {

    constructor() {
        super(); //super: trae todo el funcionamiento d HTML element
        this.shadow = this.attachShadow({ mode: 'open' }); //declara una propiedad (this.shadow).ShadowDOM: submodulo donde JS ejecutara acciones y si hay bloque, no afectara al resto del codigo
    }

    static get observedAttributes() { return ['url']; }

    connectedCallback() { //metodo nativo
        
        document.addEventListener("newUrl",( event =>{
            this.setAttribute('url', event.detail.url);
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

        .two-columns 
        {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
        }
          
        .two-columns > .column 
        {
            width: 48%;
        }

        

        </style>

        <div class="ficheros">
            <div class="fichero">
                <div class="two-columns">
                    <div class="column"> 
                        <div class="fichero-informacion">
                            <ul>                   
                                <li><span>Telefono empresa: </span>943525412</li>
                                <li><span>email:</span> fgsjogf@gmail.com</li>
                                <li><span>Dirección:</span> C/dasdas</li>
                                <li><span>Días laborables:</span> L - D</li>
                                <li><span>Horario apertura:</span> 18:000</li>
                            </ul>  
                        </div>
                    </div>
                    <div class="column">
                        <div class="iconos-ficheros">
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                            </svg>

                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                            </svg>
                        </div>
                    </div>
                </div>        
            </div>                        
            
            <div class="fichero">
                <div class="two-columns">
                    <div class="column">
                        <div class="fichero-informacion">
                            <ul>                   
                                <li><span>Telefono empresa:</span> 988543513</li>
                                <li><span>email:</span> dsfg@dfjhdik.com</li>
                                <li><span>Dirección:</span> skajhdhkd dwjierower</li>
                                <li><span>Días laborables:</span> L - D</li>
                                <li><span>Horario apertura:</span> 24 horas</li>
                            </ul>  
                        </div>
                    </div>
                    <div class="column">
                        <div class="iconos-ficheros">
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                            </svg>

                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                            </svg>
                        </div>
                    </div>
                </div>        
            </div>           
        </div>  
        `;	
    }
}
//'page-title-component' como ejemplo. Debe tener un guion, sin carateres especiales, ni numeros. Todo en minusculas
//'page-title-component'ejecutara un componente cuando este titulo se cite en un HTML <page-title-component title="Clientes"></page-title-component>
customElements.define('table-component', Table);


