// // document.body.innerHTML = "<h1>hello from Javascript</h1>";
// // alert("Hello World -2");
// // console.log(2010, 1.5);
// // console.log(20 * "dadada");
// // console.log(1 / 0);
// // console.log("hello");
// // console.log("Hello", `hello`);
// // console.log(undefined);
// // console.log(Symbol());

// // console.table({ name: "Ruslan", age: 30 });

// // console.log([1, , 2, 3.4, 5]);

// // var name = "Denis";
// // console.log(name);
// // name = "Den";
// // console.log(name);

// // var age;
// // console.log(age);
// // age = 30;
// // console.log(age);

// // var UserAge = "den";

// // var car;
// // console.log(car);
// // car = "bmw";
// // // /*console.log(car);
// // let nike = "audisport";
// // //let nike = "audi";
// // //console.log(car);
// // console.log(nike);

// // const user = {
// //   name: "Denis",
// //   age: 30,
// // };

// //console.log(user);

// // user.age = 25;
// // console.log(user);

// let admin;
// let name;

// name = "Djon";
// admin = name;
// console.log(admin);

// let value;
// let value2;

// //Number to string
// value = String(10);
// value = String(10 + 40);

// //bollean to value
// value = String(true);
// //array to string
// //value = String([1,2,3,4,5])
// //object to string
// value = String({ name: "Den", age: 25 });

// value = 30 + "     " + 30;
// value = true - 10;

// value = Boolean('');
// value2 = Boolean([2,3]);

// console.log(value + value2);

//console.log(typeof value);

