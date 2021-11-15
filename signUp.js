var nam = document.getElementById("inputText");
var name2 = document.getElementById("inputTxt");
var errorName = document.getElementById("errorName");
var num = document.getElementById("inputNumber");
var errorNum = document.getElementById("errorNumber");
var regEmail = document.getElementById("inputEmail4");
var errorE = document.getElementById("errorRegemail");
var regPwd = document.getElementById("inputPassword4");
var errorP = document.getElementById("errorRegpwd");
var rePwd = document.getElementById("rePwd");
var errorRepwd = document.getElementById("errorRepwd");
var strong = document.getElementById("weak");
var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");

// Name validation
function nameValidate(){
    var reg1= /^[A-Za-z]+$/

    if ( reg1.test(name2.value)&& reg1.test (nam.value )){
        return true;

    }

    else if (name2.length==0 || nam.length==0){
        errorName.innerHTML="Type Name";
        return false; 
    }
    
        else{
            errorName.innerHTML="Give Proper Name";
            errorName.style.color="red";
            return false;
        }
}
// Number validation
function numberValidate(){
   var reg2= /^([1-9])([\d]{2}[-\s.]?)([\d]{3}[-\s.]?)([\d]{4})$/

    if (reg2.test(num.value)) {
        
        return true;
    }
    else{
        errorNum.innerHTML="Mobile Number is not Valid";
        errorNum.style.color="red";
        return false;
    }
}
// email Validation
function validate(){
    var regExp1 = /^([A-Za-z0-9_\.\-]+)@([A-Za-z\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    
    if(regExp1.test(regEmail.value) ){

        
        return true;
    }
    else{
        errorE.innerHTML= "Invalid Email ";
        errorE.style.color="red";
        
        return false;
    }
}
// Password Validation
function validate1(){
    var regExp2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,}$/

    if (regExp2.test(regPwd.value)) {
       errorP.style.display="none";
        return true;
        

    }
    else{
        errorP.innerHTML="Invalid Password";
        errorP.style.color="red";
        return false;
    }
}

// check 2 passwords
function checkPassword(){
    if (rePwd.value==regPwd.value){
        errorRepwd.style.display="none";
        return true;
    }
        else {
            
            errorRepwd.innerHTML="Password does not Match";
            errorRepwd.style.color="red";
            return false;
        }
    }

     
    
    document.getElementById("inputPassword4").addEventListener("keyup",function (){

        var lng=regPwd.value;
         
        var regExp3 = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,8}$/
        var regExp4 = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{9,12}$/
        var regExp5 = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{13,}$/
        
        
        
         if(lng=="" && lng.length==0) {
             bar1.style.backgroundColor="gray";
             bar2.style.backgroundColor="gray";
             bar3.style.backgroundColor="gray";
         } 
        else if( lng.length<=5   ) {
            bar1.style.backgroundColor="red";
            bar2.style.backgroundColor="gray";
            bar3.style.backgroundColor="gray";
            strong.innerHTML="Password Strength:  Not Enough";
        }  
        
        else if( 6<=lng.length<=8 && regPwd.value.match(regExp3)  ) {
            bar1.style.backgroundColor="green";
            bar2.style.backgroundColor="gray";
            bar3.style.backgroundColor="gray";
            strong.innerHTML="Password Strength:  Weak";
        } 
        else if( 9<=lng.length<=12 && regPwd.value.match(regExp4)  ) {
            bar1.style.backgroundColor="green";
            bar2.style.backgroundColor="green";
            bar3.style.backgroundColor="gray";
            strong.innerHTML="Password Strength:  Medium";
        }  
        else if( 13<=lng.length && regPwd.value.match(regExp5)  ) {
            bar1.style.backgroundColor="green";
            bar2.style.backgroundColor="green";
            bar3.style.backgroundColor="green";
            strong.innerHTML="Password Strength:  Strong";
        }  
    
        }
     )
    
        
    
    
    
    

 