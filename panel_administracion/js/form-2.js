import { validateForm } from "./validate.js";

export let renderForm = () => {

    let form = document.querySelector('form');
    let formInputs = form.elements;
    let sendFormButton = document.querySelector('.send-form-button');

    if(sendFormButton){

        sendFormButton.addEventListener('click', (event) => {

            event.preventDefault();

            validateForm(formInputs);

            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Formulario enviado correctamente',
                    type: 'success'
                }
            }));

        });
    }
    //ini
    render() {

        this.shadow.innerHTML = //si se incluyen comillas sencillas (') en el codigo, se pueden combinar lenguajes
        
        ` 
        <style>

        </style>
        `;

        <div class="forms-pc">
            <form action="" method="get" class="form-example">
                <div class="form-example">
                    <label for="name">Escriba su nombre: </label>
                    <input type="text" name="name" id="name" required>
                </div>
                <div class="form-example2">
                    <label for="email">Escriba su email: </label>
                    <input type="email" name="email" id="email" required>
                </div>
                <div class="form-example3">
                    <input type="submit" value="Enviar">
                </div>
            </form>
        </div>


        let forms = this.shadow.querySelector(".forms-pc");
        let formStructure = this.setFormStructure();

        this.data.forEach( element => {

            let form = document.createElement("form")
            form.action = "";
            form.method = "get";
            form.classList.add("form-example");
            forms-pc.append(form);

            let formExample = document.createElement("div");
            formExample.classList.add("form-example");
            form.append(formExample);

            let label = document.createElement("label");
            label.setAttribute("for", "name");
            label.innerHTML = "Escriba su nombre:";
            formExample.append(label);

            let input = document.createElement("input");
            input.type = "text";
            input.name = "name";
            input.id = "name";
            input.required = true;
            formExample.append(input);

            let formExample2 = document.createElement("div");
            formExample.classList.add("form-example2");
            form.append(formExample2);

            let label2 = document.createElement("label");
            label.setAttribute("for", "email");
            label.innerHTML = "Escriba su email:";
            formExample.append(label2);

            let input2 = document.createElement("input");
            input.type = "text";
            input.name = "email";
            input.id = "email";
            input.required = true;
            formExample2.append(input2);

            let formExample3 = document.createElement("div");
            formExample.classList.add("form-example3");
            form.append(formExample3);

            let input3 = document.createElement("input");
            input.type = "submit";
            input.value = "enviar";
            formExample2.append(input3);
        
        

        
        });	


    }

}
