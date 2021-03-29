let input;
const numbers = [];
let total = 0;
for (let input = 0; input != null;) {
    input = prompt ('Введите число');
if (input !== null) {
    numbers.push(input);
    total +=  parseInt(input);
  } else if (input == null && numbers.length > 0) {
    alert("Общая сумма чисел равна " + total);
    console.log(numbers)
}
}
