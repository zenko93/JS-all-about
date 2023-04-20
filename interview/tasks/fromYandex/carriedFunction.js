function sum(a, b ,c) {
    return a + b + c;
}

function carrie(f) {
    const argsLength = f.length;
    const savedArgs = [];

    return function tempFunc(...args) {
        savedArgs.push(...args);

        if (savedArgs.length > argsLength) {
            console.error(`Неверное количество аргументов функция ${f.name} принимает ${f.length} аргумента`)
        }

        if (savedArgs.length < argsLength) {
            return tempFunc;
        }

        if (savedArgs.length === argsLength) {
            return f(...savedArgs);
        }
    }
}

console.log(carrie(sum)(1,2,3));
console.log(carrie(sum)(1,2)(3));
console.log(carrie(sum)(1)(2)(3));
console.log(carrie(sum)(1)(2)(3,4));
