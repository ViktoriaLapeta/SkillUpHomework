const credits = 35500;
const pricePerDroid = 3000;
let count = prompt("Какое количество дроидов Вы хотите купить?");
let totalPrice = count * pricePerDroid;
let balance = credits - totalPrice;
if (count == null) {
  console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else if (totalPrice <= credits) {
  console.log("Вы купили" + ' ' + count + ' ' +"дроидов, на счету осталось" + " " + balance + " " + "кредитов.");
}
