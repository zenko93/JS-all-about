// __proto__ указывает на прототип родительского класса или объекта от которого был создан объект
// Object.getPrototypeOf()

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
// }
//
// Cat.prototype.voice = function () {
//     console.log(`Cat ${this.name} says myay`)
// };
//
// const cat = new Cat('Kot', 'white');
//
// console.log(Cat.prototype);
// console.log(Cat.prototype === cat.__proto__);
// console.log(cat.constructor);
// cat.voice();


//========
function Person() {

}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Jeka';

// console.log('skin' in person);
// console.log(person.legs);
// console.log(person.name);

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('skin'));

//Object.create()

const proto = {year: 2020};
const myYear = Object.create(proto);

console.log(myYear.year);
console.log(myYear.hasOwnProperty('year'));
console.log(myYear.__proto__ === proto)







