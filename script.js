// Login validation start
var loginEmail = document.getElementById("inputEmail");
var loginPwd = document.getElementById("inputPassword");
var errorEmail = document.getElementById("errorEmail");
var errorPwd = document.getElementById("errorPwd");

function firstValidate(){
    var regExp1 = /^([A-Za-z0-9_\.\-]+)@([A-Za-z\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    
    if(regExp1.test(loginEmail.value) ){

        errorEmail.innerHTML= "Valid";
        
        
        errorEmail.style.color="green";
        return true;
    }
    else{
        errorEmail.innerHTML= "Invalid Email ";
        errorEmail.style.color="red";
        
        return false;
    }
}
function secondValidate(){
    var regExp2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,}$/

    if (regExp2.test(loginPwd.value)) {
       
        return true;

    }
    else{
        errorPwd.innerHTML="Invalid Password";
        errorPwd.style.color="red";
        return false;
    }
}
// Login Validation ends