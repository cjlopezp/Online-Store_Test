import {API_URL} from '../config/config.js'
// import {validateForm} from './config/validate.js' 



class FormStr extends HTMLElement {

    constructor() {
        super(); //super: trae todo el funcionamiento d HTML element
        this.shadow = this.attachShadow({ mode: 'open' }); //declara una propiedad (this.shadow).ShadowDOM: submodulo donde JS ejecutara acciones y si hay bloque, no afectara al resto del codigo
        this.url =  this.getAttribute("url");
    }
    
    static get observedAttributes() { return ['url']; }

    connectedCallback() {

        document.addEventListener("newUrl",( event =>{
            this.setAttribute('url', event.detail.url);
        }));

        document.addEventListener("showElement",( event =>{
            this.id = event.detail.id;
            this.showElement(event.detail.id);
        }));

    };

    attributeChangedCallback(name, oldValue, newValue){ //actualiza el atributo, segun haya sido cambiado por el usuario u otro modulo (programacion reactiva)
        this.render();      
    }


            
    async render() { 

        this.shadow.innerHTML =    
        ` 
        <style>

        


        .tabs {
            background-color: hsl(0deg, 0%, 100%);
            margin-bottom: 1rem;
            width: 100%;
        }

        .tabs .tabs-items {
            background-color: hsl(226deg, 63%, 45%);
            display: flex;
            width: 100%;
        }

        .tabs .tabs-items .tab-item {
            color: hsl(0deg, 0%, 100%);
            cursor: pointer;
            padding: 1rem;
        }

        .tabs .tabs-items .tab-item.active {
            background-color: hsl(0deg, 0%, 100%);
            color: hsl(0deg, 73%, 43%);
        }

        .tabs .tabs-contents {
        padding: 1rem;
        }

        .tabs .tabs-contents .tab-content {
            display: none;
        }

        .tabs .tabs-contents .tab-content.active {
            background-color: hsl(0deg, 0%, 100%);
            display: block;
        }

        .tabs .tabs-contents .tab-content.active p {
            color: hsl(226deg, 63%, 45%);
        }

        
        .tabs-header {
            display: flex;
            flex-direction: row;
            justify-content:space-between;
            gap:.3rem;
        }
        
        .tabs-header-buttons{
            display: flex;
        }
        
        .tabs-header-main-buttons {
            display: flex;
            flex-direction: row;
        }
        
        
        .tab-button {
            flex: 1;
            padding: 8px;
            cursor: pointer;
            border: 1px solid #ddd;
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
            background-color: #eee;
            border-bottom: 0;
            transition:all .3s ease-in-out;
        }
        
        .tab-button.active {
            background-color: rgb(42, 157, 233);
            border: 1px solid rgba(42, 39, 214, 0.8);
            border-bottom: 0;
            position: relative;
            z-index: 100;
            color: white;
            font-weight: bold;
        }
        
        .tab-button:hover:not(.active) {
            box-shadow:inset 0 0 15px rgba(0,0,0,.2);
        }
        
        .tabs-body {
            display: flex;
            flex-direction: column;
        }
        
        .tab-content {
            display: none;
            padding: 1rem;
            border: 1px solid black;
            box-shadow: 0 -3px 5px rgba(0,0,0,.3);
        }
        
        .tab-content h3,
        .tab-content p {
            color: #000;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .icono-administracion svg{
            color: rgb(42, 157, 233);
            width: 2rem;
        }
                
        .svg_container {
            display: flex;
            justify-content: center;
            padding: 0 0 0 0;
        }
          
        svg {
            color: white;
        }

        .fila 
        {
            display: flex;
            justify-content: space-between;
            gap: 2rem;
            line-height:2.5;
        }

        .filaC
        {
            display: flex;
            flex-direction:row;
            line-height:2.5;
           
        }

        .form-element
        {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .form-element-label span{
            margin-left: 1rem;
        }

        input, select, textarea{
            width: 100%;
        }

        .checkbox-container, .radio-container{
            display:flex;
            gap: 1rem;
            width: 100%;
        }

        input[type="radio"], input[type="checkbox"]{
            width: 5%;
        }


        
        /*<!MODAL*/
        .modal {
            display: none; /* Ocultar el modal por defecto */
            position: fixed; /* Fijar la posición del modal */
            z-index: 1; /* Situar el modal por encima de todo */
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4); /* Fondo oscuro semitransparente */
        }
        
        .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 600px;
            text-align: center;
        }
        
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        
        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
        
        .invalid{
            border: 2px solid #F3130C;
        }

        </style>

        <form >

            <div class="two-columns">
            
                <div class="column-tabs">
                                                        
                    <div class="tabs">
                        <div class="tabs-header main">
                        
                            <div class="tabs-header-buttons">
                              
                            </div>
                        
                            <div class="tabs-header-buttons">
                                <div class="icono-administracion">
                                    <button class="save-button" type="submit">
                                        <svg class="save-button" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
                                        </svg>
                                    </button>
                                    
                                    
                                </div>

                                <div class="icono-administracion">
                                    <button class="clean-button" type="reset">
                                        <svg class="form-clean-button clean-button"  viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="tabs-body">
            
                           
                        </div>  
                    </div> 
                </div> 
            </div>                                     
        </form> 
        
        <div class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p id="modal-message"></p>
                <p id="error-message"></p>
            </div>
        </div>

        `;     


        


        let formStructure = await this.setFormStructure();

        const form = this.shadow.querySelector("form");
        const tabsHeaderButtons = this.shadow.querySelector('.tabs-header-buttons');
        const tabsBody = this.shadow.querySelector('.tabs-body');
        
        Object.keys(formStructure.tabs).forEach(tab => {
            // Creo el botón
            const tabButton = document.createElement('div');
            tabButton.classList.add('tab-button');
            tabButton.setAttribute('data-target', `#tab-${tab}`);
            tabButton.innerText = formStructure.tabs[tab].label;
            tabsHeaderButtons.appendChild(tabButton);
          
            // Creo el contenido
            const tabContent = document.createElement('div');
            tabContent.id = `tab-${tab}`;
            tabContent.classList.add('tab-content');
            tabsBody.appendChild(tabContent);
          

            if (formStructure.tabsContent[tab] && formStructure.tabsContent[tab].rows) {
                Object.keys(formStructure.tabsContent[tab].rows).forEach(row => {
                    const fila = document.createElement('div');
                    fila.classList.add('fila');
                    tabContent.appendChild(fila); 
                  // Iteramos sobre cada elemento de la fila
                    if (formStructure.tabsContent[tab].rows[row] && formStructure.tabsContent[tab].rows[row].formElements) {

                        for(let field in formStructure.tabsContent[tab].rows[row].formElements) {

                            let formElementStructure = formStructure.tabsContent[tab].rows[row].formElements[field];
        
                            const formElementContainer = document.createElement('div');
                            const formElementLabel = document.createElement('div');
                            const formElementInput = document.createElement('div');
                            formElementContainer.append(formElementLabel);
                            formElementContainer.append(formElementInput);
                
                            formElementContainer.classList.add('form-element');
                            formElementLabel.classList.add('form-element-label');
                            formElementInput.classList.add('form-element-input');

                            let inputContainer = null;
        
                            if(formElementStructure.label){
                                const label = document.createElement('label');
                                label.textContent = formElementStructure.label;
                                label.htmlFor = field;
                                formElementLabel.append(label);
                            }
        
                            let formElement = document.createElement(formElementStructure.element);
                            formElement.setAttribute("name", field);
                            formElement.setAttribute("id", field);
        
                            if(formElementStructure.type === "hidden"){
                                form.append(formElement);
                            }else if(formElementStructure.type != "checkbox" && formElementStructure.type != "radio"){
                                formElementInput.append(formElement); 
                                fila.append(formElementContainer);
                                tabContent.append(fila);
                            }
        
                            switch(formElementStructure.type) {
        
                                case "file":
        
                                    if(!this.shadow.querySelector('image-gallery-component')){
                                        const imageGallery = document.createElement('image-gallery-component');
                                        this.shadow.append(imageGallery);
                                    }
                            
                                    break;
        
                                case "checkbox":
                                case "radio":
        
                                    inputContainer = document.createElement('div');
                                    inputContainer.classList.add(`${formElementStructure.type}-container`);
                                    formElementInput.append(inputContainer);
        
                                    break;
        
                                default:
        
                                    if(formElementStructure.type === "range"){
        
                                        inputContainer = document.createElement('div');
                                        inputContainer.classList.add(`${formElementStructure.type}-container`);
                                        formElementInput.append(inputContainer);
        
                                        const rangeValue = document.createElement('span');
                                        rangeValue.classList.add('range-value');
                                        rangeValue.innerText = formElementStructure.value;
                                        formElementInput.append(rangeValue);
            
                                        formElement.addEventListener('input', () => {
                                            rangeValue.innerText = formElement.value;
                                        });
                                    }
                            }
        
                            Object.keys(formElementStructure).forEach(attribute => {
        
                                switch(attribute) {
        
                                    case "element":
                                    case "label":
                                    case "name":
                                        
                                        break;
        
                                    case "options":

                                        fila.append(formElementContainer);
                                        tabContent.append(fila);
        
                                        formElementStructure[attribute].forEach( option => {
        
                                            if(formElementStructure.type === "checkbox" || formElementStructure.type === "radio"){
                                
                                                const input = document.createElement('input');
                                                const inputLabel = document.createElement('label');
                                                inputLabel.innerText = option.label;
                                                input.id = field;
                                                input.type = formElementStructure.type;
                                                input.name = field;
                                                input.value = option.value || '';
                                                input.checked = option.checked || false;
                                                input.disabled = option.disabled || false;
        
                                                inputContainer.append(inputLabel);
                                                inputContainer.append(input);
                                            }
            
                                            if (formElementStructure.element == "select") {
        
                                                const optionElement = document.createElement('option');
                                                optionElement.value = option.value;
                                                optionElement.textContent = option.label;
                                                formElement.append(optionElement);
                                            }                                            
                                        });
        
                                        break;
        
                                    case "validate":
        
                                        formElement.dataset.validate = formElementStructure[attribute];
        
                                        break;
        
                                    case "maxLength":
        
                                        formElement.setAttribute(attribute, formElementStructure[attribute]);
                                        const counter = document.createElement('span');
                                        formElementLabel.append(counter);
            
                                        formElement.addEventListener('input', () => {
            
                                            if(formElement.value.length > 0){
                                                counter.textContent = formElement.value.length + ' / ' + formElement.maxLength;                            
                                            }else{
                                                counter.textContent = '';
                                            }
                                        });
        
                                        break;
        
                                    default:
        
                                        formElement.setAttribute(attribute, formElementStructure[attribute]);
                                }
                            });
        
                        }; 
                    };    
                });

                console.log(formStructure.tabsContent[tab].rows)
            }            
        });
          
        this.renderTabs();
        this.renderButtons();
    };

