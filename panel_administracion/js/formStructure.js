class FormStr extends HTMLElement {

    constructor() {
        super(); //super: trae todo el funcionamiento d HTML element
        this.shadow = this.attachShadow({ mode: 'open' }); //declara una propiedad (this.shadow).ShadowDOM: submodulo donde JS ejecutara acciones y si hay bloque, no afectara al resto del codigo
    }

   
    connectedCallback() {
        this.render();

        // Obtengo el elemento padre donde se van a pintar los tabs
       
    };
            

    

    
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
        }

        </style>

        <form>

            <div class="two-columns">
            
                <div class="column-tabs">
                                                        
                    <div class="tabs">
                        <div class="tabs-header main">
                        
                            <div class="tabs-header-buttons">
                              
                            </div>
                        
                            <div class="tabs-header-buttons">
                                <div class="icono-administracion">

                                    <svg class="form-save-button save-button" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
                                    </svg>
                                    
                                </div>

                                <div class="icono-administracion">
                                    
                                    <svg class="form-clean-button clean-button" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <div class="tabs-body">
            
                            <div id="tab-2" class="tab-content active">
                                <div>
                                    <h3>Principal</h3>
                                </div>
                        
                    
                                <div class="fila">
                    
                                    <div class="form-element">
                                        <input type="hidden" name="id" />
                                        <label for="name">Nombre</label>
                                        <input type="text" name="name" maxLength="10" required /> 
                                    </div>
                            
                                    <div class="form-element">
                                        <label for="email">Email</label>
                                        <input type="email" name="email" required />
                                    </div>
                                                                            
                                    <div class="form-element">
                                        <label for="password">Contraseña</label>
                                        <input type="password" name="password" required />
                                    </div>
                            
                                    <div class="form-element">
                                        <label for="repeatPassword">Repita la contraseña</label>
                                        <input type="password" name="repeatPassword" required />
                                    </div>
                    
                                </div>
                        
                                <div class="fila">
                                
                                    <div>
                                    <label for="edad">Edad</label>
                                    <input type="number" name="edad" required />
                                    </div>
                    
                                    <div>
                                    <label for="telefono">Teléfono</label>
                                    <input type="tel" name="telefono" required />
                                    </div>
                    
                                    <div>
                                        <label for="sex">Sexo</label>
                                        <input type="radio" name="sex" value="M" checked />
                                        <label for="sex">Masculino</label>
                                        <input type="radio" name="sex" value="F" />
                                        <label for="sex">Femenino</label>
                                    </div>
                                
                                </div> 
                                
                    
                                <div class="fila">
                                    <div>
                                        <label for="role">Rol</label>
                                        <select name="role" required>
                                            <option value="admin">Administrador</option>
                                            <option value="user">Usuario</option>
                                        </select>    
                                    </div>
                    
                                    <div>
                                        <label for="permissions">Permisos</label>
                                        <input type="checkbox" name="permissions" value="create" checked />
                                        <label for="permissions">Crear</label>
                                        <input type="checkbox" name="permissions" value="read" />
                                        <label for="permissions">Leer</label>
                                        <input type="checkbox" name="permissions" value="update" />
                                        <label for="permissions">Actualizar</label>
                                        <input type="checkbox" name="permissions" value="delete" />
                                        <label for="permissions">Eliminar</label>
                                    </div>
                                </div>
                        
                            
                                <div class="fila">
                        
                                    <div>
                                        <label for="url">URL</label>
                                        <input type="url" name="url" required />
                                    </div>
                    
                                    <div>
                                        <label for="creationDate">Fecha de creación</label>
                                        <input type="date" id="creationDate" placeholder="" required />
                                    </div>
                                                                                    
                                    <div>
                                        <label for="creationTime">Hora de creación</label>
                                        <input type="time" id="creationTime" placeholder="" required />
                                    </div>                                                   
                                                                                    
                                </div>                                            
                                                                                
                                <div class="fila">                                                   
                                                                                
                                    <div>
                                        <label for="reservationWeek">Semana de reserva</label>
                                        <input type="week" id="reservationWeek" placeholder="" required />
                                    </div>
                    
                                    <div>
                                        <label for="reservationMonth">Mes de reserva</label>
                                        <input type="month" id="reservationMonth" placeholder="" required />
                                    </div>
                    
                                    <div>
                                        <label for="reservationDateTime">Fecha y hora</label>
                                        <input type="datetime-local" id="reservationDateTime" placeholder="" required />
                                    </div>
                                                
                                </div>
                    
                    
                                <div class="filaC"> 
                                
                                    <div>
                                        <label for="capital">Capital</label>
                                        <input type="range" id="capital" min="0" max="100" step="1" value="50" placeholder="" />
                                    </div>
                    
                                    <div>
                                        <label for="color">Color</label>
                                        <input type="color" name="color" />
                                    </div>
                                
                                </div>
                    
                    
                                <div class="fila"> 
                                
                                <div>
                                    <label for="pdf">Pdf</label>
                                    <input type="file" id="pdf" placeholder="" required />
                                    </div>
                            
                                    <div>
                                    <label for="search">Buscar</label>
                                    <input type="search" id="search" placeholder="" required />
                                    </div>
                            
                                    <div>
                                    <label for="description">Descripción</label>
                                    <textarea id="description" maxLength="100" placeholder="" required></textarea>
                                    </div> 
                                
                                </div>
                           </div>
                        </div>  
                    </div> 
                </div> 
            </div>                                     
        </form>     
        `;     

        let formStructure = await this.setFormStructure();

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

                        Object.keys(formStructure.tabsContent[tab].rows[row].formElements).forEach( item => {

                            let formElement = formStructure.tabsContent[tab].rows[row].formElements[item];

                            const elementDiv = document.createElement('div');
                            elementDiv.classList.add('form-element');

                            let label = document.createElement("label");
                            label.innerText = formElement.label;
                            label.setAttribute("for", item);

                            elementDiv.append(label);

                            let input = document.createElement("input");
                            //input.innerType = formElement.input;
                            input.type = formElement.input;
                            input.id = formElement.name;
                            if (formElement.placeholder) {
                                input.placeholder = formElement.placeholder;
                            }
                            elementDiv.append(input)
                            elementDiv.append(input)

                                            
                                               
                                            if (formElement.element == "select") {
                                                let select = document.createElement('select');
                                                select.name = item;
                                                select.required = formElement.required;
                                                
                                                formElement.options.forEach(function(option) {
                                                    let optionElement = document.createElement('option');
                                                    optionElement.value = option.value;
                                                    optionElement.innerHTML = option.label; //captura valores del select
                                                    select.appendChild(optionElement);
                                                });
                                                
                                                elementDiv.appendChild(select);
                                            }
                                                  

                                                
                                            
                                        });
                                    } 
                                    
                                    else {
                                        input.setAttribute(attribute, formElement[attribute]);
                                    }
                                }
                            });
            
                            if(formElement.type !== "checkbox" && formElement.type !== "radio"){
                                elementDiv.append(input)
                            }

                            

                            fila.appendChild(elementDiv); 

                        });    
                    };    
                });

                console.log(formStructure.tabsContent[tab].rows)
            }            
        });
          






        this.shadow.querySelector(".tab-button").classList.add("active");

        this.renderTabs();
    };

    renderTabs(){
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

                    //ini

                    // Aquí se recorren los elementos del formulario para generar los elementos HTML
                    // correspondientes y añadirlos al HTML
                    



                    //end



    
                    if(tabContent.querySelector('.tab-button')){
                        tabContent.querySelector('.tab-button').classList.add('active');
                        document.querySelector(tabContent.querySelector('.tab-button').dataset.target).classList.add('active');
                    }
                }
            });
        });
    }

    setFormStructure = async () => {
       
        let url = this.getAttribute('url');

        switch (url) {

            case '/api/admin/users':

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
                                                }
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
        };
    
}

customElements.define('form-structure', FormStr);



