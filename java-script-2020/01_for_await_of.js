const emulate = (id, ms) => new Promise(resolve => {
    setTimeout(() => resolve(id), ms)
});

const promises = [
    emulate(1, 250),
    emulate(2, 500),
    emulate(3, 1500),
];

async function old() {
    for (const p of await Promise.all(promises)) {
        console.log('Old:', p)
    }
}

async function modern() {
    for await (const p of promises) {
        console.log('Modern:', p)
    }
}

modern()
// old()