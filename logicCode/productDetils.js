import Cart from "../Modules/cartModules.js";

let ArrayOfProduct=[];
let user=[];
user=JSON.parse(localStorage.getItem("ActiveUser"));
var count=0;



export function productDeatils(e){
    //hide all product
    content.style.display="none";
    image_banner.style.display="none";
    hidde.style.display="none";
    carts_show.style.display="inline";
   
 
    var carts = document.getElementById('carts_show');
     carts.innerHTML="";
 
    //cerate img
    let det_img=document.createElement('img');
    det_img.setAttribute("class", "det_image"); //add class to des
    det_img.src=e.image;
 
    //cerate name product
   let det_name=document.createElement('span');
   det_name.setAttribute("class", "det_name"); //add class to des
   det_name.innerHTML=`<span style="color: #F85D0A;">Name : </span>`+e.name;
 
   //create name brand
   let det_brand=document.createElement('span');
   det_brand.setAttribute("class", "det_brand"); 
   det_brand.innerHTML=`<span style="color: #F85D0A; font-size: 20;">Brand : </span>` +e.brand;
 
    //cerate price product
   let det_price=document.createElement('span');
   det_price.setAttribute("class", "det_price"); //add class to des
   det_price.innerHTML=`<span style="color: #F85D0A; font-size: 20;" >price : </span>
    <span style="font-size: 25;">$${e.price}</span>
    <span class="discount_style" style="color: #F85D0A; font-size: 20;" >old price : </span> 
    <del> <span style="font-size: 25;">$${e.discount}</span></del>`;
 
   //cerate count product
   let qu=document.createElement('span');
    qu.innerHTML=`<span style="color: #F85D0A; font-size: 20;">Quantity : </span>`;
   let det_count=document.createElement('input');
   det_count.setAttribute("class", "count_product");
   det_count.type="number";
    det_count.value=1;
 
    //crete color product
    var color_List = document.createElement("select");
    color_List.setAttribute("class","color_list_style");
    color_List.id = "color";
    color_List.name="color";
    console.log(e.color);
 
    for (const val of e.color)
  {
      var option = document.createElement("option");
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      color_List.appendChild(option);
  }
  var label = document.createElement("p");
  label.innerHTML = `<span style="color: #F85D0A; font-size: 20;">Choose your color: </span>`
 
  label.appendChild(color_List);
 
 
  
    //crete size product
    var size_List = document.createElement("select");
    size_List.setAttribute("class","color_list_style");
    size_List.id = "size";
    size_List.name="size";
    console.log(e.color);
    for (const val of e.size)
  {
    var option = document.createElement("option");
 
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      size_List.appendChild(option);
  }
  var label_size = document.createElement("p");
  label_size.innerHTML = `<span style="color: #F85D0A; font-size: 20;">Choose your Size: </span>`
 
  label_size.appendChild(size_List);
 
 
 
  //cerate des product
   let det_desc=document.createElement('span');
   det_desc.setAttribute("class", "det_des"); //add class to des
   det_desc.innerHTML=`<span style="color: F85D0A; font-size: 20;">Description :</span>`;
   var list = document.createElement("ul");
   list.setAttribute("class","li_des_style")
   for (var i in e.des) {
   var anchor = document.createElement("span");
   anchor.href = "";
  anchor.innerText = e.des[i];
 
 var elem = document.createElement("li");
 elem.appendChild(anchor);
 list.appendChild(elem);
 }
   
   //create button add to cart
   let addToCart=document.createElement('button');
   addToCart.setAttribute("class","addCart") ;
 
    //create button back to home
   let back=document.createElement('button');
   back.setAttribute("class","addCart") ;
 
 
 
 
    
 
    
 
    
 
    addToCart.innerHTML="Add To Cart";
    back.innerHTML="Back To Home";
 
    //event add to cart
    addToCart.addEventListener("click",function(event){
      count++;
 
  // localStorage.clear();
 
   
  
  if(user===null){
    if (confirm('you done`t have account go to the page login')) {
        location.href="../html/login.html";
 
    }else{
        location.href="../html/home.html";
    }
        
 }else{
  let data=JSON.parse(localStorage.getItem("ArrayProduct"));
  let d=localStorage.getItem("ArrayProduct");
 
    console.log(`frist = ${typeof data}`);
       if(localStorage.getItem("ArrayProduct") === null){
        let newProduct=new Cart(count,user[0].Id,e.name,e.price,det_count.value,e.image,color_List.value,size_List.value);
        ArrayOfProduct.push(newProduct);
 
        localStorage.setItem("ArrayProduct", JSON.stringify(ArrayOfProduct));
        alert("Product added successfully");
 
 
       }else{
        let newArray=[];
        let co=0;
      let All_data=JSON.parse(localStorage.getItem("ArrayProduct"));
      var last_element = All_data[All_data.length - 1];
         count=last_element.Id+1;
           
         let newProduct=new Cart(count,user[0].Id,e.name,e.price,det_count.value,e.image,color_List.value,size_List.value);
         newArray=[...All_data];
         console.log(`new array =${newArray}`);
        newArray.push(newProduct);
        localStorage.setItem("ArrayProduct", JSON.stringify(newArray));
        alert("Product added successfully");
        
 
 
       }
 }
     
           
 
 
 
 
 
    ////  if(data.length == 0){
      
        // let data=JSON.parse(localStorage.getItem("ArrayOfProduct"));
        // console.log(data);
 
      //}else{
 
 
     // }
    
 
     
 
 
 
    });
 
 
    //event back to home
    back.addEventListener("click",function(event){
      content.style.display="inline";
      image_banner.style.display="inline";
      hidde.style.display="block";
      carts_show.style.display="none";
    localStorage.clear();
    });
 
    carts.append(det_img);
    carts.append(det_brand);
    carts.append(det_name);
    carts.append(det_price);
    carts.append(qu);
    carts.append(det_count);
    carts.appendChild(label);
    carts.appendChild(label_size);
    carts.append(det_desc);
    carts.append(list);
    carts.append(addToCart);
    carts.append(back);
 }