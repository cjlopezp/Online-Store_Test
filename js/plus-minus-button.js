export let renderPlusMinusButton = () => {
    
    let quantityItem = document.getElementById('quantityItem');
    let quantityMinus = document.getElementById('quantityMinus');
    let quantityPlus = document.getElementById('quantityPlus');

    // minusButton.addEventListener('click', event => {
    //     event.preventDefault();
    //     const currentValue = Number(inputField.value) || 0;
    //     inputField.value = currentValue - 1;
    //   });


    // plusButton.addEventListener('click', event => {
    //     event.preventDefault();
    //     const currentValue = Number(inputField.value) || 0;
    //     inputField.value = currentValue + 1;
    //   });




    quantityPlus.addEventListener("click", () => {

        // Los datos cuando programamos pueden ser de diferentes tipos, por ejemplo
        // un string (texto), un number (números), un boolean (un 1 o un 0),
        // un array (un conjunto de datos), un objeto, etc.  

        // En este caso estamos utilizamos parseInt para convertir el valor de 
        // age.value a número, y así poder despúes sumarle 1. Lo que escribamos 
        // dentro de los parentesis es lo que se convertirá a número. 

        // Por último, podemos dar un nuevo valor al atributo value del input
        // "age", escribiendo después del igual el nuevo valor que queramos que tenga.
        //alert("hola");
       quantityItem.value = (parseInt(quantityItem) + 1);
    });

    quantityMinus.addEventListener("click", () => {
       //alert("hola2");
        quantityItem.value = (parseInt(quantityItem) - 1);
    });
}