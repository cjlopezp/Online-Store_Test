class Menu extends HTMLElement {

    constructor() {
        super(); 
        this.shadow = this.attachShadow({ mode: 'open' }); 
        this.menuItems = [];
    }

    connectedCallback() { 
        this.loadData().then(() => this.render());
    }

    async loadData(){

        let result = await fetch('http://127.0.0.1:8080/api/admin/menus/display/admin-header',{
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
                },
            }
        );
        let data = await result.json();
        this.menuItems = Object.values(data);
    }

    render() { 

        this.shadow.innerHTML = 
        `
        <style>

        body
        {
            margin: 0;
            padding: 0;
            
            /* make it look decent enough */
            background: #232323;
            color: #cdcdcd;
            font-family: "Avenir Next", "Avenir", sans-serif;
        }

        #menuToggle
        {
            display: block;
            position: relative;
            top: 50px;
            left: 10px;
            
            z-index: 1;
            
            -webkit-user-select: none;
            user-select: none;
        }

        #menuToggle a
        {
            text-decoration: none;
            color: #232323;
            
            transition: color 0.3s ease;
        }

        #menuToggle a:hover
        {
            color: tomato;
        }


        #menuToggle input
        {
            display: block;
            width: 40px;
            height: 32px;
            position: absolute;
            top: -7px;
            left: -5px;
            
            cursor: pointer;
            
            opacity: 0; /* hide this */
            z-index: 2; /* and place it over the hamburger */
            
            -webkit-touch-callout: none;
        }

        /*
        * Just a quick hamburger
        */
        #menuToggle span
        {
            display: block;
            width: 33px;
            height: 4px;
            margin-bottom: 5px;
            position: relative;
            
            background: #cdcdcd;
            border-radius: 3px;
            
            z-index: 1;
            
            transform-origin: 4px 0px;
            
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                        background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                        opacity 0.55s ease;
        }

        #menuToggle span:first-child
        {
            transform-origin: 0% 50%;
        }

        #menuToggle span:nth-last-child(2)
        {
            transform-origin: 0% 100%;
        }

        /* 
        * Transform all the slices of hamburger
        * into a crossmark.
        */
        #menuToggle input:checked ~ span
        {
            opacity: 1;
            transform: rotate(45deg) translate(-2px, -1px);
            background: #232323;
        }

        /*
        * But let's hide the middle one.
        */
        #menuToggle input:checked ~ span:nth-last-child(3)
        {
            opacity: 0;
            transform: rotate(0deg) scale(0.2, 0.2);
        }

            /*
            * Ohyeah and the last one should go the other direction
            */
            #menuToggle input:checked ~ span:nth-last-child(2)
            {
            transform: rotate(-45deg) translate(0, -1px);
        }

        /*
        * Make this absolute positioned
        * at the top left of the screen
        */
        #menu
        {
            position: absolute;
            width: 300px;
            margin: -100px 0 0 -50px;
            padding: 50px;
            padding-top: 125px;
            
            background: #ededed;
            list-style-type: none;
            -webkit-font-smoothing: antialiased;
            /* to stop flickering of text in safari */
            
            transform-origin: 0% 0%;
            transform: translate(-100%, 0);
            
            transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        }

        #menu li
        {
            padding: 10px 0;
            font-size: 22px;
        }

        #menu a
        {
            padding: 10px 10px;
            font-size: 22px;
        }

        /*
        * And let's slide it in from the left
        */
        #menuToggle input:checked ~ ul
        {
            transform: none;
        }
       
        </style>





        
        <nav role="navigation">
            <div id="menuToggle">
                
                <input type="checkbox" />
                
                <span></span>
                <span></span>
                <span></span>
                                
                <ul id="menu">
                  
                </ul>
            </div>
        </nav>

        `;	

        console.log(this.menuItems);

        this.shadow.querySelector('#menuToggle').addEventListener('click', () => {
            console.log("Carlos, a mi si me funciona el Openchat!");
        });

        //ini

        this.menuItems.forEach(menuItem => {
            let element = document.createElement("a");
            element.href = menuItem.customUrl;
            element.classList.add("burlink");
            element.innerHTML = menuItem.name;
            this.shadowRoot.querySelector("#menu").appendChild(element);
        });

        //end

        this.shadowRoot.querySelectorAll('.burlink').forEach(el => {
            el.addEventListener('click', () => {
                console.log(`Link ${el.href} clicked`);//ATENCION A ESTO, NO VEO EFECTO EN LA WEB//

                document.dispatchEvent(new CustomEvent('newUrl', {
                    detail: {
                        title: el.textContent,
                    }
                }));
            });
        });

        //inicio

        

        //final




    }
}

customElements.define('nav-burger-menu', Menu);

