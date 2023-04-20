const person = {
    name: 'Max',
    age: 30
};

// console.log(Object.getOwnPropertyDescriptors(person))
// console.log(Object.getOwnPropertyDescriptor(person, 'age'))


console.log(Object.entries(person))
console.log(Object.fromEntries([[ 'name', 'Max' ], [ 'age', 30 ]]))

for (const [key, value] of Object.entries(person)) {
    console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`)
}

console.log(Object.keys(person));
console.log(Object.values(person))