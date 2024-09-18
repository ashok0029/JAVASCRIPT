const accountId = 144553
let accountEmail = "ashokabishnoi2017@gmail.com"
var accountPassword = "12345"
accountCity = "Bikaner"
let accountState;

// accountId = 2 //this is not allowed

accountEmail = "ashok2017@gmail.com"
accountPassword = "123123"
accountCity = "Mohali"

/*
prefer not to use var
beacuse of issue in block scope and fuctional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])