let type;
let price = 0;

while (true) {
    type = +prompt('Оберіть подію: 1 - Кіно (150 грн); 2 - Театр (220 грн); 3 - Концерт (350 грн)');

    let is_valid = false;
    switch (type) {
        case 1:
            price = 150;
            is_valid = true;
            break;
        case 2:
            price = 220;
            is_valid = true;
            break;
        case 3:
            price = 350;
            is_valid = true;
            break;
        default:
            alert('Невірно!');
    }
    if (is_valid) {
        break;
    }
}

let day;
while (true) {
    day = +prompt('День:1 - Будні; 2 - Вихідний');
    if (day === 1 || day === 2) {
        break;
    }
    alert('Невірно!');
}

if (day === 2) {
    price = price + price * 0.15
}

let count;
while (true) {
    count = +prompt('Кількість квитків (1-6):')
    if (count >= 1 && count <= 6) {
        break;
    }
    alert('Від 1 до 6!');
}

let total_tickets = 0;
let free_count = 0;
let discount_count = 0;
let full_count = 0;
let total_price = 0;

for (let i = 1; i <= count; i++) {
    let age;
    while (true) {
        age = +prompt('Вік:');
        if (!Number.isNaN(age) && age >= 0 && age <= 150) {
            break;
        }
        if (age === -1) {
            break;
        }
        alert('Невірний вік!');
    }

    total_tickets++;

    let discount = 0;

    if (age >= 0 && age <= 5) {
        free_count++;
        continue;
    }
    else if (age >= 6 && age <= 12) {
        discount = 0.5;
    }
    else if (age >= 13 && age <= 17) {
        discount = 0.2;
    }
    else if (age >= 18 && age <= 59) {
        discount = 0;
    }
    else if (age >= 60) {
        discount = 0.25;
    }

    if (age >= 18 && age <= 25) {
        let is_student = confirm('Є студентський?');
        if (is_student) {
            discount += 0.1
        }
    }

    let ticket_price = price * (1 - discount);
    total_price += ticket_price;

    if (discount > 0) {
        discount_count++;
    }
    else {
        full_count++;
    }

    let final_price = total_price;
    if (total_price > 1000) {
        final_price = total_price * 0.95;
    }

    alert(`Всього квитків: ${total_tickets}
    Безкоштовні: ${free_count}
    Зі знижкою: ${discount_count}
    Повна ціна: ${full_count}
    До сплати: ${final_price} грн`);
}