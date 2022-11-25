export let renderPlusMinusButton = () => {
    
    let inputField = document.querySelector('.quantity-item input'); 
    let buttonMinus = document.querySelector('.quantity-minos button');
    let buttonPlus = document.querySelector('.quantity-plus button');

    if(buttonPlus){
        buttonPlus.addEventListener("click", () => {      
            //alert("hola");
            inputField.value = (parseInt(inputField.value) + 1);
        });
    }

    if(buttonMinus){
        buttonMinus.addEventListener("click", () => {
            if(inputField.value > 1){
                inputField.value = (parseInt(inputField.value) - 1);       
            }
         });
    }

    if(inputField){
        inputField.addEventListener('keyup', () =>{
            if (inputField.value == 0 || inputField.value < 0) 
                buttonMinus.disabled = true
            else buttonMinus.disabled = false;  
            });
    }
}



// inputField.addEventListener("change", function (event) {
//     if (this.value < 1) this.value = 1; // minimum is 1
//     else this.value = Math.floor(this.value); // only integers allowed
// })


//querySelec
// Los datos cuando programamos pueden ser de diferentes tipos, por ejemplo
        // un string (texto), un number (números), un boolean (un 1 o un 0),
        // un array (un conjunto de datos), un objeto, etc.  

        // En este caso estamos utilizamos parseInt para convertir el valor de 
        // age.value a número, y así poder despúes sumarle 1. Lo que escribamos 
        // dentro de los parentesis es lo que se convertirá a número. 

        // Por último, podemos dar un nuevo valor al atributo value del input
        // "age", escribiendo después del igual el nuevo valor que queramos que tenga.
        