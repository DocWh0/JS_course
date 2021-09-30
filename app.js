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

*/

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

// заменет значения
value = str.replace('Denis', 'Ruslan')
console.log(value);
