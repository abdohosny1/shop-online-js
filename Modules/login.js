import user from "../Modules/userModules.js";

let ArrayOfUser=[];
 let count=0;

window.addEventListener("load",function(){

    //event listener from input filed
    login_email.addEventListener("blur",checkEmail);
    login_pass.addEventListener("blur",checkPassword);
    reg_email.addEventListener("blur",checkEmailReg);
    reg_pass.addEventListener("blur",checkPasswordReg);
    reg_name.addEventListener("blur",checkUserName);
    reg_phone.addEventListener("blur",checkPhone);

    //hide login form and show register
    goToReg.addEventListener("click",function(){
        login_form.style.display="none";
        reg_form.style.display="inline";  
      });

    //hide register form and show login
      goToLogin.addEventListener("click",function(){
        login_form.style.display="inline";
        reg_form.style.display="none";  
      });

      //add user
      bu_reg.addEventListener("click",function(e){
        if(checkUserName() && checkEmailReg() && checkPasswordReg() && checkPhone()){
            count++;
            let name=reg_name.value;
            let email=reg_email.value;
            let password=reg_pass.value;
            let phone=reg_phone.value;
        
            let newUser=new user(count,name,email,password,phone);
        
        ArrayOfUser.push(newUser);

        console.log(newUser);
        console.log(ArrayOfUser);

       alert("User has been added successfully");
       remove();
       localStorage.setItem("ArrayUser", JSON.stringify(ArrayOfUser));

           
        }else{
            alert("enter data");
            e.preventDefault();

        }
      });
      
      //check for user
      bu_login.addEventListener("click",function(e){
        if(checkEmail() && checkPassword ()){
            //get data from local
           let data=JSON.parse(localStorage.getItem("ArrayUser"));
           console.log(data);

           let email_user=login_email.value;
           let pass_user=login_pass.value;
           
           //get one object from local
           for( let i=0; i<data.length ;i++){

            //get any data
           // console.log(data[i].name);

              // check for email and password
            if(data[i].Email==email_user){
                if(data[i].Password==pass_user){
                    alert("Correct user")
                    break;
                }else{
                    alert("wrong password");
                    break;

                }
            }else{
                alert("wrong email");
                break;

            }

           }


          

         
        }else{
            alert("enter data");
            e.preventDefault();

        }
      })

});






//validitaion the form
function checkEmail() {
    var checkUSerFlag = false;
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (login_email.value == "") {
        error_email.innerText = "this field is required";
        checkUSerFlag = false;
        login_email.focus();
    }else if(!pattern.test(login_email.value)){
        error_email.innerText = "example@example.com";
        checkUSerFlag = false;
        login_email.focus();
    }
   
    else {
        
        checkUSerFlag = true;
        error_email.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function checkEmailReg() {
    var checkUSerFlag = false;
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (reg_email.value == "") {
        reg_error_email.innerText = "this field is required";
        checkUSerFlag = false;
        reg_email.focus();
    }else if(!pattern.test(reg_email.value)){
        reg_error_email.innerText = "example@example.com";
        checkUSerFlag = false;
        reg_email.focus();
    }
   
    else {
        
        checkUSerFlag = true;
        reg_error_email.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function checkPassword() {
    var checkUSerFlag =false;
    var pattern = /^[0-9a-zA-Z]*[0-9][0-9a-zA-Z]*$/;

    if (login_pass.value == "") {
        error_pass.innerText = "this field is required";
        checkUSerFlag = false;
        login_pass.focus();
    }else if(login_pass.value.length < 8){
        error_pass.innerText = "password is weak";
        checkUSerFlag = false;
        login_pass.focus();
    }else if(login_pass.value.length > 20){
        error_pass.innerText = "password length is max";
        checkUSerFlag = false;
        login_pass.focus();
    }else if((!pattern.test(login_pass.value))){
        error_pass.innerText = " password must have number";
        checkUSerFlag = false;
        login_pass.focus();
    }
   
    else {
        checkUSerFlag = true;
        error_pass.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function checkPasswordReg() {
    var checkUSerFlag =false;
    var pattern = /^[0-9a-zA-Z]*[0-9][0-9a-zA-Z]*$/;

    if (reg_pass.value == "") {
        reg_error_pass.innerText = "this field is required";
        checkUSerFlag = false;
        reg_pass.focus();
    }else if(reg_pass.value.length < 8){
        reg_error_pass.innerText = "password is weak";
        checkUSerFlag = false;
        reg_pass.focus();
    }else if(reg_pass.value.length > 20){
        reg_error_pass.innerText = "password length is max";
        checkUSerFlag = false;
        reg_pass.focus();
    }else if((!pattern.test(reg_pass.value))){
        reg_error_pass.innerText = " password must have number";
        checkUSerFlag = false;
        reg_pass.focus();
    }
   
    else {
        checkUSerFlag = true;
        reg_error_pass.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function checkUserName() {
    var checkUSerFlag =false;
    var pattern = /^[0-9a-zA-Z]*[0-9][0-9a-zA-Z]*$/;

    if (reg_name.value == "") {
        error_name.innerText = "this field is required";
        checkUSerFlag = false;
        reg_name.focus();
    }else if(reg_name.value.length < 8){
        error_name.innerText = "username length is small";
        checkUSerFlag = false;
        reg_name.focus();
    }else if(reg_name.value.length > 20){
        error_name.innerText = "username length is max";
        checkUSerFlag = false;
        reg_name.focus();
    }else if((!pattern.test(reg_name.value))){
        error_name.innerText = " username must have number";
        checkUSerFlag = false;
        reg_name.focus();
    }
   
    else {
        checkUSerFlag = true;
        error_name.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function checkPhone() {
    var checkUSerFlag =false;
    var pattern=/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g;

    if (reg_phone.value == "") {
        error_phone.innerText = "this field is required";
        checkUSerFlag = false;
        reg_phone.focus();
    }else if(reg_phone.value.length < 10){
        error_phone.innerText = "phone length is small";
        checkUSerFlag = false;
        reg_phone.focus();
    // }else if(reg_phone.value.length > 15){
    //     error_phone.innerText = "phone length is max";
    //     checkUSerFlag = false;
    //     reg_phone.focus();
    }else if((!pattern.test(reg_phone.value))){
        error_phone.innerText = "+20 0111111233";
        checkUSerFlag = false;
        reg_phone.focus();
    }
   
    else {
        checkUSerFlag = true;
        error_phone.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}

function remove(){
    reg_name.value=""; 
    reg_email.value="";
    reg_pass.value="";
    reg_phone.value="";


}
//window.localStorage.removeItem('name');  //remove key

//window.localStorage.clear(); // clear all local
