function addNumbers(num1, num2) {
 return num1 + num2;
}


console.log(225, 10);
console.log(23, 76);
console.log(243, 75);

function calcAvg(n1, n2) {
    const avg = (n1 + n2) / 2
    return avg;

}

console.log(calcAvg(7, 8));
console.log(10, 10);
console.log(4, 5);
console.log(2, 8);


const myNome = prompt("digite seu nome")
const grade1 = Number(prompt("digite seu note 1: "))
const grade2 = Number(prompt("digite seu note 2: "))
const studentAvg = calcAvg(grade1, grade2)
const sumGrades = addNumbers(grade1, grade2)

alert(`oi, ${myNome} sua nota foi ${grade1} e a segubda nota foi ${grade2} a soma das notas e ${sumGrades}e sua media e ${studentAvg}`)












