function someFn() {
    console.log(arguments);
}

Function.prototype.delay = function(ms) {
    return function(...arg) {
        setTimeout(() => {
            this(arg);
        }, ms)
    }.bind(this)
}


const someFnWithDelay = someFn.delay(2000);

someFnWithDelay(1,2,3)
