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
    }

    attributeChangedCallback(name, oldValue, newValue){ //actualiza el atributo, segun haya sido cambiado por el usuario u otro modulo (programacion reactiva)
        this.loadData().then(() => this.render());
    }

    async loadData(){

        let result = await fetch(`http://127.0.0.1:8080${this.getAttribute("url")}`,{
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
                },
            }
        );
        let data = await result.json();
        this.data = data.rows;
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

        ul{
            list-style:none;
        }

        .fichero {
            background-color: white;
        }

        .key{
            margin-right: 0.5rem;
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
                            <svg  style="width:24px;height:24px" viewBox="0 0 24 24">
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

        let ficheros = this.shadow.querySelector(".ficheros");
        let tableStructure = this.setTableStructure();
        
        this.data.forEach( element => {

            let fichero = document.createElement("div")
            fichero.classList.add("fichero");
            ficheros.append(fichero);
            
            let twoColumns = document.createElement("div");
            twoColumns.classList.add("two-columns");
            fichero.append(twoColumns);

            let column = document.createElement("div");
            column.classList.add("column");
            twoColumns.append(column);

            let column2 = document.createElement("div");
            column2.classList.add("column");
            twoColumns.append(column2);

            let ficheroInformacion = document.createElement("div");
            ficheroInformacion.classList.add("fichero-informacion");
            column.append(ficheroInformacion);

            let ul = document.createElement("ul");
            ficheroInformacion.append(ul);

            let iconosFicheros = document.createElement("div");
            iconosFicheros.classList.add("iconos-ficheros");
            column2.append(iconosFicheros);


            for (const [key, value] of Object.entries(element)) {

                let li = document.createElement("li");
                let keySpan = document.createElement("span");
                keySpan.classList.add("key");
                let valueSpan = document.createElement("span");
                valueSpan.classList.add("value");

                keySpan.textContent =`${key}:`;
                valueSpan.textContent = value;
                li.append(keySpan);
                li.append(valueSpan);

                ul.append(li);
            }

            let svgContainer = document.createElement("span");
            svgContainer.classList.add("svg-container");
            iconosFicheros.append(svgContainer);

            console.log(element.id)

            let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            
            svg.setAttribute("style", "width:24px;height:24px");
            svg.setAttribute("viewBox", "0 0 24 24");
            svg.classList.add("edit");
            svg.setAttribute("id", element.id);
            svgContainer.append(svg);

            let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("fill", "currentColor");
            path.setAttribute("d", "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z");
            svg.append(path);

            let svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            
            svg2.setAttribute("style", "width:24px;height:24px");
            svg2.setAttribute("viewBox", "0 0 24 24");
            svg2.classList.add("delete");
            svg2.setAttribute("id", element.id);
            svgContainer.append(svg2);

            let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path2.setAttribute("fill", "currentColor");
            path2.setAttribute("d", "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z");
            svg2.append(path2);



        });	



        
    }

    setTableStructure() {

        let url = this.getAttribute('url');

        switch (url) {

            case '/api/admin/users':

                return {
                    headers:{
                        email: {
                            label: 'Email',
                        },
                        name: {
                            label: 'Nombre',
                        }
                    },
                    buttons: {
                        edit: true,
                        remove: true
                    }
                };

            case '/api/admin/taxes':

                return {
                    headers:{
                        type: {
                            label: 'Tipo',
                        }
                    },
                    buttons: {
                        edit: true,
                        remove: true
                    }
                };
        }
    }
}

customElements.define('table-component', Table);


