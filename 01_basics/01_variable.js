const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 TypeError: Assignment to constant variable.


accountEmail = "hc@hc.com"
accountPassword = "12331231"
accountCity = "bengaluru"
/*
Prefer not to use var
because of issue in the block scope and fucntional scope
*/
console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])