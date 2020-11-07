//- створити функцію яка виводить масив
/*
function first(arr){
    console.log(arr)
}
let array = ["olya",3467,["one","two"]]
first(array)
*/
//створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
/*
function firstRandom(count){
     let emptyArray = [];
    
    for(let i = 0; i < count; i++) {
        emptyArray.push(Math.floor(Math.random() * 100));
    }

    first(emptyArray);
}
firstRandom(10);
*/

//створити функцію яка приймає три числа та виводить та повертає найменьше.
/*
function numbersMin(one, two, three){
    if(two > one && three > one){
        return one } else if(one > two && three > two){
            return two } else if(two > three  && one > three){
                return three
            }
        } 
console.log(numbersMin(15, 14, 7))
      */ 
 //створити функцію яка приймає три числа та виводить та повертає найбільше.
 /*
 function numbersMax(one, two, three){
    if(two < one && three < one){
        return one } else if(one < two && three < two){
            return two } else if(two < three  && one < three){
                return three
            }
        } 
console.log(numbersMax(151, 14, 17))
*/
//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
/*
function count(){
    let min = arguments[0];
    let max =arguments[0];
    for(let i of arguments) {
       if(i > max)max = i;
       if(i < min)min = i;
    }
        console.log(max);
        return min   
    }
count(717,900,1176)
*/
//створити функцію яка виводить масив
/*
function arrayPrint(arr){
    console.log(arr);
}
arrayPrint([3,'poi',5456])
*/
//створити функцію яка повертає найбільше число з масиву
/*
function number(numberMax){
    let max = numberMax[0]; 
    for (let index of numberMax) {
        if(max < index)max = index;
        
    }
    console.log(max)
}
number([2346,9,8,598])
*/
// створити функцію яка повертає найменьше число з масиву
/*
function numberMin(numberMin){
    let min = numberMin[0]; 
    for (let index of numberMin) {
        if(min > index)min = index;
        
    }
    console.log(min)
}
numberMin([2346,9,8,598])
*/
//створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
/*
function summ(array){
    let sum = 0;
    for(let item of array){
         sum += item;
    }
    return sum
    
}
summ([1,9,6])
*/

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
/*
function arithmeticMean(array){
    let sum = 0;
    for(let item of array){
         sum += item;
    }
    console.log(sum/array.length)
    return sum/array.length
    
}
arithmeticMean([1,9,6])
*/
// Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
/*
function arithmeticSum(array){
    let sumOfCount = 0;
    for(let item of array){
         sumOfCount++;
    }
    console.log(sumOfCount)
}
arithmeticSum( [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},])
*/
//Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
/*
function count(array){
    let count = 0;
    for(let item of array){
        for(let i in item){
            count++;
        }
       
    }
    console.log(count)
}
count([{id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true}, 
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}])
*/

//створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//Приклад
//[1,2,3,4]
//[2,3,4,5]
//результат
//[3,5,7,9]
/*
function count(array1,array2){
    let newArray = [];
    let sum = 0;
    for(let i = 0;i < array1.length;i++){
        let item1 = array1[i];
        for(let j = 0;j < array2.length;j++){
            let item2 = array2[i];
            if(array1[i] === array2[j]){
                sum = (item1 + item2);
                newArray.push(sum);
            }
        }
    }console.log(newArray)
}
count([2,2,3,1],[1,2,3,7])
*/

//*** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
/*
function replase(arr,i){
   let num = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = num;
 
    console.log(arr)
    return arr
}
replase([2,2,3,1,5,8],2)
*/
//*** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100
//Приклад
//[1,0,6,0,3] => [1,6,3,0,0]
//[0,1,2,3,4] => [1,2,3,4,0]
//[0,0,1,0]   => [1,0,0,0]
/*
function withZero(arr){
    let zero = [];
    let num = [];
    for(let i of arr){
        if(i === 0){
            zero.push(0);
        }else{
            num.push(i)
        }
    }return num.concat(zero)
}
console.log(withZero([1,0,6,0,3] ));
*/
//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
/*
function hello(div){
   let createDiv = document.createElement(div);
   createDiv.innerText = "Hello owu";
   document.body.appendChild(createDiv);
}
hello('div')
*/
//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
/*
function add(text,type){
    let create = document.createElement(type);
    create.innerText = text;
    document.body.appendChild(create);
 }
 add("HELLO",'div')
*/
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

