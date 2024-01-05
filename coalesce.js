//Using Coalesce operator
let firstName;
let username=firstName?? "Guest";
console.log(username);

//Accessing null/undefined objects and assigning them default values
let user={name:"John Doe"}
let email=user.email??"NA"
console.log(email)
console.log(user.name)

//Setting default values if null or undefined
let value=null;
let DEFAULT_VALUE="Default"
let result=value?? DEFAULT_VALUE;
console.log(result)