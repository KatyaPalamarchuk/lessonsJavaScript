//1
// let age = +prompt("age");
// if (age <=12 ){
//     alert ("child")
// }
// else if (age <= 17){
//     alert ("teen")
// }
// else if (age >=  18){
//     alert("adult")
// }

// const login = "admin";
// const password = "12345";
// let log1 = prompt("login");
// let password1 = prompt("password");
// if (login === log1 && password === password1){
//     alert("db edsqkikb");
// }
// else {
//     alert("db yt dsqikb");
// }

// let day = +prompt("number");
// if (!(day < 1 && day >7)){
//     switch (day){
//         case 1:
//             console.log("monday");
//             break;
//         case 2:
//             console.log("tuesday");
//             break
//         case 3:
//             console.log('wednesday');
//             break;
//         case 4:
//             console.log('thursday');
//             break;
// }

let productName = prompt("name");
let productPrice = +prompt("prioc");
let productCount = +prompt("count");
let discountCard = confirm("card");
let deliveryType = prompt('type');

let totalPrice = productPrice * productCount;


//<2000 - 0%
// >2000 - 5%
// > 5000 - 10%
// >10000 - 15%

let shopDiscount = 0;
if(totalPrice>=10000){
shopDiscount = 15; }
else if (totalPrice >= 5000){
shopDiscount = 10;}
