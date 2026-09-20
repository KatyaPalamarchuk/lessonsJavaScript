let productName = prompt("Введіть назву товару:");
let productPrice = +prompt("Введіть ціну товару:");
let productCount = +prompt("Введіть кількість товару:");
let discountCard = confirm("У вас є дисконтна картка?");
let deliveryType = prompt("Оберіть тип доставки (пошта / кур'єр / самовивіз):");

let totalPrice = productPrice * productCount;

let discount = 0;
if (totalPrice > 5000 || discountCard) {
    discount = totalPrice * 0.10;
}

let priceWithDiscount = totalPrice - discount;

let deliveryPrice = 0;

switch (deliveryType) {
    case 'пошта':
        deliveryPrice = 100;
        break;
    case "кур'єр":
        deliveryPrice = 200;
        break;
    case 'самовивіз':
        deliveryPrice = 0;
        break;
    default:
        alert("Невідомий спосіб доставки, пораховано без доставки.");
        deliveryPrice = 0;
}

let finalSum = priceWithDiscount + deliveryPrice;

alert(`Товар: ${productName}. Вартість товарів: ${totalPrice} грн. Знижка: ${discount} грн. Доставка (${deliveryType}): ${deliveryPrice} грн. Фінальна сума до сплати: ${finalSum} грн`);