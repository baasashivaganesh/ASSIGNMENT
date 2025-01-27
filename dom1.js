// let x = document.createElement("h1");
// x.innerText = "dynamic creation of html from js";
// x.setAttribute("id" , "demo");
// console.log(x);
// document.body.appendChild(x);
// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);
// document.body.appendChild(image);

let mainEle = document.createElement("div");
mainEle.setAttribute("class", "mainBlock");
console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class", "topBlock");

let image=document.createElement("img");
image.src="https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_640.jpg";
image.width="300"
image.height="300"

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class", "bottomBlock");
let h1 = document.createElement("h1");
h1.innerText="Heading";

let btn = document.createElement("button");
btn.innerText="View More";

bottomEle.appendChild(h1);

bottomEle.appendChild(btn);
topEle.appendChild(image)
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);