/*const num1 = 10;
const num2 = 20;
const num3 = 30;

let value;

// value = num1 + num2;
// value = value + 100;
// value += 100;

value = 5 % 2;
value ++;
value --;

++value;
--value;

//Round off the number and transformation to number
value = 0.6 + 0.7;
value = +value.toFixed(2);
console.log(value);

//transformation to number
value = 0.6 + 0.7;
value = parseFloat(value.toFixed(2));
console.log(value);

//transformation to number
value = (0.6 * 10 + 0.7 * 10) / 10;
console.log(value);

//math 
value = Math.PI

// random number from 0 to 1
value = Math.random();
console.log(value);

// random number from 0 to 1
value = Math.floor(Math.random() * 10 + 1) ;
console.log(value);

// round
value = Math.round(2.5);
console.log(value);

// round up 
value = Math.ceil(2.1);
console.log(value);

// round down
value = Math.floor(2.9);
console.log(value);

// min number
value = Math.min(2.9, 3, 5, 12 ,100);
console.log(value);

// max number
value = Math.max(2.9, 3, 5, 12 , 100, );
console.log(value);

value = Math.max(-2.9, -3, -5, -12 , -100, );
console.log(value);

//random array 

const arr = [1 ,3 ,5 , 8, 13, 21, 34, 55, 89, 113, 211];
value = Math.floor(Math.random() * arr.length) ;
console.log(value , arr[value]);

// pi+ fixed
value = Math.PI.toFixed(2)
console.log(value);
const pi = Number(Math.PI.toFixed(2));
// ! Помните что toFixed возвращает строку поэтому лучше еще делать явное преобразование к числу
// ! Вы можете использовать функцию Number или parseFloat
console.log(pi);

// min+max
value = Math.min(15, 11, 16, 12, 51, 12 ,13 , 51);
value2 = Math.max(15, 11, 16, 12, 51, 12 ,13 , 51);
console.log(value, value2);


// а. Получить случайное число и округлить его до двух цифр после запятой
const random = Number(Math.random().toFixed(2));
// random number from 0.xx to 0.99
value = Math.random().toFixed(2);
console.log(value);

// random number from 0  to 100
value = Math.floor(Math.random() * 100 + 1) ;
console.log(value);
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
const X = 20;
const randomX = Math.round(Math.random() * X);
console.log(randomX);

//through multiplication by 10 or parseFloat
const fixNum = Number(0.6 + 0.7).toFixed(1);
console.log(fixNum);
// * https://learn.javascript.ru/number#netochnye-vychisleniya

// string to number
value = parseFloat('100$');
console.log(value);

let str = parseInt('100$');
console.log(str);


let value3 = Math.round(Math.PI * 100) / 100;
console.log(value3);


const firstName = 'Denis';
const lastName = 'Shvydkiy';
const age = 30;
const str = 'hello my name is Ruslan';

let value;

value = firstName + ' ' + lastName;
value2 = 'I am '+ value + ' ' + age
value += 'I am ' + age;

console.log(value, value2);
value += 'I am ' + age;

console.log(value);

value = firstName + ' ' + lastName;
value += 'I am ' + age;

console.log(value);

value = firstName.length;
value2 = firstName[0];
value3 = firstName[firstName.length-1];
console.log(value, value2, value3)

//method

value = firstName.toUpperCase();  
//value = firstName.toLocaleUpperCase();  
console.log(value, firstName);



value = firstName.toUpperCase();  
value = firstName.concat(' '+ lastName);  
console.log(value);

//возвращает индекс искомого елемента, первое вхождение
// вторым аргументом можно указать с какого елемента начать поиск
// .lastIndexOf  - поиск с конца
value = str.indexOf('l', 5);  
console.log(value);

//ищет значение в строке, возвращает boolean
value = str.includes('my');
console.log(value);


value = str.slice(0,5);
//value = str.slice(5);
//value = str.slice(0,-5);
console.log(value);


// принимает 2 параметра. 1-й с какого символа 2-й сколько вернуть
value = str.substr(6,7);
console.log(value);

// заменяет значения
value = str.replace('Denis', 'Ruslan')
console.log(value);



const firstName = 'Denis';
const lastName = 'Shvydkiy';
const age = 30;

let str;

str = 'Hello my name is' + ' ' + firstName + ' ' + lastName;

str = '<ul>' +
        '<li>First name: ' + firstName + '</li>' + 
        '<li>Last name: ' + lastName + '</li>' +
        '<li>Age: ' + age + '</li>'+
       '</ul>' ;

//console.log(str);

//es6
 str = `
 <ul>
    <li>First Name: ${firstName}</li>
    <li>Last Name: ${lastName}</li>
    <li>Age: ${age}</li>
    <li>Math.random: ${Math.random()}</li>
    <li>5 + 5 = ${ 5 + 5 }</li>
 </ul>
 
 `;
document.body.innerHTML =  str;



let string = 'some test string'

//1
first = string.slice(0,1);
last = string.slice(length-1);

console.log(first, last);

//2
firstU = first.toUpperCase(); 
lastU = last.toUpperCase();
console.log(firstU,lastU);

//3
position = string.includes('string');
console.log('position', position);

//3 teatcher
const wordPos = string.indexOf('string');
console.log('wordPos =', wordPos);

//4
positionSpace = string.indexOf(' ', 6);  
console.log(positionSpace);

//4
positionSpace2 = string.lastIndexOf(' ');  
console.log(positionSpace2);

//4 - teatcher
const firstSpace = string.indexOf(' ');
const secondSpace = string.indexOf(' ', firstSpace + 1);
console.log(secondSpace);

//5
value = string.substr(5,4);
console.log(value);

//6
value2 = string.slice(5,10);
console.log(value2);

//7
newStr= string.slice(0,-6);
console.log(newStr);

//8 - преобразование чисел в строки

a = 20;
b = 16;
a1 = String(20)
b1 = String(16)
concat = a+"" + b+"";
concat2 = `${a}` + `${b}`
concat3 = String(a) + String(b);
console.log(concat, concat2, concat3, a1+b1);

//a = num.toString()
//b = num.toString()



const user = {
  firstName: "Ruslan",
  age: 30,
  isAdmin: true,
  email: "123@gmail.com",
  "user-address": {
    city: "Kyiv",
    street: "Gagarina",
  },
  skills: ["html", "css", "js"],
};

let value;
let prop = "skills";

value = user.firstName;
value2 = user["isAdmin"];
value3 = user["user-address"];
value4 = user["user-address"].city;
value5 = user[prop][0];

//изменение свойства обьекта - перезапить обьекта
user.firstName = "Anna";
value = user.firstName;

user.info = "Anna not Ruslan";
valueInfo = user.info;

user["user-address"].city = "kharkiv";
user["user-address"].domNumber = 35;

console.log(user);
console.log(value, value2, value3, value4, value5);
console.log(valueInfo);


const phone =  {
    product: 'iphone',
}

phone.price = 1000;
phone.currency = 'dollar';

phone.details = {};
phone["details"].model = '';
phone["details"].color = '';

// или всё в одной строчке
phone.details2 = {model:"XR", color: "Red"};

console.log(phone);



//>, <, =>, <=, ==, ===, !=, !==
let value;

value = 1 == 2;
value0 = 1 == "1";
value01 = 1 === "1";
value1 = 1 == true;
value2 = 1 === true;

value3 = "a" > "A";
value4 = "a".charCodeAt();

console.log(value, value0, value01, value1, value2, value3, value4);



val = ''; // NaN , 0 , false, '', undefined, null

if (условие) {
    //action if true
} else {
    // false action
} 

if (val !== 10) {
    console.log('val = 10;')
} else {
    console.log("else");
} 


if (val) {
    console.log('some action')
} else {
    console.log('else');
} 



//  || 
// && 
// ! - логическое нет, возвращает противоположное значение текущему в булевом представлении

value = null;

if (value === null) {
  console.log(value, !value);
}

if (!value)
{console.log('Если нет value  выполняем какое-то действие');
}



value = [];

// if (value.length) {
//   console.log(value);
// } else {
//     console.log('array is empty');
// };

// value.length == 0 еквивалентное значение

if (Array.isArray(value)) {
  console.log(value);
} else {
    console.log('array is empty');
};

*/

