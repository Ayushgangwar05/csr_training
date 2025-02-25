// function reactangle(l, b) {
//   return l * b;
// }
// console.log(reactangle(3, 4));

// let perameter = function (l, b) {
//   return 2 * (l + b);
// };
// console.log(perameter(3, 5));

// let obj1 = {
//   firstname: "Ayush",
//   Lastname: "Gangwar",
//   age: 22,
// };
// // console.log(obj1);

// console.log(obj1.Lastname);

// let obj = new Object();
// obj.firstname = "ayush";
// obj.age = 30;
// console.log(obj);

// let vvv = new Object();
// vvv.firstname = "ayush";
// vvv.age = 30;
// console.log(vvv);

// let obj2 = {};
// obj2.firstname = "Rohit";
// obj2.Lastname = "kumar";
// obj2.age = 40;

// console.log(obj2);

// let obj3 = {
//   namecar: "BMW",
//   Model: 2022,
//   staticfunction: function (a, b) {
//     return b - a;
//   },
// };
// console.log(obj3.staticfunction(3, 7));
// let obj1 = {
//   firstname: "Ayush",
//   Lastname: "Gangwar",
//   age: 22,
//   newfunction: function () {
//     return (
//       this.firstname +
//       " " +
//       "and" +
//       " " +
//       this.Lastname +
//       " " +
//       "age is" +
//       " " +
//       this.age
//     );
//   },
// };

// console.log(obj1.newfunction());

// class myclases {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   printthis() {
//     return this.name + " " + this.age;
//   }
// }

// let new1 = new myclases("ayush", 40);
// console.log(new1);
// console.log(new1.printthis());

// let new1 = ["2", "3", "5", "8", "10"];
// console.log(new1.length);

// let new2 = "      qwertyuio   ";
// console.log(new2.trim());

// let new3 = "qwerty     ";
// console.log(new3.trimEnd());
// let new4 = "qazxcfthn";
// console.log(new4.charAt(2));

// let new5 = "wertyuijhg";
// // console.log(new5.slice(1));
// console.log(new5.split(","));
// console.log(new5.at(5));

// let new2 = 5;
// let new6 = new2.toString();
// console.log(new6);

// let new3 = 550.0;
// // console.log(new3.toFixed(2))
// console.log(new3.valueOf(2));

// let new5 = "5";
// console.log(parseInt(new5));
// let new7 = 10;
// console.log(new7.toString());
// console.log(typeof(new7))

// const arr = ["Ayush", "Gangwar", 30];
// const arr1 = ["Ayush", "Gangwar", 30];
// const arr2 = ["Ayush", "Gangwar", 30];
// const vrr = [];
// vrr.push(arr);
// vrr.push(arr1);
// vrr.push(arr2);
// console.log(vrr);

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;

// }

// console.log(numbers.sort());
// console.log(numbers.toSorted());

// const d = new Date("2025, 2,10");
// console.log(d);

// const d = new Date("October 13, 2014 11:13:00");
// console.log(d);

// const d = new Date("2015-03");
// console.log(d)
// const d = new Date("2015/03/25");

// console.log(d);

// const d = new Date("January 01, 2025");
// // console.log(date.getFullYear())

// console.log(d.setFullYear(2020));

// const d = new Date("January 01, 2025");
// d.setFullYear(2020);
// console.log(d);

// const d = new Date("march, 01,2024");
// d.setFullYear(2025);
// d.setMonth(4);
// console.log(d);

// console.log(Math.floor(3.6000000000));
// console.log(Math.trunc(9.8));
// console.log(Math.sign(-5));

// const ff = [2, 3, 4, , 5, 9, 11, 20];
// console.log(Math.max.apply(null, ff));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let fr = fruits.includes("Banana");
// console.log(fr);

// const arr3 = [3, 4, 5, 6, 7, 11, 2];
// const arrrt = arr3.sort();
// console.log(arrrt);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const fr = fruits.reverse();
// console.log(fr);

// let arr = [10, 40, 55, 203, 2000, 400];
// arr.forEach((e) => {
//   console.log(e);
// });

// const numbers1 = [45, 4, 9, 16, 25];

// numbers1.map((e) => {
//   console.log(e / 2);
// });

// const numbers = [45, 4, 9, 16, 25];

// numbers.filter((e) => {
//   console.log(e / 4);
// });
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//   console.log(x);
// }

// const months = ["Januar", "feb", "Mar", "April"];

// let mnn = months.with(2, "March");
// console.group(mnn);

// const re = "abcd";
// let s = re.replace("b", "");
// console.log(s);
