// variables
// Dynamically Typed
// you can reassign let
let firstName = "Kevin";
firstName = "Mustafa";
console.log("Hello, " + firstName);
//you cannot reassign const
// const lastName = "Bernal";
// lastName = "Amin";
// console.log("Mr." + lastName);





// data types
// strings, booleans, undefined, lists/arrays, objects(json), numbers
let isGameRunning = false; // 0 = False, 1 = true 
if (isGameRunning) {
    console.log("The game is running");
} else {
    console.log("The game is not running");
}
// Object
let person = {
    "age": 15,
    "personName": "Manuel"
}

console.log("Person is - " + person.age + " - years old.");





// operations and arithmetic
let num1 = 5;
let num2 = 7;
// functions
function addTwo(x, y) {
    // return x + y;
    let total = x + y;
    console.log(total);
}
addTwo(num1, num2);
// although I console.log(total) below, it won't work because the variable "total" defined by let has  a function scope (only exists inside the fucntion)
// console.log(total);





// Dom manipulation
function change() {
    document.getElementById('myImage').src = "./assets/gir2.png";
    console.log('clicked');
}





//supposed to alert your value in text back
// let input = ""; //variable may be out here, to change the scope of it to global
function getName(){
    //Step 1: determine input varibale
    let input = "";
    //Step 2: Get the input from HTML
    input = document.getElementById("myInput").value;
    //Step 3: Build alert box
    alert(input);
}