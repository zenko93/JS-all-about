
class Future {
    constructor(executor) {
        this.state = 0; // pending
        this.value = null;
        this.successNextHandler = null;

        const resolver = (value) => {
            this.value = value;
            this.state = 1; // resolved
            if (this.successNextHandler) {
                this.successNextHandler(this.value)
            }
        }

        executor(resolver);
    }

    then(func) {
        if (this.state === 1) {
            func(this.value);
        } else {
            this.successNextHandler = func;
        }
    }
}




let execForP = (resolve) => {
    setTimeout(() => {
        resolve('done from promise');
    }, 1000);
}

// let p = new Promise(execForP);
//
// p.then((result) => {
//     console.log(result); // done
// });

const myExecutor = resolve => {
    setTimeout(() => {
        resolve('done from future');
    }, 1000)
}

let f = new Future(myExecutor);

// f.then((result) => {
//   console.log(result, "from future"); // done
// });

setTimeout(() => {
    f.then((result) => {
        console.log(result, "from future"); // done
    });
    console.log("timer from future done");
}, 2000);
