// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve , reject)=>{
//     resolve("success")
// });
// // console.log(p2);
// p2.then((response)=>{
//     console.log("success")
// });

// let p3= new Promise((resolve , reject)=>{
//     resolve("failure")
// });
// console.log(p3);
// p3.then((response)=>
// {
//     console.log(response);
// }
// ).catch((error)=>{
//     console.log(error);

// }).finally(()=>console.log("finally printing the both"))


// function fetchUsers() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             let store = document.getElementById("store");
//             data.forEach(user => {
//                 store.innerHTML += `
//                 <tr>
//                     <td>${user.id}</td>
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td>${user.company.name}</td>
//                 </tr>`;
//             });
//         })
//         .catch(err => console.log(err));
// }

// fetchUsers();
// let p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Promise successfully completing");
//     } , 3000)
// })
// async function demo()
// {
//     console.log("start");
//     let x =await(p);
//     console.log(x);
//     console.log("end");
// }
// demo();

// async function fetchUsers(){
//     let response =await fetch("https://api.github.com/users");
//     let data =await response.json();
//     console.log(data);
// }
// fetchUsers();

console.log(document);
