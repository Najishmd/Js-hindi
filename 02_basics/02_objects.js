//objects 
//Note: When we creaate obejct with literal then no singlton will be created
const mysmb = Symbol("symbolKey");
const myobject = {
    name : "NAJISH",
    "full name" : "MD NAJISH",
    [mysmb] : "objectKey",
    usn : "1BI20IS053",
    sem : 8,
    email : "najish7079@gmail.com"
}
// how to access the object attributes
console.log(myobject.name); //first method
console.log(myobject["name"]);
console.log(myobject["full name"]); //CORRECT WAY WHEN WE DECLARE KEY AS A STRING INSIDE OBEJCT
//myobject.name = "MD NAJISH"
// console.log(myobject.name);
//Object.freeze(myobject);     //RESTRICT CAHNGES TO AN OBJECT
// myobject.email ="NAJISH@GOOGLE"
// console.log(myobject.email);
// console.log(typeof myobject[mysmb]);
// console.log(mysmb);


myobject.greeting = function(){
    console.log("greeting 1");
}

//console.log(myobject.greeting); [Function (anonymous)]
//console.log(myobject.greeting());

myobject.greetingTwo = function(){
    console.log(`greeeting two ${this["full name"]}`);
}
console.log(myobject.greeting());
console.log(myobject.greetingTwo());