// value = null;

//console.log(!value); вернуть противоположное значение value в булевом типе или выполнить действие если value не имеет значения

// if (!value) {
//     console.log(value);
// }

// value = [1];

// if (value.length) {
//     console.log(value);
// } else {
//     console.log('array is empty')
// }

//length == 0 - false

// value = null;

// if (Array.isArray(value)) {
//     console.log(value);
// } else {
//     console.log('array is empty')
// }

// let user = {
//     name: 'Ruslan'
// };

//if (user.name)
//if (user.hasOwnProperty('name')) проверяет есть ли тако ключ, но не проверяет значение
// {
//     console.log(user.name)
// } else {
//     console.log('else')
// }

//  || - оператор "или"  если какой-либо из аргументов true, он вернёт true, в противоположной ситуации возвращается false.

//  && - оператор "и" возвращает true, если оба аргумента истинны, а иначе – false:

/* 
Почему при написании проверки 3>2>1 результат выдаёт false? при этом если написать 1<2<3, то получаю true
Действительно, операторы > и < выполняются слева-направо и после того, как первое сравнение вернет TRUE, а справа окажется 1, выполнится неявное приведение TRUE к числовому типу Number (TRUE => 1) , в результате сравнение вернет FALSE.
В случае же 1<2<3 вернется TRUE, т.к. 1<3 
*/

// value = 1 || 0;
// console.log(value);

// let age = 16;

// if (age < 16 || age > 65) {
//     console.log('Some actions')
// }
// else {
//     console.log('age from 16 to 65')
// };

// let serverNickname = 'Denis';
// let nickname = serverNickname || 'default nickname';
// console.log(nickname);

//value = 1 && 0 && 3;
// false, null
// если все значения true - вернёт последнее
//console.log(value);

// productPrice = 10;
// if (productPrice >=5 && productPrice <=20 ){
//     console.log('I got this');
// } else {
//     console.log('not');
// }

// value = 10;

// if (value < 10) {
//     console.log('value < 10', value);
// } else if (value >= 10) {
//     console.log('value >=10', value);
// } else {
//     console.log('else');
// }

