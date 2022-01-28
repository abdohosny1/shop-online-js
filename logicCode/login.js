import User from "../modules/userModules.js";

let ArrayOfUser=[];
 let count=0;

window.addEventListener("load",function(){

    //event listener from input filed
    login_email.addEventListener("input",checkEmail);
    login_pass.addEventListener("input",checkPassword);
    reg_email.addEventListener("input",checkEmailReg);
    reg_pass.addEventListener("input",checkPasswordReg);
    reg_name.addEventListener("input",checkUserName);
    reg_phone.addEventListener("input",checkPhone);

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
    //    localStorage.removeItem("ArrayUser");
    //    localStorage.clear();
        if(checkUserName() && checkEmailReg() && checkPasswordReg() && checkPhone()){
            count++;
            let name=reg_name.value;
            let email=reg_email.value;
            let password=reg_pass.value;
            let phone=reg_phone.value;
            if(localStorage.getItem("ArrayUser") === null){

                let newUser=new User(count,name,email,password,phone,false);
            
                ArrayOfUser.push(newUser);
         
                localStorage.setItem("ArrayUser", JSON.stringify(ArrayOfUser));
        
                alert("User has been added successfully");
                remove();
                
         
            }else{

                let newArray=[];
                let co=0;
              let All_data=JSON.parse(localStorage.getItem("ArrayUser"));
              var last_element = All_data[All_data.length - 1];
                 count=last_element.Id+1;
                   
                 let newUser=new User(count,name,email,password,phone,false);
                 newArray=[...All_data];
                newArray.push(newUser);
                localStorage.setItem("ArrayUser", JSON.stringify(newArray));
                remove();
                
                alert("User has been added successfully");
                location.href="/html/login.html";

            }
        
          

        console.log(newUser);
        console.log(ArrayOfUser);

      

           
        }else{
            alert("enter data");
            e.preventDefault();

        }
      });
      
      //check for user
      bu_login.addEventListener("click",function(e){
        let data=JSON.parse(localStorage.getItem("ArrayUser"));

        if(checkEmail() && checkPassword ()){
            //get data from local
           console.log(data);

           let email_user=login_email.value;
           let pass_user=login_pass.value;
           localStorage.removeItem("ActiveUser");
           let Active_user=[];
         
         let user=   data.find(function(e){
               return e.Email ===email_user;
            }) ;
        
            
            if(user){
                

                if(user.Password ===pass_user){
                    alert("Wellcome " + user.Name);

                                user.ISCorrect=true;
                                
            
                               Active_user.push(user);
                               
                               localStorage.setItem("ActiveUser", JSON.stringify(Active_user));
                              location.href="../html/home.html";
                }else{
                    alert("Wrong password.");
                }


            }else{
                alert("User don`t exist.");
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

/*
    data.forEach(function(e){
            console.log(`eeee = ${e.Email}`);
            if(e.Email ==email_user){
                if(e.Password === pass_user){

                    alert("Correct user");
                //     data[i].ISCorrect=true;
                    
                //     console.log(`befor = ${data[i]}`);

                //    // update=[...data];
                //    data[i].splice(i,1);
                //    console.log(`data = ${data[i]}`);

                   //update.push(data[i]);
                   
                  //  localStorage.removeItem("ArrayUser");
                   //  localStorage.setItem("ArrayUser",update);
                   // console.log( `update= ${update}`);
                 //  location.href="../html/home.html";
                 //  history.back();

                    break;
                }else{
                    alert("wrong password");
                    break;

                }

            }else{
                alert("wrong email");
                break;
            }

           });
*/
//window.localStorage.removeItem('name');  //remove key

//window.localStorage.clear(); // clear all local
