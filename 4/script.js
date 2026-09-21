// for (let i = 10; i >=1; i --){
//     console.log(`number "№${11 - i} - ${i}`);
// }

// sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum += i ;
// }
// console.log(sum);
//

// for (let i = 1;  i <= 100; i++){
//     if (i >= 20 && i  % 3 === 0 && i % 6 === 0){
//         console.log(i);
//         break;
//     }
// }

// for (let i = 1;  i <= 100; i++){
//     if (i % 5 === 0){
//          continue;
//     }
//     console.log(i);
// }

let studentsCount = +prompt("enter students count");
if (studentsCount > 0){
    let sum = 0, highlevel = 0, otherlevel = 0;
    let minGrade = 12, maxGrade = 1;
    for (let i = 1; i <= studentsCount; i++){
        let grade = +prompt(`enter grade student number ${i} from 1 to 12`);
        if (!(grade >= 1 && grade <= 12)){
            alert("error");
            i--;
            continue;
        }
        sum += grade;
        if (grade >= 10){
            highlevel++;
        }
        else{
            otherlevel++;
        }
        if (grade < minGrade){
            minGrade = grade;
        }
        if (grade > maxGrade){
            maxGrade = grade;
        }
    }
    av = sum / studentsCount;
}
alert(`students count ${studentsCount}\n sum ${sum}\n average ${av}\n min ${minGrade}\n max ${maxGrade}\n high level ${highlevel} other ${otherlevel}`)