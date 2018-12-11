let a = [4, 8, 15, 16, 23, 42];
let b = ['David', 'Eddie', 'Alex', 'Michael'];

console.log(a[0]);
console.log(a[1]);
console.log(a[a.length-1]);
console.log(a);


// Change value of array's element
a[0] = 7;
console.log(a);

//array is an Object data type
console.log(typeof a);

// Array can have different data types
let c = [4, 'Alex', true];
console.log(c);

//undefined if you try to access and element of array that is not in the range
console.log('The length of the array is: ' + b[5]);

// Array's length. "length" is one of the array's members
console.log(a.length); // The actuall number of the array's elements.


a[10] = 77;
console.log(a);
console.log(a.length);


// to add a new element at the end of the array, use push
a.push(77);
console.log(a);
console.log('The length of the array after adding one more to the end of the array is: ' + a.length);

//To remove the last element of the array use the object member "pop"
a.pop();
console.log('removed the last element: ' + a);
a.pop();
console.log('removed the last element: ' + a);
a.pop();
console.log('removed the last element: ' + a);
a.pop();
console.log('removed the last element: ' + a);
a.pop();
console.log('removed the last element: ' + a);
a.pop();
console.log('removed the last element: [' + a +']');
