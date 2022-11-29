export let renderTextCounterForm = () => {

    // let inputs = document.querySelectorAll('.input_message');
    // //let counter = document.querySelectorAll('.input_message');

    // inputs.forEach(input => {

    //     input.addEventListener("input", () => {
    //         // alert("funciona!!")
    //         console.log(input);
    //         console.log(input.value.length);
    //         // counter.textContent = input.value.length;
    //     });

    // });
            //https://htmldom.dev/count-the-number-of-characters-of-a-textarea/
    const messageEle = document.getElementById('message');
    const counterEle = document.getElementById('counter');
    
    messageEle.addEventListener('input', function (e) {
        const target = e.target;
    
        // Get the `maxlength` attribute
        const maxLength = target.getAttribute('maxlength');
    
        // Count the current number of characters
        const currentLength = target.value.length;
    
        counterEle.innerHTML = `${currentLength}/${maxLength}`;
    });


}