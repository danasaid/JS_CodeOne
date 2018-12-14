var counter = (function(){
    //private stuff
    let count = 0;

    function print(message){
        console.log(message + '---' + count);

    }

    // return an object
    return{
        //value: count,
        get: funtion() { return count; },
        set: funtion(value) { count = value; },

        increment: function(){
            count += 1;
            print('After increment: ');
        },

        reset: function(){
            print('Before reset: ');
            count = 0
            print('After reset: ');
        },
    }
})();
//counter.log(counter.count);
counter.increment();
counter.increment();
counter.increment();

//Accidently created a closer
//counter.log(counter.value);
counter.set(7);
console.log(counter.get());
counter.reset();