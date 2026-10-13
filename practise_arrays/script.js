// Завдання 1
let topics = ["JavaScript", "HTML", "CSS", "Git", "WebStorm", "Vue"];
let seats = [12, 8, 15, 0, 6, 10];

let myName = prompt("Будь ласка, введіть своє ім'я:");
while (myName === null || myName.trim() === "") {
  alert("Поле імені не може бути порожнім!");
  myName = prompt("Введіть своє ім'я:");
}
myName = myName.trim();

let myDay = +prompt("Введіть день вашого народження (1-31):");
while (!(Number.isInteger(myDay) && myDay >= 1 && myDay <= 31)) {
  alert("Невірний день! Введіть число від 1 до 31");
  myDay = +prompt("Введіть день вашого народження (1-31):");
}

let myMonth = +prompt("Введіть місяць вашого народження (1-12):");
while (!(Number.isInteger(myMonth) && myMonth >= 1 && myMonth <= 12)) {
  alert("Невірний місяць! Введіть число від 1 до 12");
  myMonth = +prompt("Введіть місяць вашого народження (1-12):");
}

let personalNumber = (myName.length + myDay + myMonth) % topics.length;
alert(`Рекомендований вебінар для вас: ${topics[personalNumber]}`);

let catalogList = "Каталог вебінарів:\n";
for (let i = 0; i < topics.length; i++) {
  let stateText;
  if (seats[i] > 0) {
    stateText = "Реєстрація відкрита";
  }
  else {
    stateText = "Місць немає";
  }
  catalogList += `${i + 1}. ${topics[i]} — вільних місць: ${seats[i]} (${stateText})\n`;
}
alert(catalogList);

let minimumPlaces = +prompt("Введіть мінімальну кількість місць:");
let matchedList = "";
let matchedTotal = 0;
for (let i = 0; i < topics.length; i++) {
  if (seats[i] >= minimumPlaces) {
    matchedTotal++;
    matchedList += `${matchedTotal}. ${topics[i]} — ${seats[i]} місць\n`;
  }
}

if (matchedTotal === 0) {
  alert("Вебінарів з такою кількістю місць не знайдено!");
}
else {
  alert(`Вебінари, де щонайменше ${minimumPlaces} місць:\n${matchedList}`);
}


// Завдання 2
let queryTitle = prompt("Введіть назву вебінару для реєстрації:");

if (queryTitle === null) {
  alert("Пошук було скасовано!");
}
else {
  let targetIndex = -1;
  for (let i = 0; i < topics.length; i++) {
    if (topics[i] === queryTitle.trim()) {
      targetIndex = i;
      break;
    }
  }

  if (targetIndex === -1) {
    alert(`Вебінар "${queryTitle}" не знайдено!`);
  }
  else if (seats[targetIndex] === 0) {
    alert(`На жаль, на ${topics[targetIndex]} не залишилося вільних місць!`);
  }
  else if (confirm(`Бажаєте зареєструватися на ${topics[targetIndex]}?`)) {
    seats[targetIndex]--;
    alert(`Ви успішно зареєстровані на ${topics[targetIndex]}!\nЗалишилось місць: ${seats[targetIndex]}`);
  }
  else {
    alert("Реєстрацію скасовано користувачем!");
  }
}


// Завдання 4
function getParticipantsList(list) {
  let text = "Список учасників:\n";
  for (let i = 0; i < list.length; i++) {
    text += `${i + 1}. ${list[i]}\n`;
  }
  return text;
}

let participants = [];
participants.push(myName);

for (let i = 1; i <= 4; i++) {
  let singleMember = prompt(`Введіть ім'я учасника №${i + 1}:`);

if (singleMember === null) {
    alert("Введення учасників завершено достроково!");
    break;
}

if (singleMember.trim() === "") {
    alert("Ім'я не може бути порожнім рядком!");
    i--;
    continue;
}

participants.push(singleMember.trim());
}

let extendedCount = 0;
for (let i = 0; i < participants.length; i++) {
    if (participants[i].length > myName.length) {
        extendedCount++;
    }
}

alert(`${getParticipantsList(participants)}\nІмен, які довші за ${myName.length} символів: ${extendedCount}`);

