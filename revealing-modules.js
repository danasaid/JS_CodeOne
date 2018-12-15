let counter = (function(){
    //private stuff
    let count = 0;

    function print(message){
        console.log(message + '---' + count);

    }

    // return an object
    function getCount() { return count; }
    function setCount(value) { count = value; }

    function incrementCount(){
        count += 1;
        print('After increment: ');
    }

    function resetCount(){
        print('Before reset: ');
        count = 0
        print('After reset: ');
    }
    return {
        get: getCount,
        set: setCount,
        increment: incrementCount,
    };

})();
console.log(counter);
console.log(counter.get());
//counter.incrementCount();
//counter.incrementCount();
//counter.incrementCount();

//Accidently created a closer
//counter.log(counter.value);
//counter.resetCount(7);
//console.log(counter.getCount());
//counter.resetCount();
