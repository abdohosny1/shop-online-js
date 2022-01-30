import { checkUserValid } from "./home.js";
let user=[];
user=JSON.parse(localStorage.getItem("ActiveUser"));

let count=0;
let ArrayOrder=[];

window.addEventListener("load",function(e){

    checkUserValid();

    send_email.value=user[0].Email;
    send_name.value=user[0].Name;

})

