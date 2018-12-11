
/*// first create a function expression for the "inline" function
setTimeout(function (){
    console.log('I waited 2 seconds');
}, 2000);
*/


/*
let counter = 1;
function timeout(){
    setTimeout(function() {
        console.log('hi: ' + counter++);
        timeout();
    }, 2000);
}
timeout();
*/

(function(){
    console.log('Immediately Invoved Function Expression (IIFE)');
})();
