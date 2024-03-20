const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount+ "Value"); //not a good format 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('najish')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne = "    najish    ";
console.log(newStringOne);
console.log(newStringOne.trim());