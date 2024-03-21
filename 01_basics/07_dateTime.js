let myDate = new Date()
console.log(typeof  myDate);

// console.log(myDate); //2024-03-21T20:03:09.119Z
// console.log(myDate.toString()); //Thu Mar 21 2024 20:04:58 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Thu Mar 21 2024
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString());  //1/23/2023, 5:03:00 AM

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

newDate.toLocaleString('defaul',{
    weekday : "long"
})