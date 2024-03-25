// function myFunction(){
//     console.log("n"),
//     console.log("najish")
// }

// //calling a function
// myFunction //it is just a reference 

// myFunction() //this the way of callling a javascript funtin

function add(number1 ,number2){
   // console.log(number1 + number2)
   return number1 + number2
}

// add(3,5) in this case the function will easily idenify the data type of variable
//add(3 + "a")
add("a",3) //it will consider both the string as a string because of the dataype of the first variable 

const result = add(5,5)
//console.log(result);


function message(message){
    return "hellow world"
    console.log(`${message} is the mesage passed as an argument`)
}

const str = message("najish")
//console.log(str);

///let us pass the object as an argument in a function
const myobj ={
    name: "najish",
    email: "najish7079@gmail.com"
}
function objectFunction(objectPassed){
    console.log(`this is name ${objectFunction.name} and this is my email ${objectFunction.email}`)
}

objectFunction(myobj)


function moreArgument(num1,num2,...objectPassed){
    return objectPassed
}

console.log(moreArgument(1,2,3,4,5,6));