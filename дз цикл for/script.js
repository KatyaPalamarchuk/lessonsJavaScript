let uchasnyky = +prompt("скільки учасників");

if (uchasnyky <= 0) {
    uchasnyky = +prompt("неправильна кількість");
}

let summa = 0;
let visokyy = 0;
let seredniy = 0;
let nizkiy = 0;
let minrezultat = 100;
let maxrezultat = 0;
let sto = -1;

for (let i = 1; i <= uchasnyky; i++) {
    let rezultat = +prompt(`який результат учасника №${i}`);

    if (rezultat < 0 || rezultat > 100) {
        rezultat = +prompt("неправильний результат");
    }

    summa = summa + rezultat;

    if (sto === -1 && rezultat === 100) {
        sto = i;
    }

    if (rezultat >= 90) {
        visokyy = visokyy + 1;
    } else if (rezultat >= 60) {
        seredniy = seredniy + 1; // було множення '*' замість '+'
    } else {
        nizkiy = nizkiy + 1;
    }

    if (rezultat > maxrezultat) {
        maxrezultat = rezultat;
    }

    if (rezultat < minrezultat) {
        minrezultat = rezultat;
    }
}

let seredniyrezultat = summa / uchasnyky;

alert(`середній результат ${seredniyrezultat}
перший учасник зі 100 балами №${sto}
найвищий результат ${maxrezultat} балів
найнижчий результат ${minrezultat} балів
високий рівень ${visokyy}
середній рівень ${seredniy}
низький рівень ${nizkiy}`);