if (confirm("Хочете змінити ім'я когось із учасників?")) {
    let itemNum = +prompt(`Введіть порядковий номер учасника (1-${participants.length}):`);

    if (!(Number.isInteger(itemNum) && itemNum >= 1 && itemNum <= participants.length)) {
        alert("Учасника під таким номером не існує!");
    }
    else {
        let updatedName = prompt("Введіть нове ім'я:");
        while (updatedName === null || updatedName.trim() === "") {
            alert("Ім'я не може бути порожнім!");
            updatedName = prompt("Введіть нове ім'я:");
        }

        participants[itemNum - 1] = updatedName.trim();
        alert(`Дані оновлено!\n${getParticipantsList(participants)}`);
    }
}


// Завдання 5
function getVisitStats(values) {
    let sum = 0;
    let max = values[0];
    let min = values[0];

    for (let i = 0; i < values.length; i++) {
        sum += values[i];

        if (values[i] > max) {
            max = values[i];
        }
        if (values[i] < min) {
            min = values[i];
        }
    }

    let average = sum / values.length;
    return [sum, average, max, min];
}

let visits = [24, 18, 32, 0, 15, 27, 9, 21];
let extraBonus = (myDay + myMonth) % 7;

let personalVisits = [];
for (let i = 0; i < visits.length; i++) {
    personalVisits.push(visits[i] + extraBonus);
}

let computedStats = getVisitStats(personalVisits);

let limitInput = prompt("Введіть поріг відвідуваності:");
while (limitInput === null || limitInput.trim() === "" || !(+limitInput >= 0)) {
    alert("Некоректний поріг! Введіть число більше або рівне нулю");
    limitInput = prompt("Введіть поріг відвідуваності:");
}
let limitVal = +limitInput;

let countAbove = 0;
for (let i = 0; i < personalVisits.length; i++) {
    if (personalVisits[i] >= limitVal) {
        countAbove++;
    }
}

let strVisits = "";
for (let i = 0; i < personalVisits.length; i++) {
    strVisits += `${personalVisits[i]} `;
}

alert(`Бонус: ${extraBonus}\nВідвідування: ${strVisits}\nСума: ${computedStats[0]}\nСереднє: ${computedStats[1]}\nМаксимум: ${computedStats[2]}\nМінімум: ${computedStats[3]}\nЗначень не менших за ${limitVal}: ${countAbove}`);

if (confirm("Показати номери вебінарів, які досягли порогового значення?")) {
    let matchedNumbers = "";
    for (let i = 0; i < personalVisits.length; i++) {
        if (personalVisits[i] >= limitVal) {
            matchedNumbers += `${i + 1} `;
        }
    }

    if (matchedNumbers === "") {
        alert("Жоден вебінар не досяг заданого порогу!");
    }
    else {
        alert(`Номери вебінарів: ${matchedNumbers}`);
    }
}

function showWebinars() {
    if (topics.length === 0) {
        alert("Перелік вебінарів порожній!");
        return;
    }

    let outputText = "Актуальні вебінари:\n";
    for (let i = 0; i < topics.length; i++) {
        outputText += `${i + 1}. ${topics[i]} — кількість місць: ${seats[i]}\n`;
    }
    alert(outputText);
}

function findWebinar() {
    let targetName = prompt("Введіть назву вебінару для пошуку:");

    if (targetName === null) {
        alert("Пошукову операцію скасовано!");
        return;
    }

    for (let i = 0; i < topics.length; i++) {
        if (topics[i] === targetName.trim()) {
            alert(`Вебінар "${topics[i]}" знайдено під номером ${i + 1}. Кількість місць: ${seats[i]}`);
            return;
        }
    }

    alert(`Вебінар із назвою "${targetName}" не знайдено!`);
}

function addWebinar() {
    let newTitle = prompt("Введіть назву нового вебінару:");

    if (newTitle === null || newTitle.trim() === "") {
        alert("Назва не може бути порожньою!");
        return;
    }

    let seatCount = +prompt("Введіть кількість вільних місць:");

    if (!(Number.isInteger(seatCount) && seatCount >= 0)) {
        alert("Введено некоректну кількість місць!");
        return;
    }

    topics.push(newTitle.trim());
    seats.push(seatCount);
    alert(`Вебінар "${newTitle.trim()}" успішно додано!`);
}

