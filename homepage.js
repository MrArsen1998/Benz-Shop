const buttonName = "Add to card";
const cars = [
    {
        "ImageURL": "images/items/c-class-coupe.png",
        "ImageName": "C class Coupe",
        "Title": "C class Coupe",
        "Price": "$49,550",
        "Description": "Appearances can also be revealing",
    },
    {
        "ImageURL": "images/items/c-class.png",
        "ImageName": "C class",
        "Title": "C class",
        "Price": "$43,550",
        "Description": "Step up your game",
    },
    {
        "ImageURL": "images/items/e-class-coupe.png",
        "ImageName": "E class Coupe",
        "Title": "E class Coupe",
        "Price": "$66,100",
        "Description": "Passionate. Phillarless. Pearless.",
    },
    {
        "ImageURL": "images/items/e-class.png",
        "ImageName": "E class",
        "Title": "E class",
        "Price": "$66,100",
        "Description": "The standart that never stands still",
    },
    {
        "ImageURL": "images/items/gla-suv.png",
        "ImageName": "GLA SUV",
        "Title": "GLA SUV",
        "Price": "$37,500",
        "Description": "To go farther start out ahead",
    },
    {
        "ImageURL": "images/items/gle-suv.png",
        "ImageName": "GLE SUV",
        "Title": "GLE SUV",
        "Price": "$57,700",
        "Description": "Intelligent in nature. Or wherever you take it",
    },
    {
        "ImageURL": "images/items/gls-suv.png",
        "ImageName": "GLS SUV",
        "Title": "GLS SUV",
        "Price": "$96,340",
        "Description": "Room to roam. Strenght to share",
    },
    {
        "ImageURL": "images/items/s-class.png",
        "ImageName": "S class",
        "Title": "S class",
        "Price": "$136,345",
        "Description": "The heritage of the future in motion",
    },
    {
        "ImageURL": "images/items/glb-suv.png",
        "ImageName": "GLB SUV",
        "Title": "GLB SUV",
        "Price": "$39,700",
        "Description": "Upgrade your ride. Without upsizing",
    },
]

let content = document.getElementById('content');
cars.forEach(element => {
    let carHTML = `<div class="card">
    <img src="${element.ImageURL}" alt=${element.ImageName}>
    <h1>${element.Title}</h1>
    <p class="price">${element.Price}</p>
    <p>${element.Description}</p>
    <p><button onclick = "counterFunc()">${buttonName}</button></p>
    </div>`;
    content.innerHTML += carHTML;
});

// Add to card funtion
count = 0;
function counterFunc(){
    count++;
    document.getElementById("count").innerHTML = count;
   }

// Scroll to top function
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }