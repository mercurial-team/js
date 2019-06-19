console.log('Задача №1');
var i = 0;
while (i <= 100){
	console.log(i);
	++i;
} 

console.log('Задача №2');

// Количество, название товара, цвет, цена.
var cart = [[1,'Джинсы', 'Синие', 5000], [2, 'Носки', 'Черные', 200]];

function countBasketPrice(value){
	var sum = 0;
	for(i = 0; i < value.length; i++){
		sum += value[i][3] * value[i][0]; //Итог = цена * количество
	}
	return sum;
}

//Проверяем
summary = countBasketPrice(cart);
console.log(summary);
//Ещё раз с другими данными
cart = [[4,'Дешевые штаны', 'Черные', 500], [3, 'Странная кепка', 'Разноцветная', 400], [2, 'Футболка Bandito', 'Блекло-синий', 600]];
summary = countBasketPrice(cart);
console.log(summary);

console.log('Задача №3');
for(i=0; i <= 10; console.log(i++)){
	//Пусто
}

console.log('Задача №4');
for(i=0; i <= 20; console.log('x'.repeat(++i))){
	//Пусто
}