function renameWebinar() {
    let webinarNum = +prompt(`Введіть номер вебінару (1-${topics.length}):`);

    if (!(Number.isInteger(webinarNum) && webinarNum >= 1 && webinarNum <= topics.length)) {
        alert("Вебінар з таким номером відсутній!");
        return;
    }

    let updatedTitle = prompt("Введіть нову назву:");

    if (updatedTitle === null || updatedTitle.trim() === "") {
        alert("Назва не може бути порожньою!");
        return;
    }

    alert(`Вебінар "${topics[webinarNum - 1]}" перейменовано на "${updatedTitle.trim()}"!`);
    topics[webinarNum - 1] = updatedTitle.trim();
}

function removeLastWebinar() {
    if (topics.length === 0) {
        alert("Список вебінарів уже порожній!");
        return;
    }

    if (!confirm(`Ви дійсно хочете видалити останній вебінар (${topics[topics.length - 1]})?`)) {
        alert("Операцію видалення скасовано.");
        return;
    }

    let deletedOne = topics.pop();
    seats.pop();
    alert(`Вебінар "${deletedOne}" видалено з каталогу!`);
}

function showMenu() {
    let userChoice;

    do {
        userChoice = prompt("Оберіть дію:\n1 — Показати вебінари\n2 — Додати новий вебінар\n3 — Перейменувати за номером\n4 — Знайди вебінар\n5 — Видалити останній вебінар\n0 — Вихід");

        switch (userChoice) {
            case "1":
                showWebinars();
                break;
            case "2":
                addWebinar();
                break;
            case "3":
                renameWebinar();
                break;
            case "4":
                findWebinar();
                break;
            case "5":
                removeLastWebinar();
                break;
            case "0":
                if (confirm("Бажаєте повністю вийти з програми?")) {
                    alert("До побачення!");
                }
                else {
                    userChoice = "";
                }
                break;
            default:
                alert("Такого пункту меню не існує, спробуйте ще раз!");
        }
    } while (userChoice !== "0");
}

showMenu();


// Завдання 6
function distributeRequests(scores) {
    let high = [];
    let medium = [];
    let low = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 85) {
            high.push(scores[i]);
        }
        else if (scores[i] >= 50) {
            medium.push(scores[i]);
        }
        else {
            low.push(scores[i]);
        }
    }

    return [high, medium, low];
}

function getAverage(values) {
    if (values.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum / values.length;
}

let requestScores = [72, 95, 41, 86, 60, 100, 53, 88, 29];
let myScore = (myDay * myMonth + myName.length) % 101;
requestScores.push(myScore);

let keepAdding = true;
while (keepAdding) {
    let userInput = prompt("Введіть новий бал (від 0 до 100):");

    if (userInput === null) {
        break;
    }

    let currentScore = +userInput;

    if (userInput.trim() === "" || !(Number.isInteger(currentScore) && currentScore >= 0 && currentScore <= 100)) {
        alert("Некоректний бал! Введіть ціле число в межах від 0 до 100");
        continue;
    }

    requestScores.push(currentScore);
    keepAdding = confirm(`Бал ${currentScore} успішно додано! Бажаєте ввести ще один?`);
}

let scoreGroups = distributeRequests(requestScores);
let categoryNames = ["high", "medium", "low"];

let finalOutput = "";
let peakLength = 0;
for (let i = 0; i < scoreGroups.length; i++) {
    let textGroup = "";
    for (let j = 0; j < scoreGroups[i].length; j++) {
        textGroup += `${scoreGroups[i][j]} `;
    }

    finalOutput += `${categoryNames[i]}: ${textGroup}— кількість: ${scoreGroups[i].length}, середній бал: ${getAverage(scoreGroups[i])}\n`;

    if (scoreGroups[i].length > peakLength) {
        peakLength = scoreGroups[i].length;
    }
}

let largestCategories = "";
for (let i = 0; i < scoreGroups.length; i++) {
    if (scoreGroups[i].length === peakLength) {
        largestCategories += `${categoryNames[i]} `;
    }
}

let myCategory;
if (myScore >= 85) {
    myCategory = "high";
}
else if (myScore >= 50) {
    myCategory = "medium";
}
else {
    myCategory = "low";
}

alert(`${finalOutput}\nНайбільша група: ${largestCategories}\nВаш персональний бал: ${myScore} (група ${myCategory})`);
