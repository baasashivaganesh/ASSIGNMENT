// let x = document.createElement("h1");
// x.innerText = "dynamic creation of html from js";
// x.setAttribute("id" , "demo");
// console.log(x);
// document.body.appendChild(x);
// let image = document.createElement("img");
// image.src = "./3606208.jpg";
// console.log(image);
// document.body.appendChild(image);

// let mainEle = document.createElement("div");
// mainEle.setAttribute("class", "mainBlock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");

// let image=document.createElement("img");
// image.src="https://cdn.pixabay.com/photo/2025/01/14/13/55/nature-9332892_640.jpg";
// image.width="300"
// image.height="300"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class", "bottomBlock");
// let h1 = document.createElement("h1");
// h1.innerText="Heading";

// let btn = document.createElement("button");
// btn.innerText="View More";

// bottomEle.appendChild(h1);

// bottomEle.appendChild(btn);
// topEle.appendChild(image)
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

let form=document.querySelector("form");
let username = document.getElementById("uName");

let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show =  document.getElementById("show");

let gen = document.getElementsByName("gender");
// console.log(gen);

//hiding and showing password
check.addEventListener("click",event=>{
    //console.log(event);
    //console.log(event.target.checked);
    if(event.target.checked === true){
        password.setAttribute("type" , "text");
        show.innerText = "show password";
    }
})

form.addEventListener("submit",event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    // console.log(un , up);
    let gender = "";
   
   for(let i=0;i<=gen.length-1;i++){
    if(gen[i].checked == true){
        // console.log("true" , gen[i].value);
        gender += gen[i].value;
    }
   }
//    console.log(ele);
let userDetails={
    un,up,gender
};
console.log(userDetails);
})