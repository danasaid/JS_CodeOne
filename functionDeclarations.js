/*
function sayHello(){
    console.log('--------------------------');
    console.log('Hello!');
    console.log('--------------------------');
}
sayHello();

let a = sayHello;
a();
*/


/*
function sayHello(name){
    console.log('--------------------------');
    console.log('Hello! '+ name + '!');
    console.log('--------------------------');
}
sayHello('Bob');
sayHello('Beth');
sayHello('Mr Tibbles');
*/

function calculateTax(amount){
    let result = amount * 0.075;
    return result;
}

let tax = calculateTax(100);
console.log(tax);
