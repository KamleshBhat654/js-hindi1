const arr=["HELLO","WORLD","HOW"];
const arr2=["ARE","YOU"];
const arr3=arr.concat(arr2);
console.log(arr3);
const arr4=[...arr,...arr2]
console.log(arr4);
const arr5=[1,2,3,[4,5,6,7],8,[9,10]];
const arr6=arr5.flat(Infinity);
console.log(arr6);
console.log(Array.isArray("HELLO"));
console.log(Array.from("HELLO"));
let score=100;
let score1=200;
let score2=300;
console.log(Array.of(score,score1,score2));
