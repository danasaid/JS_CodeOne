let a = 'first';

function scopTest(){
  console.log(a);
  a = 'changed within the function';

  //let b = 'second'
  let b = 'second';
  if (a != ''){
    console.log(a);
    console.log('inside if: ' + b);


    let c = 'third';
    console.log('c is called within the if statement' + c);
  }
}
scopTest();
//console.log(b);
console.log(a);
