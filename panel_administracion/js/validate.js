export let validateForm = formInputs => {

    for ( let formInput of formInputs){

        console.log(formInput.value);
        console.log(formInput.dataset.validate)
        
        if(formInput.dataset.validate == 'name'){
            console.log(formInput.value.match(/^[a-zA-Z\s]+$/g) != null);
        }
        
        if(formInput.dataset.validate == 'telephone'){
            console.log(formInput.value.match(/^\d{9}$/g) != null);
        }

        if(formInput.dataset.validate == 'familyname'){
            console.log(formInput.value.match(/[a-zA-Z]/g) != null);
        }
        
        if(formInput.dataset.validate == 'email'){
            console.log(formInput.value.match(/\w+@\w+\.\w+/g) != null);
        }

        if(formInput.dataset.validate == 'textarea'){
            console.log(formInput.value.match(/[a-zA-Z0-9_-]/g) != null);

        }
    }
}    



//Codigo Carlos
// export let validateForm = formInputs => {

//     let validForm = true;
   
//     let validators = {
//         "only-letters": /^[a-zA-Z\s]+$/g,
//         "only-numbers": /\d/g,
//         "telephone": /^\d{9}$/g,
//         "email": /\w+@\w+\.\w+/g,
//         "web": /^(http|https):\/\/\w+\.\w+/g,
//         "password": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
//         "date": /^\d{4}-\d{2}-\d{2}$/g,
//         "time": /^\d{2}:\d{2}$/g
//     }

//     for (let i = 0; i < formInputs.length; i++) {

//         if (formInputs[i].dataset.validate && formInputs[i].value.match(validators[formInputs[i].dataset.validate]) == null) {
//             formInputs[i].classList.add('invalid');
//             validForm = false;
//         }else{
//             formInputs[i].classList.remove('invalid');
//         }
//     }

//     return validForm;
// };