// let  i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// console.log(Number("Hello"));

// let age = +prompt("Enter your age");
// while (Number.isNaN(age) || age < 0 || age >= 120) {
//     alert("Please enter a valid number");
//     age = +prompt("Enter your age");
// }
// console.log(age);

// const correctPin = 1111
//
// // let pin = +prompt("Enter a valid pin");
// let tries = 1;
//
// // while (pin !== correctPin && tries <=3) {
// //     pin = +prompt("Enter a valid pin");
// //     tries++;
// // }
// // if (pin === correctPin) {
// //     alert("Доступ дозволено");
// // }
// // else {
// //     console.log("Картку заблоковано")
// // }
//
// while (tries <= 3) {
//     let pin = +prompt("Enter a valid pin");
//     if ( pin === correctPin) {
//         console.log("Вхід дозволено");
//         break;
//     }
//     tries++;
//     console.log("Неправильний пароль");
// }

// let menuChoice;
// do{
//     menuChoice = prompt("Оберіть дію:\n" +
//         "1 - Відкрити профіль\n" +
//         "2 - Налаштування профілю\n" +
//         "0 - Вихід")
//     if (menuChoice === 1){
//         console.log("Налаштування профілю")
//     }
//     else if (menuChoice === 2){
//         console.log("Налаштування профілю")
//     }
//     else if (menuChoice === 0){
//         console.log("Вихід")
//     }
//     else {
//         console.log("Error")
//     }
//
// }while (menuChoice !== 0){}

// let menuChoice;
// do{
//     menuChoice = prompt("Оберіть дію:\n" +
//         "1 - Відкрити профіль\n" +
//         "2 - Налаштування профілю\n" +
//         "3 - Відправити повідомлення\n" +
//         "4 - Переглянути інформацію\n" +
//         "5 - Видалити акаунт\n" +
//         "0 - Вихід")
//     switch(menuChoice){
//     case 1:
//         console.log(menuChoice);
// }


// let gradeSum = 0;
// let count = 0;
// while(count < 5){
//     let num;
//     num = +prompt("Enter the grade")
//     if(Number.isNaN(num) || num <= 0 || num > 12){
//         alert("Invalid grade")
//         continue
//     }
//     gradeSum += num;
//     count++;
// }
// alert(`Average grade is ${gradeSum/5}`);



//______________________________________________

let age = +prompt("Введіть свій вік:");

while (Number.isNaN(age) || age < 12 || age > 90) {
    alert("Будь ласка, введіть коректний вік (від 12 до 90 років).");
    age = +prompt("Введіть свій вік:");
}
const correctPin = 4321;
let tries = 1;
let isPinCorrect = false;

while (tries <= 3) {
    let pin = +prompt(`Введіть PIN-код (Спроба ${tries} з 3):`);
    if (pin === correctPin) {
        alert("Доступ дозволено!");
        isPinCorrect = true;
        break;
    }
    alert("Неправильний PIN-код.");
    tries++;
}
if (!isPinCorrect) {
    alert("Картку заблоковано. Перевищено кількість спроб");
}
if (isPinCorrect) {
    let menuChoice;
    do {
        menuChoice = prompt("Оберіть дію:\n" +
            "1 - Особистий кабінет\n" +
            "2 - Повідомлення\n" +
            "3 - Налаштування\n" +
            "0 - Вихід"
        );
        switch (Number(menuChoice)) {
            case 1:
                console.log("Особистий кабінет");
                alert("Ви перейшли в особистий кабінет");
                break;
            case 2:
                console.log("Повідомлення");
                alert("У вас немає нових повідомлень");
                break;
            case 3:
                console.log("Налаштування");
                alert("Розділ налаштувань");
                break;
            case 0:
                console.log("Вихід з системи");
                alert("До нових зустрічей");
                break;
            default:
                console.log("Такого пункту немає.");
                alert("Такого пункту немає.");
                break;
        }

    } while (menuChoice !== "0");
}