    renderTabs(){

        this.shadow.querySelector(".tab-button").classList.add("active");
        this.shadow.querySelector(".tab-content").classList.add("active");

        let tabButtons = this.shadow.querySelectorAll(".tab-button");
        
        // Asignamos un manejador de eventos al clic en cada botón de pestaña
        tabButtons.forEach( tabButton => {
    
            tabButton.addEventListener("click", () => {
                // Cuando se hace clic en un botón, se obtiene el contenido de la pestaña
                // correspondiente
                let tabContent = this.shadow.querySelector(tabButton.dataset.target);
    
                // Si el contenido de la pestaña existe, se muestra y se ocultan
                // los demás contenidos de pestañas
                if (tabContent) {
    
                    let parentTabs = tabButton.closest(".tabs");
                    let tabContents = parentTabs.querySelectorAll(".tab-content");
    
                    tabContents.forEach(function(content) {
                        content.classList.remove("active");
                    });
    
                    tabContent.classList.add("active");
    
                    // Luego, se ocultan todos los botones de pestañas
                    // y se muestra el botón correspondiente
                    let tabButtons = parentTabs.querySelectorAll(".tab-button");
    
                    tabButtons.forEach(function(button) {
                        button.classList.remove("active");
                    });
    
                    tabButton.classList.add("active");

                    



    
                    if(tabContent.querySelector('.tab-button')){
                        tabContent.querySelector('.tab-button').classList.add('active');
                        document.querySelector(tabContent.querySelector('.tab-button').dataset.target).classList.add('active');
                    }
                }
            });
        });
    }

