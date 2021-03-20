let total = 0;
let input = 0;
while (input != null) {
  input = prompt("Введите число");

  if (input != null && Number(input)) {
    total += parseInt(input);
  } else if (!Number(input) && input !=null) {
alert('Было введено не число, попробуйте еще раз');
  }
}

alert("Общая сумма чисел равна " + total);