/*
let listCars = [{
    model:"Acura NSX",
    year: 2020,
    power:650,
    color: "black"
} , {
    model:"Acura NSX Type R",
    year: 2019,
    power: 670,
    color:"red"
} , {
    model:"Alfa Romeo Crosswagon Q4 ",
    year: 2019,
    power: 300,
    color:"white"
} , {
    model:"Aston Martin Booldog",
    year: 2018,
    power: 350,
    color:"blue"
} , {
    model:"Infiniti G",
    year: 2019,
    power: 330,
    color:"yellow"
} , {
    model:"Genesis G80 3 Ultimate AT",
    year: 2019,
    power: 280,
    color:"red"
} , {
    model:"Dodge Challenger Hardtop (JH23)",
    year: 1970,
    power: 180,
    color:"purple"
} , {
    model:"Hummer H2 SUT on Forgiato Wheels (Finestro)",
    year: 2019,
    power: 380,
    color:"blue"
} , {
    model:"Lexus LM",
    year: 2019,
    power: 280,
    color:"grey"
} , {
    model:"Renau megan",
    year: 2018,
    power: 180,
    color:"black"
}];

function cars(listOfCars,id){
    let elementById = document.getElementById(id);
    let ul = document.createElement('ul');
    for(let i = 0;i < listOfCars.length;i++){
        let car = listOfCars[i];
        let li = document.createElement('li');
        li.innerHTML = `${car.model}`;
        ul.appendChild(li);
    }
    elementById.appendChild(ul)
}
console.log(cars(listCars,'first'))

*/


//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок
/*
let listCars = [{
    model:"Acura NSX",
    year: 2020,
    power:650,
    color: "black"
} , {
    model:"Acura NSX Type R",
    year: 2019,
    power: 670,
    color:"red"
} , {
    model:"Alfa Romeo Crosswagon Q4 ",
    year: 2019,
    power: 300,
    color:"white"
} , {
    model:"Aston Martin Booldog",
    year: 2018,
    power: 350,
    color:"blue"
} , {
    model:"Infiniti G",
    year: 2019,
    power: 330,
    color:"yellow"
} , {
    model:"Genesis G80 3 Ultimate AT",
    year: 2019,
    power: 280,
    color:"red"
} , {
    model:"Dodge Challenger Hardtop (JH23)",
    year: 1970,
    power: 180,
    color:"purple"
} , {
    model:"Hummer H2 SUT on Forgiato Wheels (Finestro)",
    year: 2019,
    power: 380,
    color:"blue"
} , {
    model:"Lexus LM",
    year: 2019,
    power: 280,
    color:"grey"
} , {
    model:"Renau megan",
    year: 2018,
    power: 180,
    color:"black"
}];

function cars(listOfCars,id){
    let elementById = document.getElementById(id);
    let ul = document.createElement('ul');
    for(let i = 0;i < listOfCars.length;i++){
        let car = listOfCars[i];
        let li = document.createElement('li');
        li.innerHTML = `${i+1}`;
        let ul2 = document.createElement('ul');
       
        let model = document.createElement('li');
        model.innerHTML = `${car.model}`;
        let year = document.createElement('li');
        year.innerHTML = `${car.year}`;
        let power = document.createElement('li')
        power.innerHTML = `${car.power}`;
        let color = document.createElement('li')
        color.innerHTML = `${car.color}`;
        ul.appendChild(li);
        li.appendChild(ul2)
        ul2.appendChild(model);
        ul2.appendChild(year);
        ul2.appendChild(power);
        ul2.appendChild(color);
     

    }
    elementById.appendChild(ul)
}
console.log(cars(listCars,'first'))

//
////(на основі минулого ДЗ)
//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
//та повертає масив цих з'єднаних об'єктів.
//Приклад масивів:
/*

function arrayAdd(array1,array2){
    let userCitieWithId = [];
      for(let user of usersWithId){
          for(let city of citiesWithId){
             if(user.id === city.user_id){
                    user.adress = city;
                  }
              }
         console.log(usersWithId);
    }   

}
array1 = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
array2 =   [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},]          
arrayAdd(array1,array2)
*/
//***- беремо завдання з правилами з укроку №3 :
//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


//Та робимо це функцією.При цьому правила отримувати через аргумент.
//"Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
/*
			let rules= [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];



function rule(){
let arrh2 = document.getElementsByTagName('h2');
let content = document.getElementById('content');
let ul = document.createElement('ul');
for(let h2 of arrh2){
    let li = document.createElement('li');
    li.innerText = h2.innerText;
    ul.appendChild(li);
}
content.appendChild(ul);
}
rule()
*/
//Та робимо це функцією.При цьому правила отримувати через аргумент.
//"Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
/*
function iterRules(text){
let wrap = document.createElement('div');
wrap.id = 'wrap';
for(let i = 0;i < rules.length - 1;i++){
    let rule = rules[i];
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    div.className = `rules rule${i}`;
    h2.innerText = rule.title;
    p.innerText = text;
    div.appendChild(h2);
    div.appendChild(p);
    wrap.appendChild(div)
}
document.body.appendChild(wrap);
}
iterRules("gogogo");
*/