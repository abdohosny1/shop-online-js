import Order from "../Modules/orderModules.js";
import { AllProducts } from "../modules/products.js";
import { checkUserValid } from "./home.js";

let ArrayCart=[];
let user=[];
let count=0;
let ArrayOrder=[];
let Total=0;



window.addEventListener("load",function(e){
    checkUserValid();
    user=JSON.parse(localStorage.getItem("ActiveUser"));
    ArrayCart=JSON.parse(localStorage.getItem("ArrayProduct"));
  

    // console.log(`user = ${user[0].Id}`);
    // console.log(`cart = ${ArrayCart.length}`);

    getAll_product();

    //event to validiate
    fname.addEventListener("input",checkUserName);
    email.addEventListener("input",checkEmail);
    adr.addEventListener("input",checkAddress);
    city.addEventListener("input",checkCity);
    state.addEventListener("input",checkState);
    zip.addEventListener("input",checkZip);
    cname.addEventListener("input",checkCardName);
    ccnum.addEventListener("input",checkCardNumber);
    exp_month.addEventListener("input",check_exp_month);
    exp_year.addEventListener("input",check_exp_year);
    cvv.addEventListener("input",check_cvv);


    //event on button
    contnue_checkout.addEventListener("click",function(e){
        //localStorage.removeItem("ArrayOrder");


        if(checkUserName() && checkEmail() && checkAddress() && checkCity()&& checkState()&& checkZip()&&checkCardName()&&checkCardNumber() &&check_exp_month()&& check_exp_year() &&check_cvv()  ){
           //    constructor(_id,_userId,_userEmail,_userName,_userAddress,_product=[],_total){
           count++;
           let name_order=fname.value;
           let email_order=email.value;
           let address_order=adr.value;
   
          
             
            if(localStorage.getItem("ArrayOrder") === null){
                let newOrder=new Order(count,user[0].Id,name_order,email_order,address_order,ArrayCart,Total);
                ArrayOrder.push(newOrder);
         
                localStorage.setItem("ArrayOrder", JSON.stringify(ArrayOrder));
                localStorage.removeItem("ArrayProduct");
                remove();
                alert("order added successfully");
                location.href="/html/home.html";
         
         
               }else{
                let newArray=[];
                let co=0;
              let All_data=JSON.parse(localStorage.getItem("ArrayOrder"));
              var last_element = All_data[All_data.length - 1];
                 count=last_element.Id+1;
                   
                 let newOrder=new Order(count,user[0].Id,name_order,email_order,address_order,ArrayCart,Total);
                 newArray=[...All_data];
                newArray.push(newOrder);
                localStorage.setItem("ArrayOrder", JSON.stringify(newArray));
                remove();
                localStorage.removeItem("ArrayProduct");
                alert("order added successfully");
                location.href="/html/home.html";

                
         
         
               }
            



        }else{
            alert("enter data");
            e.preventDefault();
        }
     
      
    });
  
});


//draw cart item
function getAll_product(){

    let add_item=document.getElementById("add_item");
    add_item.innerHTML="";

    //create count product in cart
    let cerate_header=document.createElement("h4");
    cerate_header.innerHTML=`<h4>Cart 
    <span class="price" style="color: black;">
    <i class="fa fa-shopping-cart"></i> <span style="color: #F85D0A;">${ArrayCart.length}</span></span>
    `;
    add_item.append(cerate_header);

   // var create_product;
  
    ArrayCart.forEach(function(e){
        console.log(e);

       let create_product=document.createElement("p");
        create_product.innerHTML=` 
        <span style="font-size: 15;" >${e.Name}</span>
         <span class="price">$${e.Price * e.Count}</span>
        `;
        Total+=e.Price * e.Count;

       
        add_item.append(create_product);

    });


    //create total 
    let cerate_total=document.createElement("p");
    cerate_total.innerHTML=`<hr>
     <p  style="color: #F85D0A; font-size: 20;">Total 
     <span class="price"  style="color: #F85D0A; font-size: 20;"><span>$ ${Total}</span></span></p>

    `;
    add_item.append(cerate_total);


    

  




}


