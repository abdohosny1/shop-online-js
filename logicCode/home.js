import { AllProducts } from "../modules/products.js";
import { productDeatils } from "./productDetils.js";

//add to cart

var flag=true;




var slidePosition = 1;






window.addEventListener("load",function(e){


  
  checkUserValid();


  var articles = document.getElementById("content");

  SlideShow(slidePosition);
  back.addEventListener("click",function(e){
   plusSlides(-1);
  });
  forwod.addEventListener("click",function(){
    plusSlides(1);

  })





 

  AllProducts.forEach(function(e){
    var article = document.createElement("div"); 
     article.setAttribute("class", "add_product");
     // add image
     let articleImg = document.createElement("img");
     articleImg.setAttribute("class", "img_product");
     articleImg.setAttribute("src",e.image);
     article.appendChild(articleImg);
     articles.appendChild(article);

      //add name product
     let articleName = document.createElement("p");
     articleName.setAttribute("class", "name_product"); 
     articleName.innerText = e.name;
     article.appendChild(articleName);
     articles.appendChild(article);

    
   
     //add event
     articleImg.addEventListener("click",function(event){
      
     
      productDeatils(e);
  
     
      
     });


        //add price
        let articlePrice = document.createElement("span");
        articlePrice.setAttribute("class", "price"); 
        articlePrice.innerHTML = `<span>$</span>
        <span>${e.price}</span>`;
        article.appendChild(articlePrice);
    articles.appendChild(article);
    
    //add discount
    let articleDiscount = document.createElement("span");
    articleDiscount.setAttribute("class", "discount"); 
    articleDiscount.innerHTML = `<del>
    <span>$</span>
    <span>${e.discount}</span></del>`;
    article.appendChild(articleDiscount);
    articles.appendChild(article);


  });
 
});

// function SlideShow() {
//   let i;
//   let slides = document.getElementsByClassName("Containers");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slidePosition++;
//   if (slidePosition > slides.length) {slidePosition = 1}
//   slides[slidePosition-1].style.display = "block";
//   setTimeout(SlideShow, 2000); // Change image every 2 seconds
// } 



//check login
 export function checkUserValid(){
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


//slider

    
    function SlideShow(n) {
      var i;
      var slides = document.getElementsByClassName("Containers");
      var circles = document.getElementsByClassName("dots");
      if (n > slides.length) {slidePosition = 1}
      if (n < 1) {slidePosition = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < circles.length; i++) {
          circles[i].className = circles[i].className.replace(" enable", "");
      }
      slides[slidePosition-1].style.display = "block";
      circles[slidePosition-1].className += " enable";
    }

    function plusSlides(n) {
      SlideShow(slidePosition += n);
    }
    
    //  images controls
    function currentSlide(n) {
      SlideShow(slidePosition = n);
    }
  
  
//function product details 



 