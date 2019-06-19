// 1 задача

console.log('1 задача');
var a = 1, b = 1, c, d;
//объявляем переменные, присваиваем значение а и б
c = ++a; console.log('c = ' + c);           // 2
// Присваиваем "с" значение "а" с префиксным инкрементом, что дает увеличение на 1 до присвоения
d = b++; console.log('d = ' + d);           // 1
// Присваиваем "d" значение "b" с постфиксным инкрементом, возврат значения происходит раньше увеличения.
c = (2+ ++a); console.log('c = ' + c);      // 5
//Префиксный инкремент, сперва увеличил, потом использует
d = (2+ b++); console.log('d = ' + d);      // 4
//Постфиксный инкремент, сперва использует, потом увеличивает
console.log('a =' + a);                    // 3
//Все законно, мы увеличили "а" 2 раза
console.log('b = '+ b);                    // 3
//Все законно, мы увеличили "b" 2 раза

//2 задача
console.log('2 задача');
var a = 2;
var x = 1 + (a *= 2);
//Сперва a*2 = 4, x = 1+4 = 5; Проверяем
console.log('x = ' + x);

//3 задача
console.log('3 задача');
//Возьмем случайное число
//Ограничимся от -10 до +10
var rand_1 = -10.5 + Math.random() * 21;
var rand_2 = -10.5 + Math.random() * 21;
rand_1 = Math.round(rand_1);
rand_2 = Math.round(rand_2);
console.log('1 число: ' + rand_1);
console.log('2 число: ' + rand_2);
var result;
if (rand_1>=0 && rand_2>=0){
	result = rand_1-rand_2;
	console.log('Выводим разность: ' + result);
}else if(rand_1<0 && rand_2<0){
	result = rand_1*rand_2;
	console.log('Выводим произведение: ' + result);
}else{
	result = rand_1+rand_2;
	console.log('Выводим сумму: ' + result);
}

//4 задача
console.log('4 задача');
a = 0.5 + Math.random() * 15;
a = Math.round(a);
console.log('a = ' + a);
switch(a){
	case 1:
		console.log(1);
	case 2:
		console.log(2);
	case 3:
		console.log(3);
	case 4:
		console.log(4);
	case 5:
		console.log(5);
	case 6:
		console.log(6);
	case 7:
		console.log(7);
	case 8:
		console.log(8);
	case 9:
		console.log(9);
	case 10:
		console.log(10);
	case 11:
		console.log(11);
	case 12:
		console.log(12);
	case 13:
		console.log(13);
	case 14:
		console.log(14);
	case 15:
		console.log(15);
}

//5 задача
console.log('5 задача');
function plus(number_1, number_2){
	return number_1 + number_2;
}
function minus(number_1, number_2){
	return number_1 - number_2;
}
function division(number_1, number_2){
	return number_1 / number_2; 
}
function multiplication(number_1, number_2){
	return number_1 * number_2;
}

//6 задача
console.log('6 задача');
function mathOperation(arg1, arg2, operation){
	console.log('Число №1: ' + arg1);
	console.log('Число №2: ' + arg2);
	switch(operation){
		case 'plus':
			console.log('Сработало сложение, результат: ' + plus(arg1, arg2));
			break;
		case 'minus':
			console.log('Сработал вычитание, результат : ' + minus(arg1, arg2));
			break;
		case 'division':
			console.log('Сработало деление, результат : ' + division(arg1, arg2));
			break;
		case 'multiplication':
			console.log('Сработало умножение, результат : ' + multiplication(arg1, arg2));
			break;
	}
}
//Проверяем
mathOperation(4, 2, 'plus');
mathOperation(4, 2, 'minus');
mathOperation(4, 2, 'division');
mathOperation(4, 2, 'multiplication');

//7 задача
console.log('7 задача');
if (null == 0){
	console.log('true');
}else{
	console.log('false');
}
//Похоже, что интерпритатор считает их разными типами данных с разным значением

//8 задача
console.log('8 задача');
function power(val, pow){
	if (pow !=1){
		return val*power(val, pow-1);
	}else{
		return val;
	}
}
//Проверяем
console.log('Возводим в степень: ' + power(3,4));
