const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const submit = document.getElementById("button");
const errorMessage = document.getElementById("errorMessage");
const form = document.getElementById("form");

function onChange(){
    if (password.value === passwordConfirm.value){
        passwordConfirm.setCustomValidity('');
    }else{
        passwordConfirm.setCustomValidity('Passwords do not match');
    }
}
