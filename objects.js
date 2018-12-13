/*
let car = {
    make:  'BMW',
    model: '745i',
    year: 2010,
    getPrice: function(){
        //perform some calculation
        return 5000;
    },
    printDescrption: function(){
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescrption();
console.log(car.year);
//console.log(car['year']); never do this

var anotherCar = {}
anotherCar.whatever = 'Toyota';
console.log(anotherCar.whatever);


var a ={
    myProperty: {b: 'Hi'}
}
console.log(a.myProperty.b);

*/

var c = {
  myProperty: [
    { d: 'this'},
    { e: 'can'},
    { f: 'get'},
    { g: 'crazy'}
  ]
};
console.log(c);
console.log(c.myProperty[0]);
console.log(c.myProperty[(d)]);
