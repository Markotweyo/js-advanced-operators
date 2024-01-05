//Using the Coalesce operator in function call when no arguments are passed and theus default value is set
function greet(firstName){
    console.log(`Hello ${firstName?? "Guest"}`);
}
greet()
greet("John")