//without parameters and arguements
// function demo(){//function declaration
//     console.log("i am a  function");
// }
// demo();
// demo();
// demo();//function calling

//with parameters and arguements
// function add(a,b){
//     // console.log(a);
//     // console.log(b);
//     console.log(a+b);
// }
// add(5,6);
// add(7,7);
// add(9,0);
// function addToCart(){
    
// }

// function isPalindrome(str)
// {
//     for(let i = str.length-1;i>=0;i++){
//         console.log(str[i]);
//     }

// }
// isPalindrome("sir")


// function isPalindrome(str)
// {
//     let revStr = "";
//     for(let i = str.length-1;i>=0;i--){
//         console.log(str[i]);
//         revStr += str[i];

//     }
//     if(str == revStr){
//         console.log("Palindrome");
//     }else{
//         console.log("Not a palindrome");
//     }
// }

// isPalindrome("sir");
// isPalindrome("madam");
// isPalindrome("telugu");


// function onemoretime(){
//     console.log("not understood tell me one more time");
// }
// onemoretime();


//!anonymous functions
// function(){
//     console.log("Anonymous function");
// }

// let x = function(){
//     console.log("function expression");
// };
// x();
// x();//function can be resusable for many times

//!IIFE
// (
//     function(){
//         console.log("IIFE");

//     }
// )();

//!arrow function
// function demo(){
//     console.log("hello");
// }
// demo();
let x = ()=>console.log("hello");
x();
