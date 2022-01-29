//import { checkUserValid } from "./home.js";


let data=JSON.parse(localStorage.getItem("ArrayProduct"));
let user=[];

window.addEventListener("load",function(event){
     
    checkUserValid();
    console.log(user);
     user=JSON.parse(localStorage.getItem("ActiveUser"));

    if(user===null){
        
        div_table.style.display="none";
        see_total.style.display="none";
        empty.style.display="block";

        let e=this.document.getElementById("empty");
        let check=this.document.createElement("p");
        check.innerHTML="You don`t a member please login";

        e.append(check);
       
            
    }
    else 
    if(data === null){
       div_table.style.display="none";
       see_total.style.display="none";
       empty.style.display="block";

       let e=this.document.getElementById("empty");
       let check=this.document.createElement("p");
       check.innerHTML=` <img src="/images/shopping-cart.png" class="empty_image">
       <p>Cart is Empty</p>`;

       e.append(check);

        
     }else{
        empty.style.display="none";
        CreateTBl();
     getTotal();
     }
    
   
   
   


});


function CreateTBl() {
    //empty table;
    table.innerHTML = "";
    //create table header
    let trH = document.createElement("tr");
    let TdsH = `<th>Product</th><th>Color</th><th>Size</th><th>Quentity</th><th>SubTotal</th>`;
    trH.innerHTML += TdsH;
    table.append(trH);
    //forEach elment inside Array of Object==>tr
  
    data.forEach(function(e) {
        let element_tr = document.createElement("tr");
        element_tr.setAttribute("class","cart_info");
        
      //  for (prop in e) {
            let td_name = document.createElement("td");

            let td_color = document.createElement("td");
            td_color.setAttribute("class","count_style");

            let td_size = document.createElement("td");
            td_size.setAttribute("class","count_style");

            let td_count = document.createElement("td");
                td_count.setAttribute("class","count_style");

            let td_price = document.createElement("td");
            td_price.setAttribute("class","count_style");
      
  



            td_name.innerHTML =  ` <div class="cart_info">
            <img src="${e.Image}"/>
            <p>${e.Name}</p>
            <p>
            <button class="remove" id="bu_remove" onclick="remove(${e.Id});" >Remove</button>
    
        </div>`;
     
        
           //add color
           td_color.innerText = e.Color;
         td_size.innerHTML = e.Size;

             // add aquentity
            td_count.innerText = e.Count;
            td_price.innerHTML = `<span style="font-size:25px;  font-weight: bold;">$</span>`+" "+e.Price*e.Count;
            // td_img.src = e.Image;



          // element_tr.append(td_img);
           element_tr.append(td_name);
           element_tr.append(td_color);
           element_tr.append(td_size);
           element_tr.append(td_count);
           element_tr.append(td_price);



      //  }
        table.append(element_tr);


    });
}

function getTotal(){
    let All_total=0;


    total_table.innerHTML = "";

  

    data.forEach(function(e){
        All_total+= e.Price * e.Count;
      
    });

    
    //console.log(`all = ${All_total}`);
 

    let element_tr = document.createElement("tr");
    let bu = document.createElement("tr");

    let td_all = document.createElement("td");
    td_all.setAttribute("class","text_total_style");

    let td_total = document.createElement("td");
    td_total.setAttribute("class","total_style");

    let checkout = document.createElement("td");
    checkout.colSpan="2";
    checkout.setAttribute("id","bu_checkout");
 



   //add total price
    td_all.innerText="Total";
    td_total.innerHTML=`<span>$</span>`+" "+All_total;

    //add button checkout
    checkout.innerHTML= `<div><button onclick="checkout();" class="checkout">Checkout</button></div>`;


    element_tr.append(td_all);
    element_tr.append(td_total);
    bu.append(checkout);




    total_table.append(element_tr);
    total_table.append(bu);







    
}


//event at remove button
function remove(id){
    if (confirm('Are you sure you want to Remove this Item ?')){
       

         //  empty.style.display="none";
            data.forEach(function(e){
               
                if(id==e.Id){
                  

                   id--;
                  data.splice(id,1);

                  // delete data[id];
                   
                 if(data.length <= 0){
                     localStorage.removeItem("ArrayProduct");
                     div_table.style.display="none";
                     see_total.style.display="none";
                     empty.style.display="block";
                     let e=this.document.getElementById("empty");
                     let check=this.document.createElement("p");
                     check.innerHTML=` <img src="/images/shopping-cart.png" class="empty_image">
                     <p>Cart is Empty</p>`;
              
                     e.append(check);
                 }else{
                    localStorage.setItem("ArrayProduct", JSON.stringify(data));
                    CreateTBl();
                    getTotal();

                 }
              
                 

                    }
   
             });
       // }
          
    }
}



//event at checkout button
function checkout(){

    location.href="/html/checkout.html";
   // localStorage.clear();
}

function checkUserValid(){
    let user=[];
  user=JSON.parse(localStorage.getItem("ActiveUser"));
    if(user ===null  ){
      console.log("null");
       
      go_to_login.innerHTML=` <a href="/html/login.html"> 
      <img  class="imageicon" src="/images/profile-user.png" />
  </a>`;
  
    }else{
      console.log("count");
   
     go_to_login.innerHTML=`
     <a href="#"> 
      <img  class="imageicon" src="/images/logout.png" />
      </a>
     <span style="font-size: 15;"> ${user[0].Name}</span>`;
  go_to_login.addEventListener("click",function(e){
    e.preventDefault();
    flag=false;
    if(confirm("Would you logout?")){
      user==null;
       localStorage.removeItem("ActiveUser");
       this.innerHTML=` <a href="/html/login.html"> 
       <img  class="imageicon" src="/images/profile-user.png" />
   </a>`;
  
  
   
    }
  });
     
      console.log(`user = ${user[0].Name}`);
  
    }
  
  }


