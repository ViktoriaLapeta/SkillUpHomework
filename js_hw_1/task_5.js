let country = prompt("Введите название Вашей страны");
country = country.toLowerCase();
switch (country) {
case 'китай':
console.log('Доставка в' + ' ' + country + ' ' + 'будет стоить' + ' ' + '150 кредитов');
break;
case 'чили':
console.log('Доставка в' + ' ' + country + ' ' + 'будет стоить' + ' ' + '250 кредитов');
break;
case 'австралия':
console.log('Доставка в' + ' ' + country + ' ' + 'будет стоить' + ' ' + '165 кредитов');
break;
case 'индия':
console.log('Доставка в' + ' ' + country + ' ' + 'будет стоить' + ' ' + '90 кредитов');
break;
case 'ямайка':
console.log('Доставка в' + ' ' + country + ' ' + 'будет стоить' + ' ' + '130 кредитов');
break;
default:
    alert('В вашей стране доставка не доступна')
}