    renderButtons = async () => {

        let sendFormButton = this.shadow.querySelector('.save-button');
        let cleanButton = this.shadow.querySelector('.clean-button');

        //ini

        

        //end



        sendFormButton.addEventListener('click', async event => {

            event.preventDefault();

            let form = this.shadow.querySelector('form');
    

            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());
            let url = this.id ? `${API_URL}${this.getAttribute("url")}/${this.id}` :  `${API_URL}${this.getAttribute("url")}`;
            let method = this.id ? "PUT" : "POST";
            
            if(!this.validateForm(form.elements)){
                return;
            }
                      
            let response = await fetch(url, {
                method: method,
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataJson)
            });
            

            switch(response.status){

                case 200: 

                    this.render();

                    document.dispatchEvent(new CustomEvent('refreshTable'))
                
                    break;

                case 500:

                    document.dispatchEvent(new CustomEvent('message', {
                        detail: {
                            text: 'Algún error en los datos suministrados',
                            type: 'error'
                        }
                    }));

                    


                    break;
                    
                case 401:

                    document.dispatchEvent(new CustomEvent('message', {
                        detail: {
                            text: 'No tiene permiso',
                            type: 'error'
                        }
                    }));

                    
                    break;
            }               
        });


                

        cleanButton.addEventListener('click', async event => {

            event.preventDefault();

            this.render();
        });
    }

    async showElement(id){


        let result = await fetch(`${API_URL}${this.getAttribute("url")}/${id}`,{
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
                },
            }
        );

        let data = await result.json();

        for( const [key,value] of Object.entries(data)){
           
            if(this.shadow.querySelector(`[name="${key}"]`)){
                this.shadow.querySelector(`[name="${key}"]`).value = value;       
            }            
        }


    }

    validateForm = formInputs => {

        let validForm = true;
       
        let validators = {
            "only-letters": /^[a-zA-Z\s]+$/g,
            "only-numbers": /\d/g,
            "telephone": /^\d{9}$/g,
            "email": /\w+@\w+\.\w+/g,
            "web": /^(http|https):\/\/\w+\.\w+/g,
            "password": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
            "date": /^\d{4}-\d{2}-\d{2}$/g,
            "time": /^\d{2}:\d{2}$/g
        }
    
        for (let i = 0; i < formInputs.length; i++) {
    
            if (formInputs[i].dataset.validate){
    
                if(formInputs[i].value.match(validators[formInputs[i].dataset.validate]) == null) {
                    formInputs[i].classList.add('invalid');
                    validForm = false;
                }else{
                    formInputs[i].classList.remove('invalid');
                }
            }
        }

        if(!validForm){
            let modalMessage = this.shadow.querySelector('#modal-message');
            let errorMessage = this.shadow.querySelector('#error-message');
            let modal = this.shadow.querySelector('.modal');
            let close = this.shadow.querySelector('.close');
        
            if (modalMessage && errorMessage && modal && close) {
                modalMessage.innerText = "Hay errores en los datos introducidos";
                errorMessage.innerText = "Revisa los campos marcados en rojo";
                modal.style.display = "block";
        
                close.onclick = function() {
                    modal.style.display = "none";
                }
        
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }
    
        return validForm;
    };
    

    setFormStructure = async () => {
       
        let url = this.getAttribute('url');

        switch (url) {


            case '/api/admin/users':

                return {

                    tabs:{
                        main: {
                            label: 'Users'
                        }
                        
                    },

                    tabsContent: {

                        main: {
                            rows:{
                                row1: {
                                    formElements:{
                                        name: {
                                            label: 'Nombre',
                                            element: 'input',
                                            maxLength: '50',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                        email: {
                                            label: 'Email',
                                            element: 'input',
                                            type: 'email',
                                            placeholder: '',
                                            required: true,
                                            validate: 'email'
                                        },
                                    }
                                },
                                row2: {
                                    formElements:{
                                        password:{
                                            label: 'Password',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true,
                                        },
                                        repeatPassword:{
                                            label: 'Repeat password',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true,
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
        
                case '/api/admin/books':

                    return {

                        tabs:{
                            main: {
                                label: 'books'
                            }
                            
                        },

                        tabsContent: {

                            main: {
                                rows:{
                                    row1: {
                                        formElements:{
                                            title: {
                                                label: 'Titulo',
                                                element: 'input',
                                                maxLength: '50',
                                                type: 'text',
                                                placeholder: '',
                                                required: true,
                                                validate: 'required'
                                            },
                                            author: {
                                                label: 'Author',
                                                element: 'input',
                                                type: 'text',
                                                placeholder: '',
                                                required: true,
                                                validate: 'required'
                                            },
                                        }
                                    },
                                    row2: {
                                        formElements:{
                                            description:{
                                                label: 'Descripción',
                                                element: 'textarea',                                                                                            placeholder: '',
                                                required: true,
                                            },
                                            isbn:{
                                                label: 'ISBN',
                                                element: 'input',
                                                type: 'alphanumeric',
                                                placeholder: '',
                                                required: true,
                                            }
                                        }
                                    },
                                    row3: {
                                        formElements:{
                                            pageCount:{
                                                label: 'Page count',
                                                element: 'input',
                                                type: 'only-numbers',
                                                placeholder: '',
                                                required: true,
                                            },
                                            publishedDate:{
                                                label: 'Pulished date',
                                                element: 'input',
                                                type: 'date',
                                                placeholder: '',
                                                required: true,
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
    
            
            case '/api/admin/ejemplo':

                return {

                    tabs:{
                        main: {
                            label: 'Principal'
                        },
                        images: {
                            label: 'Imágenes'
                        }
                    },

                    tabsContent: {
                       
                        main: {
                            rows:{
                                row1: {
                                    formElements:{
                                        id:{
                                            element: 'input',
                                            type: 'hidden',
                                        },
                                        name: {
                                            label: 'Nombre',
                                            element: 'input',
                                            maxLength: '10',
                                            type: 'text',
                                            placeholder: '',
                                            required: true,
                                            validate: 'only-letters'
                                        },
                                        email: {
                                            label: 'Email',
                                            element: 'input',
                                            type: 'email',
                                            placeholder: '',
                                            required: true,
                                            validate: 'email'
                                        }
                                    }
                                },
                                row2: {
                                    formElements:{
                                        password: {
                                            label: 'Contraseña',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true
                                        },
                                        repeatPassword: {
                                            label: 'Repita la contraseña',
                                            element: 'input',
                                            type: 'password',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row3: {
                                    formElements:{
                                        permissions: {
                                            label: 'Permisos',
                                            element: 'input',
                                            type: 'checkbox',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Crear',
                                                    value: 'create',
                                                    checked: true
                                                },
                                                {
                                                    label: 'Leer',
                                                    value: 'read'
                                                },
                                                {
                                                    label: 'Actualizar',
                                                    value: 'update'
                                                },
                                                {
                                                    label: 'Eliminar',
                                                    value: 'delete'
                                                }
                                            ]
                                        },
                                        sex: {
                                            label: 'Sexo',
                                            element: 'input',
                                            type: 'radio',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Masculino',
                                                    value: "M",
                                                    checked: true
                                                },
                                                {
                                                    label: 'Femenino',
                                                    value: "F"
                                                }
                                            ],
                                        }
                                    }
                                },
                                row4: {
                                    formElements:{
                                        color: {
                                            label: 'Color',
                                            element: 'input',
                                            type: 'color',
                                            placeholder: ''
                                        },
                                        role: {
                                            label: 'Rol',
                                            element: 'select',
                                            required: true,
                                            options: [
                                                {
                                                    label: 'Administrador',
                                                    value: 'admin'
                                                },
                                                {
                                                    label: 'Usuario',
                                                    value: 'user'
                                                },
                                                
                                            ]
                                        }
                                    }
                                },
                                row5: {
                                    formElements:{
                                        edad: {
                                            label: 'Edad',
                                            element: 'input',
                                            type: 'number',
                                            placeholder: '',
                                            required: true
                                        },
                                        telefono: {
                                            label: 'Teléfono',
                                            element: 'input',
                                            type: 'tel',
                                            placeholder: '',
                                            required: true
                                        },
                                        url: {
                                            label: 'URL',
                                            element: 'input',
                                            type: 'url',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row6: {
                                    formElements:{
                                        creationDate: {
                                            label: 'Fecha de creación',
                                            element: 'input',
                                            type: 'date',
                                            placeholder: '',
                                            required: true,
                                            validate: 'date'
                                        },
                                        creationTime: {
                                            label: 'Hora de creación',
                                            element: 'input',
                                            type: 'time',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row7: {
                                    formElements:{
                                        reservationWeek: {
                                            label: 'Semana de reserva',
                                            element: 'input',
                                            type: 'week',
                                            placeholder: '',
                                            required: true
                                        },
                                        reservationMonth: {
                                            label: 'Mes de reserva',
                                            element: 'input',
                                            type: 'month',
                                            placeholder: '',
                                            required: true
                                        },
                                        reservationDateTime: {
                                            label: 'Fecha y hora',
                                            element: 'input',
                                            type: 'datetime-local',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row8: {
                                    formElements:{
                                        capital: {
                                            label: 'Capital',
                                            element: 'input',
                                            type: 'range',
                                            min: 0,
                                            max: 100,
                                            step: 1,
                                            value: 50,
                                            placeholder: ''
                                        },
                                    }
                                   
                                },
                                row9: {
                                    formElements:{
                                        pdf: {
                                            label: 'Pdf',
                                            element: 'input',
                                            type: 'file',
                                            placeholder: '',
                                            required: true
                                        },
                                        search: {
                                            label: 'Buscar',
                                            element: 'input',
                                            type: 'search',
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                },
                                row10: {
                                    formElements:{
                                        description: {
                                            label: 'Descripción',
                                            element: 'textarea',
                                            maxLength: 100,
                                            placeholder: '',
                                            required: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        //ini
        handleSubmit = async (event) => {
            console.log(hola)
        // event.preventDefault();
        // console.log(hola)
        // const form = event.target;
        // const formInputs = form.querySelectorAll('form-element-input');
        
        
            
        
    }




}

customElements.define('form-structure', FormStr);