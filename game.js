$(document).ready(function () {
//Мини Игра
var hero = {
	Name: 'Заключенный',
	level: 1,
	health: {max:10, current:10},
	mana: {max:10, current:10},
	stamina: {max:10, current:10},
	attack: 3,
	defense: 1,
	magic_power: 1,
	magic: {firebolt:'Огненый шар', heal:'Лечение'},
	GetStats: GetStats,
}

var bandit = {
	Name: 'Бандит',
	level: 1,
	health: {max:10, current:10},
	mana: {max:0, current:0},
	stamina: {max:10, current:10},
	attack: 5,
	defense: 3,
	magic_power: 0,
	actions: ['attack', 'defense', 'bow'],
	GetStats: GetStats,
}

var warlock = {
	Name: 'Колдун',
	level: 3,
	health: {max:20, current:20},
	mana: {max:35, current:35},
	stamina: {max:15, current:15},
	attack: 2,
	defense: 1,
	magic_power: 10,
	actions: ['attack', 'defense', 'vampire'],
	GetStats: GetStats,
}

var boozer = {
	Name: 'Местный кутила',
	level: 4,
	health: {max:40, current:40},
	mana: {max:0, current:0},
	stamina: {max:25, current:25},
	attack: 1,
	defense: 7,
	magic_power: 0,
	actions: ['attack', 'defense', 'drink'],
	GetStats: GetStats,
}

function ChooseClass(){
	var bonus = []//Бонусы от класса героя
	while(true){
		hero_class = +prompt('Выберите класс героя\n 1) Воин\n 2) Маг\n 3) Танк\n');
		if (hero_class == 1){
			$("#warrior").removeClass("hide");
			hero.specialization = 'warrior';
			//Здоровье, мана, выносливость, атака, защита, сила магии
			bonus = [10, 0, 10, 5, 2, 1];
			break;
		}else if(hero_class == 2){
			$("#mage").removeClass("hide");
			hero.specialization = 'mage';
			bonus = [5, 20, 5, 2, 2, 10];
			break;
		}else if(hero_class == 3){
			$("#tank").removeClass("hide");
			hero.specialization = 'tank';
			bonus = [20, 5, 15, 3, 7, 0];
			break;
		} else{
			alert('Вы выбрали не правильно, давайте ещё раз');
		}
	}
	//Добавляем бонусы
	hero.health.max += bonus[0]; hero.health.current += bonus[0];
	hero.mana.max += bonus[1]; hero.mana.current += bonus[1];
	hero.stamina.max += bonus[2]; hero.stamina.current += bonus[2];
	hero.attack += bonus[3];
	hero.defense += bonus[4];
	hero.magic_power += bonus[5];
	updateStats('hero_stats', hero.GetStats());
}
function LevelUp(){
	var bonus = []//Бонусы lvlupa
	//Здоровье, мана, выносливость, атака, защита, сила магии
	if (hero.specialization == 'warrior'){
		bonus = [5, 2, 5, 1, 1, 0];
	} else if (hero.specialization == 'mage'){
		bonus = [3, 7, 2, 1, 0, 3];
	} else if (hero.specialization == 'tank'){
		bonus = [8, 0, 8, 1, 2, 0];
	}
	//Добавляем бонусы
	hero.level += 1;
	alert('В битве вы заслужили ' + hero.level + ' уровень! Ваши хар-ки увеличены!');
	hero.health.max += bonus[0]; hero.health.current += bonus[0];
	hero.mana.max += bonus[1]; hero.mana.current += bonus[1];
	hero.stamina.max += bonus[2]; hero.stamina.current += bonus[2];
	hero.attack += bonus[3];
	hero.defense += bonus[4];
	hero.magic_power += bonus[5];
	updateStats('hero_stats', hero.GetStats());
}

var Destiny = [
	{
		Path: 'Идем в лес',
		Complited: false,
	},
	{
		Path: 'Идем в склеп',
		Complited: false,
	},
	{
		Path: 'Топаем в таверну',
		Complited: false,
	},
]

function ChooseDestiny(){
	//Востанавливаем хар-ки перед боем
	hero.health.current = hero.health.max;
	hero.mana.current = hero.mana.max;
	hero.stamina.current = hero.stamina.max;
	console.log('Пройденные этапы ' + Destiny[0].Complited +' '+ Destiny[1].Complited + ' ' + Destiny[2].Complited);
	if(Destiny[0].Complited && Destiny[1].Complited && Destiny[2].Complited){
		alert('Поздравляю, вы всех перебили к чертовой матери и теперь вас бояться! Вы закончили игру!');
		return true;
	}
	var Forest_path = Destiny[0].Complited == true ? '':'\n 1) Идем в лес';
	var Crypt_path = Destiny[1].Complited == true ? '':'\n 2) Идем в склеп';
	var Tavern_path = Destiny[2].Complited == true ? '':'\n 3) Топаем в таверну\n';
	//console.log(Forest);
	var message = 'Куда направляется ' + hero.Name +' ?' + Forest_path + Crypt_path + Tavern_path;
	while(true){
		Destiny_path = +prompt(message);
		if (Destiny_path == 1 && Destiny[0].Complited != true){
			Forest();//
			break;
		} else if (Destiny_path == 2 && Destiny[1].Complited != true){
			Crypt();//
			break;
		} else if (Destiny_path == 3 && Destiny[2].Complited != true){
			Tavern();//
			break;
		} else{
			alert('Вы выбрали не правильно, давайте ещё раз');
		}
	}
}

function Forest(){
	alert('Вы заходите в лес в поисках приключений');
	alert('Здесь довольно скучно!');
	alert('Вдруг раздается шорох листьев и вам навстречу выбегает бандит!');
	$("#enemy").removeClass("hide");
	$("#enemy_bandit").removeClass("hide");
	$("#enemy_stats").css({"display":"flex"});
	updateStats('enemy_stats', bandit.GetStats());
	var result;
	setTimeout(function(){
		result = duel(hero, bandit);
		console.log(result);
		//if (result){		
		//}
	}, 1000);

	
}
function Forest_win(){
	console.log('Сценарий победы в лесу');
	alert('Вы одолели бандита и стали знамениты в Городе');
	$("#enemy").addClass("hide");
	$("#enemy_bandit").addClass("hide");
	$("#enemy_stats").css({"display":"none"});
	Destiny[0].Complited = true;
	LevelUp();
	ChooseDestiny();
}
function Crypt(){
	alert('Вы вламываетесь в склеп не смотря на удивленные взгляды местных жителей');
	alert('Внутри он оказался намного больше чем вы предполагали');
	alert('Спустя час поисков из темноты на вас набросился колдун');
	$("#enemy").removeClass("hide");
	$("#enemy_warlock").removeClass("hide");
	$("#enemy_stats").css({"display":"flex"});
	updateStats('enemy_stats', warlock.GetStats());
	var result;
	setTimeout(function(){
		result = duel(hero, warlock);
		console.log('result: ' + result);
		//if (result){
			
		//}
	}, 1000);
}

function Crypt_win(){
	alert('Вы одолели страшного колдуна и вылезли на поверхность, жаль что вашу историю воспринимают как сказку');
	$("#enemy").addClass("hide");
	$("#enemy_warlock").addClass("hide");
	$("#enemy_stats").css({"display":"none"});
	Destiny[1].Complited = true;
	LevelUp();
	ChooseDestiny();
}

function Tavern(){
	alert('В таверне вы опрокидываете пару кружек чертовски вкусного эля!');
	alert('И ещё немного эля! Вас уже начало пошатывать!');
	alert('Своим дерзким поведением, вы спровоцировали местного пьянчужку и он направился к вам');
	$("#enemy").removeClass("hide");
	$("#enemy_sumo").removeClass("hide");
	$("#enemy_stats").css({"display":"flex"});
	updateStats('enemy_stats', boozer.GetStats());
	var result;
	setTimeout(function(){
		result = duel(hero, boozer);
		console.log('result: ' + result);
		//if (result){

		//}
	}, 1000);
}

function Tavern_win(){
	alert('Вы победили в потасовке и выпили за свою победу! Respect++');
	$("#enemy").addClass("hide");
	$("#enemy_sumo").addClass("hide");
	$("#enemy_stats").css({"display":"none"});
	$("#enemy_stats").addClass("hide");
	Destiny[2].Complited = true;
	LevelUp();
	ChooseDestiny();
}

function GetStats(){
	message = this.Name + '</br> Уровень: ' + this.level + '</br>';
	message+= ' Здоровье: ' + this.health.current + '</br> Мана: ' + this.mana.current + '</br> Выносливость: ' + this.stamina.current + '</br>';
	message+= ' Атака: ' + this.attack + '</br> Защита: ' + this.defense + '</br> Сила магии: ' + this.magic_power + '</br>';
	return message;
}
function updateStats(DivID, Stats){
	document.getElementById(DivID).innerHTML = " ";
	document.getElementById(DivID).innerHTML = Stats;
	//console.log(Stats);
}

function duel(Duelist1, Duelist2){
	alert('Сражаются ' + Duelist1.Name + ' VS ' + Duelist2.Name); 
	var battle = FightRound(Duelist1, Duelist2);
	return battle;	
}

function FightRound(Duelist1, Duelist2){
	var damage;
	hero_action = +prompt('Что мы делаем?\n1)Атака(3 выносливости)\n2)Защита(1 выносливость)\n3)Магия(0 выносливости)');
	enemy_action = Duelist2.actions[Math.floor(Math.random() * Duelist2.actions.length)]; //Выбираем действие опонента
	console.log(enemy_action);
		//Магия баклух
		if (enemy_action == 'vampire'){
			alert('Противник использует грязные фокусы и высасывает у вас 3 единицы здоровья. Вы были обездвижены до вашего действия!');
			Duelist1.health.current -= 3;
			Duelist2.health.current += 3;
		} else if(enemy_action== 'bow'){
			alert('Противник выстрелил в вас из лука и вы потеряли 2 здоровья и 2 выносливости! Вы были ошеломлены его скоростью и не смогли сделать свое действие')
			Duelist1.health.current -= 2;
			Duelist1.stamina.current -= 2;
		} else if(enemy_action== 'drink'){
			alert('Боров пьет и восстанавливает себе 5 здоровья и 3 выносливости! Вы в шоке от его амбре и не смогли совершить свое действие!')
			Duelist2.health.current += 5;
			Duelist2.stamina.current += 3;
		}
		//Магия героя
		else if(hero_action == 3){
			hero_cast_magic = +prompt('Какое заклинание?\n1)'+ Duelist1.magic.firebolt +'(5 маны)\n2)' + Duelist1.magic.heal+'(5 маны)');
			if (hero_cast_magic == 1 && enemy_action == 'attack'){
				alert('Вы скастовали огненый шар и нанесли ' + Duelist1.magic_power + ' урона! Но противник успел вас ударить на ' + Duelist2.attack);
				Duelist1.health.current -= Duelist2.attack;
				Duelist2.health.current -= Duelist1.magic_power;
				Duelist1.mana.current -=5;
			} else if (hero_cast_magic == 1 && enemy_action == 'defense'){
				alert('Противник укрылся за щитом, это была ошибка, вы нанесли' + Duelist1.magic_power + ' огненым шаром');
				Duelist2.health.current -= Duelist1.magic_power;
				Duelist1.mana.current -=5;
			} else if (hero_cast_magic == 2 && enemy_action == 'attack'){
				alert('Вы вылечились на ' + Duelist1.magic_power + ' но противник достал вас ножичком на ' + Duelist2.attack);
				Duelist1.health.current += Duelist1.magic_power;
				Duelist1.health.current -= Duelist2.attack;
				Duelist1.mana.current -=5;
			} else if (hero_cast_magic == 2 && enemy_action == 'defense'){
				alert('Противник защитился, пока вы вылечили себе ' + Duelist1.magic_power);
				Duelist1.health.current += Duelist1.magic_power;
				Duelist2.stamina.current -= 1;
				Duelist1.mana.current -=5;
			}
		}else if (hero_action == 1 && enemy_action == 'attack'){ //если герои и противник оба атаковали
			alert('Вы скрестили мечи');
			
			if(Duelist1.attack > Duelist2.attack){
				
				damage = Duelist1.attack - Duelist2.attack;
				alert('Вы владеете мечами лучше и наносите ' + damage + ' урона!');
				Duelist2.health.current -= damage;
				Duelist1.stamina.current -= 3;
				Duelist2.stamina.current -= 3;
			} else if (Duelist1.attack <= Duelist2.attack){
				
				damage = Duelist2.attack - Duelist1.attack;
				alert('противник превосходит вас в фехтовании и наносит вам ' + damage + ' урона!');
				Duelist1.health.current -= damage;
				Duelist1.stamina.current -= 3;
				Duelist2.stamina.current -= 3;
			}
			//
		}else if(hero_action == 2 && enemy_action == 'attack'){//если защищался и противник атаковал
			alert('Враг атаковал, а вы защитились');
			
			if(Duelist2.attack > Duelist1.defense){
				
				damage = Duelist2.attack - Duelist1.defense;
				alert('Ваш навык защиты ниже не позволяет полностью заблокировать урон и вы получаете ' + damage + ' урона!');
				Duelist1.health.current -= damage;
				Duelist1.stamina.current -= 1;
				Duelist2.stamina.current -= 3;
			} else if(Duelist2.attack <= Duelist1.defense){
				
				damage = Duelist1.defense - Duelist2.attack;
				alert('Вы защитились от урона, заставив противника попотеть и дополнительно нанесли  ' + damage + ' урона его выносливости!');
				Duelist1.stamina.current -= 1;
				Duelist2.stamina.current -= 3;
				Duelist2.stamina.current -= damage;
			}
		}else if(hero_action == 2 && enemy_action == 'defense'){//если оба защищались
		
			alert('Вы оба встали в защитную стойку и потеряли немного выносливости');
			Duelist1.stamina.current -= 1;
			Duelist2.stamina.current -= 1;
		}else if(hero_action == 1 && enemy_action == 'defense'){//если герой атаковал, а противник защищался
		
			alert('Вы атаковали а противник защищается');
			if(Duelist1.attack > Duelist2.defense){
				damage = Duelist1.attack - Duelist2.defense;
				alert('Вы сумели преодолеть защиту противника и нанести ' + damage + ' урона!');
				Duelist2.health.current -= damage;
				Duelist2.stamina.current -= 1;
				Duelist1.stamina.current -= 3;
			} else if(Duelist1.attack <= Duelist2.defense){
				damage = Duelist2.defense - Duelist1.attack;
				alert('Противник защитился от атаки, заставив вас потерять дополнительно ' + damage + ' выносливости!');
				Duelist2.stamina.current -= 1;
				Duelist1.stamina.current -= 3;
				Duelist1.stamina.current -= damage;
			}
		}else{
			alert('Противник плюнул в вас, вы потеряли 1 очко здоровья');
			Duelist1.health.current -= 1;
		}
	console.log('Дуэлянты');
	updateStats('hero_stats', Duelist1.GetStats());
	updateStats('enemy_stats', Duelist2.GetStats());
	
	var FightResult = CheckWinLoose(Duelist1, Duelist2);
	console.log(FightResult);
	if(FightResult == 'win'){
		alert('Вы прикончили противника');
		Win(Duelist2.Name);
	} else if(FightResult == 'win_stamina'){
		alert('Вы утомили противника и захватили его в плен!');
		Win(Duelist2.Name);
	} else if(FightResult == 'loose'){
		alert('Вы погибли в сражении');
		return false;
	} else if(FightResult == 'loose_stamina'){
		alert('Вас измотали, у вас не осталось сил! Вы захвачены в плен!');
		return false;
	} else{
		//Если никто не проиграл, то ещё 1 раунд
		setTimeout(function(){
			FightRound(Duelist1, Duelist2);
		}, 2000);
	}
	
}

function CheckWinLoose(Duelist1, Duelist2){
	if (Duelist2.health.current <=0){
		return 'win';
	} else if (Duelist2.stamina.current <=0){
		return 'win_stamina';
	}
	if (Duelist1.health.current <=0){
		return 'loose';
	} else if (Duelist1.stamina.current <=0){
		return 'loose_stamina';
	}
	return 'next';
	//
}
function Win(name){
	console.log('запустился сценарий победы ' + name);
	if (name =='Бандит'){
		Forest_win();
	} else if (name =='Колдун'){
		Crypt_win();
	} else if (name =='Местный кутила'){
		Tavern_win();
	}
}
//Начинаем игру
hero.Name = prompt('Выберите имя героя');
ChooseClass();//выбираем класс
setTimeout(function(){
	ChooseDestiny();//Выбираем путь
}, 2000);


});