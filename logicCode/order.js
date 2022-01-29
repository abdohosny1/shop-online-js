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
    back_home_event.addEventListener("click",function(e){
      view_details_div.style.display="none"; 

      div_table.style.display="block";


     
     
    });
   


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
            copy.push(e);
            console.log(e);
             CreateTBl();

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



function CreateTBl() {
    //empty table;
    let table=document.getElementById("table");
    table.innerHTML = "";
    //create table header
    let trH = document.createElement("tr");
    let TdsH = `<th>Number Product</th><th>Name</th><th>Email</th><th>Address</th><th>Total</th> <th>Details</th>`;
    trH.innerHTML += TdsH;
    table.append(trH);
  
   copy.forEach(function(e) {
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

            td_det.innerHTML=`<button   class="details">Details</button>`;


            td_det.addEventListener("click",function(event){
              div_table.style.display="none";
              view_details_div.style.display="block";

              view_details.innerHTML = "";
              //create table header
              let trH = document.createElement("tr");
              let TdsH = `<th>Product</th><th>Color</th><th>Size</th><th>Quentity</th><th>Price</th>`;
              trH.innerHTML += TdsH;
              view_details.append(trH);
              let data=e.product;
              for(let i=0;i<data.length;i++){
                let element_tr = document.createElement("tr");
                element_tr.setAttribute("class","cart_info");
                
              //  for (prop in e) {
                    let td_name = document.createElement("td");
        
                    let td_color = document.createElement("td");
                   td_color.setAttribute("class","details_style_product");
        
                    let td_size = document.createElement("td");
                     td_size.setAttribute("class","details_style_product");
        
                    let td_count = document.createElement("td");
                        td_count.setAttribute("class","details_style_product");
        
                    let td_price = document.createElement("td");
                   td_price.setAttribute("class","details_style_product");
              
          
        
        
        
                    td_name.innerHTML =  ` <div class="cart_info">
                    <img src="${data[i].Image}"/>
                    <p>${data[i].Name}</p>
                    <p>
            
                </div>`;
                console.log(`product = ${data[0].Size}`);
               // console.log(`product = ${e.product}`);
  
             
                
                   //add color
                   td_color.innerText = data[i].Color;
                 td_size.innerHTML = data[i].Size;
        
                     // add aquentity
                    td_count.innerText = data[i].Count;
                    td_price.innerHTML = `<span style="font-size:25px;  font-weight: bold;">$</span>`+" "+data[i].Price;
                    // td_img.src = e.Image;
        
        
        
                  // element_tr.append(td_img);
                   element_tr.append(td_name);
                   element_tr.append(td_color);
                   element_tr.append(td_size);
                   element_tr.append(td_count);
                   element_tr.append(td_price);
        
        
        
              //  }
              view_details.append(element_tr);
        

              }

             
      

            });


          // element_tr.append(td_img);
           element_tr.append(td_number_product);
           element_tr.append(td_name);
           element_tr.append(td_email);
           element_tr.append(td_address);
           element_tr.append(td_Total);
           element_tr.append(td_det);



      //  }
        table.append(element_tr);


    });
}


function detailsProduct(){
  alert("done");
}