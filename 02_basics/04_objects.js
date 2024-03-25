//const myobject = new Object(); //singleton
const myobject = {}; //non - singleton declaration
myobject.email = "najish@google.com"
myobject.name = "najish"
myobject.usn = 123456
//console.log(myobject);  


//lets us see nested objects
const newObject = {
    name:{
     
        fullname:{
            firstname: "MD",
            lastname : "najish"
        },
        title: "khan"
    }
    ,
    usn: 12345,

    phone: 9402304923

}

// console.log(newObject.name.fullname.
//     lastname);
//     console.log(newObject.name.fullname?.title); //ye error se bachyega 

//merging objects
const myobj1 = {a : 1 ,b:2};
const myobj2 = {c : 1 ,d:2};
//1st way
// const myobj3 = {myobj1,myobj2}


//2nd way
// const myobj3 = Object.assign(myobj1,myobj2) //output : { a: 1, b: 2, c: 1, d: 2 }
// // console.log(myobj1); //{ a: 1, b: 2, c: 1, d: 2 }
// const myobj3 = Object.assign({},myobj1,myobj2) 
// console.log(myobj3); //{ a: 1, b: 2, c: 1, d: 2 }
// console.log(myobj1);//{ a: 1, b: 2 }

// console.log(Object.keys(myobj1));
// console.log(Object.values(myobj2));
// console.log(Object.entries(myobj2));
// console.log(myobj1.hasOwnProperty('c'));

const course = {
    name: "javascript",
    length :200,
    courseInstructor : "najish"
}
const {courseInstructor : instructor} = course;
console.log(instructor); //destructuring 

// {
//     "name" : "najish",
//     "coursename": "hindi",
//     "title": najish
// }