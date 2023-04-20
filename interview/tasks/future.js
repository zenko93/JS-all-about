function noop() {};

class Future {
    constructor(executor) {
        this.state = 0; // pending
        this.value = null;
        this.queue = [];
        this.errorHandler = noop;
        this.finallyHandler = noop;

        try {
            executor.call(null, this.onResolve.bind(this), this.onReject.bind(this))
        } catch (e) {
            this.errorHandler(e);
        } finally {
            this.finallyHandler();
        }
    }

    onResolve(data) {
        this.state = 1;
        this.value = data;
        this.queue.forEach(callback => data = callback(data));

        this.finallyHandler();
    }

    onReject(error) {
        this.errorHandler(error);

        this.finallyHandler();
    }

    then(func) {
        if (this.state === 1) {
            func(this.value);
            return this;
        } else {
            this.queue.push(func);
            return this;
        }
    }

    catch(func) {
        this.errorHandler = func;
        return this;
    }

    finally(func) {
        this.finallyHandler(func);
        return this;
    }
}




// const f = new Future((resolve, reject) => {
//     setTimeout(() => {
//         resolve('done')
//     })
// })
//
// f
//     .then(res => console.log(res))
//     .then(res => console.log('yo'))
//     .catch((res) => console.log(res));


const p = new Future((resolve, reject) => {
    setTimeout(() => {
        resolve('done')
    }, 1000)
})

p
    .then(res => console.log(res + '1'))
    .catch((res) => console.log(res + '2'))
    .catch((res) => console.log(res + '3'))
    .then((res) => console.log(res + '4'))
    .finally(() => console.log('yo'))

setTimeout(() => {
    p.then((result) => {
        console.log(result, "from future"); // done
    });
    console.log("timer from future done");
}, 2000);
