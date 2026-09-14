// if (умова) {
//дії;
// }
// else if (0{
//
// }

// true
//1

// false
//0
// θη
//
// null
// undefined
// NaN

// let a = 10, b = 12;
// console.log(a == b); //нестрога
// console.log(a === b); //строга
// console.log(a != b);
// console.log(a !== b);
// > < >= <=


// let a = prompt("Введи число: ");
// let b = prompt("Введи число: ");
// let c;

// if (a > b) {
//     c = 'a > b'
// } else if (a < b) {
//     c = 'a < b'
// }
// else {
//     c = 'a == b'
// }
// alert(c);

// if (a > b) c = 'a > b';
// else if (a > b) c = 'a < b';
// else c = 'a == b';


// let course = prompt("What is the name of course?"), tittle;
// switch(course) {
//     case 'figma':
//         tittle = 'Figma';
//         break;
//
//     case 'WEB':
//         tittle = 'HTML + CSS';
//         break;
//
//     case 'Javascript':
//         tittle = 'JavaScript основи програмування';
//         break;
// }
// alert(tittle);




//__________________________________


// let product = prompt("Товар");
// let price = Number(prompt("Вартість товару:"));
// let count = Number(prompt("Кількість товару:"));
//
// let Sum = price * count;
//
// if (Sum > 5000) {
//     let discount = Sum * 0.10;
//     let Sum = Sum - discount;
//     alert(`\nСума до сплати: ${Sum} грн`);
// } else {
//     alert(`\nСума до сплати: ${Sum} грн`);
// }




//_________________________________




// let delivery = prompt("Оберіть спосіб доставки: ");
// let price;
//
// switch (delivery) {
//     case 'курєр':
//         alert(`Кур'єром: 200 грн`);
//         break;
//
//     case 'пошта':
//         alert(`Поштою: 100 грн`);
//         break;
//
//     case 'самовивіз':
//         alert(`Самовивіз: 0 грн`);
//         break;
//
//     default:
//         alert("Нема такого");
// }

//__________________________________


let a = true;
console.log(!a);

let a = 10, b = 12, c = 5;
if (a > b && a > c) {
    console.log(a);
}else if (b > a || a > c){}