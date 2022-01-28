import { checkUserValid } from "./home.js";
let users=[];
let count=0;
let ArrayOrder=[];
let copy=[];

window.addEventListener("load",function(e){

    users=JSON.parse(localStorage.getItem("ActiveUser"));
    ArrayOrder=JSON.parse(localStorage.getItem("ArrayOrder"));


    checkUserValid();
    // let user= ArrayOrder.filter(function(e){
    //      e.UserId ===users[0].Id;
    //  }) ;
   


    if(users === null){
         let parent=this.document.getElementById("check_user")
        let check=this.document.createElement("p");
        check.innerHTML="You don`t a member please go to login page";

        parent.append(check);
    }
    else if(ArrayOrder === null ){
        let parent=this.document.getElementById("check_user")
        let check=this.document.createElement("p");
        check.innerHTML="You don`t a make any order";
        parent.append(check);
    }else if(ArrayOrder !== null){

        ArrayOrder.forEach(function(e){

            if( e.UserId === users[0].Id){
           // alert(`${e.UserId }  ${ users[0].Id}`);
          //  copy=[...e];
            console.log(e);
             CreateTBl(e);

             }
            //  else{
            //     let parent=document.getElementById("check_user")
            //     let check=document.createElement("p");
            //     check.innerHTML="You don`t a make any order";
            //     parent.append(check);
            //  }

        });
       
       
        
    }
    
    


});



function CreateTBl(e) {
    //empty table;
    table.innerHTML = "";
    //create table header
    let trH = document.createElement("tr");
    let TdsH = `<th>Number Product</th><th>Name</th><th>Email</th><th>Address</th><th>Total</th> <th>Details</th>`;
    trH.innerHTML += TdsH;
    table.append(trH);
  
 //   data.forEach(function(e) {
        let element_tr = document.createElement("tr");
        element_tr.setAttribute("class","cart_info");
        
      //  for (prop in e) {
            let td_number_product = document.createElement("td");
            td_number_product.setAttribute("class","count_style");


            let td_name = document.createElement("td");
            td_name.setAttribute("class","count_style");

            let td_email = document.createElement("td");
            td_email.setAttribute("class","count_style");

            let td_address = document.createElement("td");
            td_address.setAttribute("class","count_style");

            let td_Total = document.createElement("td");
            td_Total.setAttribute("class","count_style");

            let td_det = document.createElement("td");
      
  



            td_number_product.innerHTML =  e.product.length;
        
           //add color
           td_name.innerText = e.Email;
         td_email.innerHTML = e.Name;

             // add aquentity
            td_address.innerText = e.Address;
            td_Total.innerHTML = `<span>$ </span>`+e.Total;

            td_det.innerHTML=`<button id="view" class="details">Details</button>`


          // element_tr.append(td_img);
           element_tr.append(td_number_product);
           element_tr.append(td_name);
           element_tr.append(td_email);
           element_tr.append(td_address);
           element_tr.append(td_Total);
           element_tr.append(td_det);



      //  }
        table.append(element_tr);


  //  });
}