/*
1. Чему равно а, почему?

let a = 0 || 'string';    // 'string' возвращает первое попавшееся true
let a = 1 && 'string';    // 'string' возвращает первый попавшийся false или последнее true
let a = null || 25;       // 25 возвращает первое попавшееся true
let a = null && 25;      // null возвращает первый попавшийся false
let a = null || 0 || 35; // 35 возвращает первое попавшееся true
let a = null && 0 && 35; // null  возвращает первый попавшийся false


2.

12 + 14 + '12' //2612

let a1  = 3 + 2 - '1' // 4 При любых математических операциях со строкой кроме сложения строка преобразуется к числу поэтому пры вычитании строки "1" она преобразовалась в число 1
'3' + 2 - 1 // 31  Cначала произошла конкатенация и получилась строка "32" и при вычитании получили числo
true + 2 // 3
+'10' + 1 // 11  унарный плюс превращает строку в число и происходит сложение чисел
undefined + 2 // NaN при любый математических операциях с undefined кроме сложения со строкой, результат будет NaN
null + 5 // 5  null преобразуется к нулю
true + undefined // NaN


3. Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let a = 'hidden';

if (a === 'hidden') {
    console.log('visible');
}else { console.log('hidden');
};

3. пример преподователя

// Всегда делайте строгое сравнение.
if (a === 'hidden') {
  a = 'visible';
} else {
  a = 'hidden';
}

4. Создать переменную и присвойте ей число.
Используя if, записать условие:
- если переменная равна нулю, присвоить ей 1;
- если меньше нуля - строку “less then zero”;
- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let b = -1;
if (b === 0){
    console.log(b=1);
} else if (b < 0) { 
    console.log(b = 'less then zero');
}   
else if ( b > 0) {
        console.log(b = b *10 );
};

4. пример преподователя
   let c = 2;

if (c === 0) {
  c = 1;
} else if (c < 0) {
  c = 'less then zero';
} else {
  // используйте короткую запись при арифметических операциях такого рода. 
  c *= 10;
} 
console.log(c);

5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.


 let car = {
     name: 'Lexus',
     age: 6,
     create: 2008,
     needRepair: false,
 };

 if (car.age > 5){ 
     car.needRepair = true, console.log('Need Repair');
 } else {
     car.needRepair = false, console.log('Dont Need Repair')};
 
 console.log(car);

 6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.

Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

// мы выносим цену и скидку в отдельные переменные что бы несколько раз не вызывать parseFloat

 let item = { 
     name: 'Intel core i7',
     price: '100$',
     discount: '15%' };

const price = parseFloat(item.price);
const discount = parseFloat(item.discount);

// проверяем что цена и скинда не являются NaN так как это важно при расчетах
// if (parseInt(item.discount) - преобразование обьекта в число
// пример преподователя

if (!isNaN(price) && !isNaN(discount)) {
  const priceWithDiscount = price - (price * (discount / 100));
  console.log(priceWithDiscount)
} else {
  console.log(price);
}


if (item.discount !== NaN && item.price !== NaN) {
    Number(item.priceWithDiscount = item.price * item.discount),
    console.log(item.priceWithDiscount);
} else if (item.discount == NaN){
    console.log(item.price);
};

console.log(item);

7. Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.


let product = {
    name: 'Яблоко',
    price: '10$',
    };
    
const productPrice = parseFloat(product.price);

    let min = 10; // минимальная цена
    let max = 20; // максимальная цена

    if (productPrice >= min && productPrice <= max){
        console.log(product.name);
    } else {
        console.log('Товаров не найдено');
    };
    


// тернарные операторы
// выражение ? если да : если нет;
// выражение ? если да : выражение ? если да : если нет;
let a = 1;
let b = 0;

// if (a > 0) {
//   b = a;
// } else {
//   b += 1;
// }

// a > 0 ? b = a : b += 1;
let c = a > 0 ? (b = a) : (b += 1);

console.log(`b: ${b}, c: ${c}`);

// для переопределения b  лучше использовать такую запись

b = a > 0 ? a : b + 1;
console.log(`b: ${b}`) 

b = a > 0 ? 2 : a < 0 ? 3 : 0; 
console.log(`b: ${b}`) 


let color = "green";

switch (color) {
  case "yellow":
    console.log("color is yellow");
    break;
  case "orange":
    console.log("color is orange");
    break;
  case "red":
    console.log("color is red");
    break;
  default:
    console.log("default colour");
}


let a = "block";

switch (a) {
  case "block":
    console.log("block");
    break;
  case "none":
    console.log("none");
    break;
  case "inline":
    console.log("inline");
    break;
  default:
    console.log("other");
}

let b = "hidden";

b = b === "hidden" ? "visible" : "hidden";
console.log(b);

let c = 1;

c = c === 0 ? (c = 1) : c < 0 ? "less then zero" : (c *= 10);
console.log(c);


// while, do while, for, for of, for in
// подсчёт начинается с 0
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//while (i++ < 10) - i  начинается с одного

let a = 10;
while (a--) {
  console.log(a);
}

do {
  console.log("action");
} while (a > 0);


for (let i = 0; i <10; i++) {
  console.log(i);
}



let str = 'Hello';
let res = '';

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }


for (let i = 0; i < str.length; i++) {
  res += str[i] + '*';
}

console.log(res);


let colors = ['white', 'black', 'yellow', 'red'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
  colors[i] = colors[i].toUpperCase();
}
console.log(colors);

for (let i = 0; i <10; i++) {
  if (i === 5) {
    continue; // пропускает один из циклов
    break ; // останавливает выполнение цикла
  } 
  console.log(i);
}


const user = [
  {
    name : 'Denis',
    age : 25,
  }, 
  {
    name : 'Maks',
    age : 27,
  }, 
  {
    name : 'Rus',
    age : 29,
  }, 
  {
    name : 'Kiril',
    age : 21,
  }, 
];

const userObj = {};

for (let i = 0; i < user.length; i++) {
  console.log(user[i].name);
  userObj[user[i].name] = user[i];

}

console.log(userObj);
console.log(userObj['Denis']);


// перебор через  for in все значения 

for (let key in userObj) {
  console.log(key);
  console.log(userObj[key]);
}



const user = {
    name : 'Denis',
    age : 25,
  };

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}


// перебор через  for of все значения, имеет оператор break 
for (let value of user) {
  console.log(value);
}



//1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

let str = 'i am in the easycode';
let newStr = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' '){newStr += str[i].toUpperCase();
  } else {
    newStr += str[i];
  }
}
console.log(newStr);




// 2.Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

let str = 'tseb eht ma i';
let res = '';

for (let i = str.length; i--;) {
  res = res +  str[i]
}
console.log(res);


// 3.Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let res = 1;

for (let i = 1; i <= 10; i++) {
  res =res * i;
}
console.log(res);

//4. На основе строки “JavaScript is a pretty good language” сделать новую строку,где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let str = 'JavaScript is a pretty good language';
let newStr = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' '){newStr += str[i].toUpperCase();
  } else if (str[i] !== ' '){
    newStr += str[i];
  }
}
console.log(newStr);

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' '){newStr += str[i].toUpperCase();
  } else if (str[i] === ' '){
    continue; 
  } else {
    newStr += str[i];
  }
}

// 5.Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
// i % 2 == 1 - остаток от деления нечётного числа 1
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 1; i <= 15; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

for (let num of b) {
  if (num % 2) {
    console.log(num);
  }
}

// Дан объект:
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
  name: `denis`,
  work: `easycode`,
  age: 29,
};

// let newList = {};

// for (let i = 0; i < list.length; i++) {
//   console.log(list[i].name);
//   userObj[user[i].name] = user[i];
// }

// перебор через  for in все значения

for (let key in list) {
  if (typeof list[key] === 'string') {
    list[key] = list[key].toUpperCase();
  }
}
console.log(list);


Вопрос 4:
Что будет в консоли ?

let user = {"name":"Smith", age: 30};
console.log(user['name'] == user.name); //true

Вопрос 5:
Что будет в консоли?

console.log(+'-' + 2) //NaN - 

Вопрос 8:
Какое значение имеет объявленная переменная (например, var a;)? //В пустой переменной всегда будет по умолчанию undefined.

Вопрос 9:
Что будет в консоли?

let foo = { str: 'test' }; 
console.log(foo && foo.str);// 'test' так как оператор && возвращает последнее значение из перечисленных если все перечисленные значения приводятся к true.

Вопрос 11:
Что будет в консоли?

let arr = []
arr[500] = 1
console.log(arr.length); // Так как мы устанавливаем на 500 индекс значение 1 в массиве добавляется 500 элементов со значением undefined а общая длина 501

Вопрос 12:
Как можно преобразовать строку в целое число? // parseInt()


Вопрос 13:
Что будет в консоли?

var x = 1; 
if (x) {
  var x = 2; 
  console.log(x);
} 
console.log(x); // 2, 2

Вопрос 16:
Что будет в консоли?
console.log(typeof null) // object

Вопрос 17:
Какой тип данных у NaN? //  NaN относится к числам))проверяйте NaN при помощи функции isNan

Вопрос 18:
Что будет в консоли?

let y; 
if (y) {
  let y = 2; 
  console.log(y);
} else {
  let y = 10;
  console.log(y);
}
console.log(y); // 10, undefined


Вопрос 20:
Что будет в консоли?

const obj = { brand: 'EasyCode' };
obj.country = 'Ukraine';
console.log(obj) // {brand: 'EasyCode', country : 'Ukraine'} Запрет у констант распространяется только на переопределние но если в них сожержаться объекты то мы можем изменять их содержание, это называется мутацией. 


function sayHello(firstName = 'Default', lastName = 'Default') {
  //function sayHello(firstName = 'Default', lastName = 'Default')
  if (!firstName) return alert('First Name is emtpy'); 
  // console.error('Error')
  console.log(firstName, lastName);
  console.log("Hello World");
  return `hello ${firstName} ${lastName}`;
  //  после return функция не выполнется
  return `privet ${firstName} ${lastName}`;
}

//let res = sayHello('' , 'Shvidkyi');
//let res2 = sayHello('Dima' , 'Shestakov') + '!';
// let res3 = sayHello();
// console.log(res3);


let x = 10;
function foo(x) {
  x = 20; // правильно let x = 20  - тогда в результате будет 20, 10
  console.log(x);
  // переменные лучше обьявлять внутри функций или в параметрах чтобы не изменять глобальнык переменные. 
}

foo();

console.log(x)



const user = {
  name: "Ruslan",
  age: 30,
};

function getObj(obj) {
  console.log(obj);
  obj.name = "Den";
}

getObj(user);
console.log(user);
*/

const square = function (x) {
  return x * x;
};

(function (msg) {
  console.log(msg);
})('Hello world');
