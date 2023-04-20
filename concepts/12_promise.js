const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    })
})

p1
    .catch(() => console.log('fail'))
    .catch(() => console.log('fail2'))
    .then((val) => {
        console.log('undefined')
    })
    .then(() => console.log('2'))

