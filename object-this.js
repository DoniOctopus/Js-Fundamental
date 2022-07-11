// const myObj = {
//     x: 50,
//     foo: function() {
//         console.log(this.x)
//     }
// }
//this -> untuk merujuk kesebuah object
//this = myObj
//punya variabel x
// myObj.foo()

// const foo = myObj.foo
//this = global object
//tidak punya variable x
// foo()
//
// console.log(this)
// console.log(global)
//penggunaan this tidak ditentukan ketika fun dideklarasikan
//melainkann ketika fun itu dipanggil
//implisit binding -> tidak ditentukan oleh developer tp ditentukan oleh JS tergantng dr fungsi itu dipanggil
//dalam artian dipanggil diobject mana
//explixit biding -> nilai yang sudah ditentukan oleh developer
//ada 3 cara untuk explixit binding call(),apply(),bind()

function foo(name, address) {
    let x = 10;
    console.log(name, address, this.x)
}

foo('fadli','raguna')
const anotherObj = {
    x: 100
}
//Call, parameter tambahan berupa variadic
foo.call(anotherObj, 'fadley', 'ragunan')

//apply, parameter tambahan berupa array
foo.apply(anotherObj, ['fadley', 'ragunan'])

//bind, paling sering digunakan
const fadley = foo.bind(anotherObj, 'fadley', 'ragunan')
fadley();
