// function showMessage() {
//   console.log("Hello World!");
// }
//
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();

// function showProduct(name, price = "не в наявності") {
//   console.log(`Товар ${name}: ${price}грн;`);
// }
//
// showProduct("Notebook");

// function calculate(price, count) {
//   let total = price * count;
//   return total;
// }
//
// let total = calculate(1000, 4);
// console.log(total);

// function discount(total) {
//   if (total >= 5000) {
//     return 10;
//   }
//   else {
//     return 0;
//   }
// }
// let discount1 = +prompt("Please enter a number");
//
// console.log(discount(discount1));

// function getProductTotal(price, count) {
//   return price * count;
// }
//
// function getDiscount(total) {
//   if (total >= 10000) {
//     return 0.15;
//   }
//   else if (total >= 5000) {
//     return 0.1;
//   }
//   else if (total >= 2500) {
//     return 0.05;
//   }
//   else {
//     return 0;
//   }
// }
//
// function getDiscountValue(total, percent) {
//   return total * percent;
// }
//
// function getFinalPrice(total, discount) {
//   return total - discount;
// }
//
// let productName = prompt("Enter product name:");
// let productPrice = +prompt("Enter price");
// let productCount = +prompt("Enter count");
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discount = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, discount);
// let productFinalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(`Товар: ${productName}`);
// console.log(`Ціна: ${productPrice} грн.`);
// console.log(`Кількість: ${productCount}`);
// console.log(`Сума: ${productTotal} грн.`);
// console.log(`Знижка: ${discount} %`);
// console.log(`Сума знижки: ${productDiscountValue} грн`);
// console.log(`До сплати: ${productFinalPrice} грн`);

// --------------------------


// let start = prompt("start point");
// let finish = prompt("finish point");
// let distance = +prompt("distance in km");
// let fuelConsumption = +prompt("liters per 100 km");
// let fuelPrice = +prompt("hrn per 1 liter");
//
// function calculatePrice(distance, fuelConsumption, fuelPrice) {
//   let price = (distance / 100) * fuelConsumption * fuelPrice;
//   return price;
// }
//
// function calculatePriceKm(fuelConsumption, fuelPrice) {
//   let price = (fuelConsumption / 100) * fuelPrice;
//   return price;
// }
//
// console.log(`to travel from ${start} to ${finish} you need ${calculatePrice(distance, fuelConsumption, fuelPrice)} hrn`);

// -----------------------------

let login = null;
let password = null;

function createUser() {
    let inputLogin = prompt("Введіть ваш логін:");
    let inputPassword = prompt("Створіть пароль:");

    if (!inputLogin || !inputPassword) {
        alert("Поля не можуть бути порожніми!");
        return;
    }

    login = inputLogin;
    password = inputPassword;
    alert("Реєстрація пройшла успішно!");
}

function loginUser() {
    if (login === null) {
        alert("Спочатку зареєструйся!");
        return;
    }

    let tries = 3;

    while (tries > 0) {
        let enteredLogin = prompt("Введіть логін:");
        let enteredPassword = prompt("Введіть пароль:");

        if (enteredLogin === login && enteredPassword === password) {
            alert("Вхід дозволено!");
            return;
        }

        tries--;

        if (enteredLogin !== login) {
            alert(`Помилка: невірний логін. Залишилось спроб: ${tries}`);
        }
        else {
            alert(`Помилка: невірний пароль. Залишилось спроб: ${tries}`);
        }
    }

    alert("Доступ заблоковано! Ви використали всі 3 спроби.");
}

function showMenu() {
    let option;

    do {
        option = prompt("Оберіть дію: 1 — Зареєструватися\n2 — Увійти в акаунт\n0 — Вийти");

        switch (option) {
            case "1":
                createUser();
                break;
            case "2":
                loginUser();
                break;
            case "0":
                alert("Роботу завершено. До зустрічі!");
                break;
            default:
                alert("Помилка: такого варіанту немає в меню!");
        }
    } while (option !== "0");
}

showMenu();