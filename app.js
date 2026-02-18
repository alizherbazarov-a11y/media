
const products = [
{
title:"Nairo Series®",
category:"Featured",
img:"./second.png"
},
{
title:"Kensho Series®",
category:"New",
img:"./third.png"
},
{
title:"Atarashi Series®",
category:"Handmade",
img:"./four.png"
}
];

const container = document.getElementById("productContainer");

products.forEach(product=>{
const card=document.createElement("div");
card.classList.add("product-card");

card.innerHTML=`
<img src="${product.img}">
<p>${product.category}</p>
<h3>${product.title}</h3>
`;

container.appendChild(card);
});




const timer=document.getElementById("timer");
let time= (5*24*60*60) + (11*60*60) + (23*60) + 2;

setInterval(()=>{
let days=Math.floor(time/86400);
let hours=Math.floor((time%86400)/3600);
let minutes=Math.floor((time%3600)/60);
let seconds=time%60;

timer.innerHTML=
`${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

time--;
},1000);
