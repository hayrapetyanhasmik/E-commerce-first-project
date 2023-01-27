const listOfBooks=[
    {
        img: "images/5iPbrUz3kDw.jpg",
        name: "English For Information Technology",
        price: "5000 AMD"
    },
    {
        img: "images/Clean-Coder.jpg",
        name: "The Clean Coder",
        price: "6500 AMD"
      },
      {
        img: "images/51lxN5ltLBL._AC_SY1000_.jpg",
        name: "Coding For Beginners",
        price: "5000 AMD"
      },
      {
        img: "images/9780596517748.jpg",
        name: "Java Script: The Good Parts",
        price: "7000 AMD"
      },
      {
        img: "images/real-world-functional-programming-9781933988924_hr.jpg",
        name: "Functional Programming",
        price: "4800 AMD"
      },
      {
        img: "images/Book1.jpg",
        name: "Cracking the Coding Interview",
        price: "6800 AMD"
      },
      {
        img:  "images/Modern C++.jpg",
        name: "Effective Modern C++",
        price: "8000 AMD"
      },
      {
        img: "images/51s5Q8ZI9tL._SX331_BO1,204,203,200_.jpg",
        name: "How Would You Moove Mount Fuji?",
        price: "5500 AMD"
      },
      {
        img: "images/tlap2.jpg",
        name: "Think Like a Programmer",
        price: "4000 AMD"
      },
      {
        img:  "images/react.jpg",
        name: "Fullstuck React",
        price: "11000 AMD"
      }
];

const mainDiv = document.querySelector("#container");
const count = document.querySelector("#count");
const count_div = document.querySelector(".count"); 


listOfBooks.map(function(book){
    const pic_div = document.createElement("div");
    pic_div.className = "pic_div";
    const pic_div2 = document.createElement("div");
    pic_div2.className = "pic_div2";
    const image = document.createElement("img");
    image.className = "img_book";
    const name = document.createElement("h4");
    const price = document.createElement("p");
    const btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.className = "buy_btn";
    image.src=book.img;
    name.textContent=book.name;
    price.textContent=book.price;
    pic_div.append(pic_div2, btn);
    pic_div2.append(image,name,price);
    mainDiv.appendChild(pic_div);

btn.addEventListener('click', function(){
   count_div.style.cssText = "display: inline-block";
   count.textContent++;
});
})


  