//remove all input
function remove(){
    fname.value="";
    email.value="";
    adr.value="";
    city.value="";
    state.value="";
    zip.value="";
    cname.value="";
    ccnum.value="";
    exp_month.value="";
    cvv.value="";
    exp_year.value="";


}

//validiate form

function check_cvv() {
    var checkUSerFlag =false;
    var pattern = /^\d+$/;

    if (cvv.value == "") {
        card_cvv_error.innerText = "this field is required";
        checkUSerFlag = false;
        cvv.focus();
    }else if(cvv.value.length < 4){
        card_cvv_error.innerText = "length is small";
        checkUSerFlag = false;
        cvv.focus();
    }else if(cvv.value.length > 10){
        card_cvv_error.innerText = " length is max";
        checkUSerFlag = false;
        cvv.focus();
    }else if(!pattern.test(cvv.value)){
        card_cvv_error.innerText = " must have number";
        checkUSerFlag = false;
        cvv.focus();
    }
   
    else {
        checkUSerFlag = true;
        card_cvv_error.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}

function check_exp_year() {
    var checkUSerFlag =false;
    var pattern = /^\d+$/;

    if (exp_year.value == "") {
        card_year_error.innerText = "this field is required";
        checkUSerFlag = false;
        exp_year.focus();
    }else if(exp_year.value.length < 4){
        card_year_error.innerText = "length is small";
        checkUSerFlag = false;
        exp_year.focus();
    }else if(exp_year.value.length > 6){
        card_year_error.innerText = " length is max";
        checkUSerFlag = false;
        exp_year.focus();
    }else if(!pattern.test(exp_year.value)){
        card_year_error.innerText = " must have number";
        checkUSerFlag = false;
        exp_year.focus();
    }
   
    else {
        checkUSerFlag = true;
        card_year_error.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function check_exp_month() {
    var checkUSerFlag =false;
    var pattern = /^[a-zA-Z]+$/;

    if (exp_month.value == "") {
        card_month_error.innerText = "this field is required";
        checkUSerFlag = false;
        exp_month.focus();
    }else if(exp_month.value.length < 2){
        card_month_error.innerText = " length is small";
        checkUSerFlag = false;
        exp_month.focus();
    }else if(exp_month.value.length > 10){
        card_month_error.innerText = " length is max";
        checkUSerFlag = false;
        exp_month.focus();
    }else if(!pattern.test(exp_month.value)){
        card_month_error.innerText = "must have letter";
        checkUSerFlag = false;
        exp_month.focus();
    }
   
    else {
        checkUSerFlag = true;
        card_month_error.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}

function checkCardNumber() {
    var checkUSerFlag =false;
    var pattern = /^\d+$/;

    if (ccnum.value == "") {
        card_number_error.innerText = "this field is required";
        checkUSerFlag = false;
        ccnum.focus();
    }else if(ccnum.value.length < 16){
        card_number_error.innerText = "card number length is small";
        checkUSerFlag = false;
        ccnum.focus();
    }else if(zip.value.length > 20){
        card_number_error.innerText = "card number length is max";
        checkUSerFlag = false;
        ccnum.focus();
    }else if(!pattern.test(ccnum.value)){
        card_number_error.innerText = "card number must have number";
        checkUSerFlag = false;
        ccnum.focus();
    }
   
    else {
        checkUSerFlag = true;
        card_number_error.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function checkCardName() {
    var checkUSerFlag =false;
    var pattern = /^[a-zA-Z]+$/;

    if (cname.value == "") {
        cardname_error.innerText = "this field is required";
        checkUSerFlag = false;
        cname.focus();
    }else if(cname.value.length < 10){
        cardname_error.innerText = "card Name length is small";
        checkUSerFlag = false;
        cname.focus();
    }else if(cname.value.length > 50){
        cardname_error.innerText = "card name length is max";
        checkUSerFlag = false;
        cname.focus();
    }else if(!pattern.test(cname.value)){
        cardname_error.innerText = "Card name must have letter";
        checkUSerFlag = false;
        cname.focus();
    }
   
    else {
        checkUSerFlag = true;
        cardname_error.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function checkZip() {
    var checkUSerFlag =false;
    var pattern = /^\d+$/;

    if (zip.value == "") {
        zip_error.innerText = "this field is required";
        checkUSerFlag = false;
        zip.focus();
    }else if(zip.value.length < 3){
        zip_error.innerText = "zip length is small";
        checkUSerFlag = false;
        zip.focus();
    }else if(zip.value.length > 10){
        zip_error.innerText = "zip length is max";
        checkUSerFlag = false;
        zip.focus();
    }else if(!pattern.test(zip.value)){
        zip_error.innerText = "zip must have number";
        checkUSerFlag = false;
        zip.focus();
    }
   
    else {
        checkUSerFlag = true;
        zip_error.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function checkState() {
    var checkUSerFlag =false;
    var pattern = /^[a-zA-Z]+$/;

    if (state.value == "") {
        ny_error.innerText = "this field is required";
        checkUSerFlag = false;
        state.focus();
    }else if(state.value.length < 3){
        ny_error.innerText = "ny length is small";
        checkUSerFlag = false;
        state.focus();
    }else if(state.value.length > 10){
        ny_error.innerText = "ny length is max";
        checkUSerFlag = false;
        state.focus();
    }else if(!pattern.test(state.value)){
        ny_error.innerText = "ny must have letter";
        checkUSerFlag = false;
        state.focus();
    }
   
    else {
        checkUSerFlag = true;
        ny_error.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function checkCity() {
    var checkUSerFlag =false;
    var pattern = /^[a-zA-Z]+$/;

    if (city.value == "") {
        city_error.innerText = "this field is required";
        checkUSerFlag = false;
        city.focus();
    }else if(city.value.length < 3){
        city_error.innerText = "city length is small";
        checkUSerFlag = false;
        city.focus();
    }else if(city.value.length > 30){
        city_error.innerText = "city length is max";
        checkUSerFlag = false;
        city.focus();
    }else if(!pattern.test(city.value)){
        city_error.innerText = "city must have letter";
        checkUSerFlag = false;
        city.focus();
    }
   
    else {
        checkUSerFlag = true;
        city_error.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function checkAddress() {
    var checkUSerFlag =false;
    var pattern = /^[0-9a-zA-Z]*[0-9][0-9a-zA-Z]*$/;

    if (adr.value == "") {
        address_error.innerText = "this field is required";
        checkUSerFlag = false;
        adr.focus();
    }else if(adr.value.length < 10){
        address_error.innerText = "542 W. 15th Street";
        checkUSerFlag = false;
        adr.focus();
    }else if(adr.value.length > 30){
        address_error.innerText = " length is max";
        checkUSerFlag = false;
        adr.focus();
    }
   
    else {
        checkUSerFlag = true;
        address_error.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function checkEmail() {
    var checkUSerFlag = false;
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.value == "") {
        email_error.innerText = "this field is required";
        checkUSerFlag = false;
        email.focus();
    }else if(!pattern.test(email.value)){
        email_error.innerText = "example@example.com";
        checkUSerFlag = false;
        login_email.focus();
    }
   
    else {
        
        checkUSerFlag = true;
        email_error.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}
function checkUserName() {
    var checkUSerFlag =false;
    var pattern = /^[0-9a-zA-Z]*[0-9][0-9a-zA-Z]*$/;

    if (fname.value == "") {
        name_error.innerText = "this field is required";
        checkUSerFlag = false;
        fname.focus();
    }else if(fname.value.length < 3){
        name_error.innerText = "Name length is small";
        checkUSerFlag = false;
        fname.focus();
    }else if(fname.value.length > 30){
        name_error.innerText = "Name length is max";
        checkUSerFlag = false;
        fname.focus();
    }
   
    else {
        checkUSerFlag = true;
        name_error.innerText = "";
    }
    console.log(checkUSerFlag);
    return checkUSerFlag;
}