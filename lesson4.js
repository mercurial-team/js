console.log('Задание №1');

function splitNumberIntoObject(number){

	var result = {};
	if (number > 999 || number < 0){
		console.log('Число должно быть в диапазоне от 0 до 999')
	}else{
		//{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}
		result.единицы = Math.floor(number % 10);
		result.десятки = Math.floor((number/10) % 10);
		result.сотни = Math.floor((number/100) % 10);
	}
	return result;
}
//Тестируем функцию
console.log(SplitNumberIntoObject(981));
console.log(SplitNumberIntoObject(52));
console.log(SplitNumberIntoObject(7));
console.log(SplitNumberIntoObject(1030));
console.log(SplitNumberIntoObject(-5));

//-------------------------------------
console.log('Задание №2');

// Количество, название товара, цвет, цена.
var cart = [
	{
		count: 1,
		name: 'Джинсы', 
		color: 'Синие', 
		price: 5000,
		TotalPrice: TotalPrice,
	}, 
	{
		count: 2, 
		name: 'Носки', 
		colorr: 'Черные', 
		price: 200,
		TotalPrice: TotalPrice,
	}
];

function TotalPrice(){
	return this.price * this.count; //Итог = цена * количество
}

function countBasketPrice(value){
	var sum = 0;
	for(i = 0; i < value.length; i++){
		sum += value[i].TotalPrice(); 
	}
	return sum;
}

//Проверяем
summary = countBasketPrice(cart);
console.log(summary);
