const myArr = [0,1,2,3,4,5]
// const myHeros = ['shaktiman',"naagraj"]

// const myArray2 = new Array(1,2,3,4)
// console.log(myArr[1]);
// myArr.push(6)
// myArr.push(7)
// myArr.unshift(10)
// myArr.shift()
console.log("A",myArr);
console.log(myArr.slice(1,3));

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);

//IN CASE ON SPLICE LAST INDEX IS INCLUDED AND WELL AS THERE
// IS A CHANGE IN THE ORIGINAL ARRAY 

// ***********More About Arrays*********//

const marvel_heros = []

const girls_name = ["rupa" , "veda" , "shilpa" , "chethna"]

const boys_name = ["shiva" , "prasaanna", "kunal" , "dheeraj"]

// girls_name.push(boys_name)
// console.log(girls_name);   //pushing the whole contents of boys_name as a single array

// const newArray = girls_name.concat(boys_name)
// console.log(newArray);


const newArray2 = [...girls_name,...boys_name,...myArr]
console.log(newArray2);