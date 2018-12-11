function one(){
  return 'one';
}

//let value = one();
let value = one;
console.log(value);
console.log(one());
console.log(typeof value);

//string
//number
//boolean
//function

function two(){
  return function(){
    console.log('TWO');
  }
}
let myFunction = two();
myFunction();


function three(){
  return function(){
    return 'THREE';
  }
}

console.log(three()());
