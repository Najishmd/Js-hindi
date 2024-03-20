// let score = true

// console.log(typeof score)
// console.log(typeof (score))

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33 " => 33
// "33abc" =>NaN
// true => 1

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

//1 => true
// "" =>false
//"somestring" => true

//***********operation************ */

let value  = 3
let negValue = -value
console.log(negValue);
console.log(2+2);

let str1 = "hello "
let str2 = "najish"
//console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2) //javascript consider all value same as tyoe of first values 
// console.log(1 + 2 + "2") // here first value is of the number type


// console.log(+true)
// console.log(+"")

let changeCounter = 100



// console.log(changeCounter++)
// console.log(++changeCounter)

console.log(null > 0)
console.log(null == 0)

console.log(null >= 0)

//*************stack memory */

//stack (primitive ) , heap (non - primitive)

// let userEmail = "najishjnv@gmail.com"
// let anotherUserEmail = userEmail
// console.log(anotherUserEmail);
// anotherUserEmail = "najish7079@gmail.com"
// console.log(userEmail);
// console.log(anotherUserEmail);

let myArray = {
    email : "najish@gmail.com",
    password : 1234567
}

//console.table(myArray);

let anotherArray = myArray
anotherArray.email = "najishjnv@gmailcom"
anotherArray.password = 43545435
console.table(myArray);
