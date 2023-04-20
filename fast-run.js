//
// let obj = {};
// // console.log(obj instanceof Object)
// let obj1 = Object.create({});
// let obj2 = new Object()
// let obj3 = Object.assign({})
//
// console.log(obj, obj1, obj2, obj3)
//
//
// const object = {
//     a: {
//         b: {
//             c: 1
//         }
//     }
// }
//
// const copy = { ...object };
// const copy2 = Object.assign({} , object);
// const deepCopy = JSON.parse(JSON.stringify(object));

class Foo {
  constructor() {
    this.id = 'foo';
    this.print();
  }

  print() {
    console.log('foo' + this.id);
  }
}

class Bar extends Foo {
  constructor() {

    super()
    this.id = 'bar';
    this.print();
    super.print();
  }

  print() {
    console.log('bar' + this.id);
  }
}

new Bar();

// barfoo
// barbar
// foobar

function d() {
  return () => {
    console.log(this)
  }
}

new d()() ———?
