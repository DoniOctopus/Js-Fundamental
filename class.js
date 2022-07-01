// const product ={
//     productID : 123,
//     name : 'doni',
//     info : function(){
//         return `productID : ${this.productID },productName : ${this.name}`
//     }
// }
// console.log(product.info());

const { object } = require("yup")

function Product(id, name) {
    let product = {}
    product.productID = id
    product.name = name
    product.info = function () {
        return `productID : ${this.productID},productName : ${this.name}`
    }
    return product
}
let product01 = Product(123,'doni')
console.log(product01);
let product02 = Product(12,'dli')
console.log(product02);

const ProductMethod = {
   info :  function () {
        return `productID : ${this.productID},productName : ${this.name}`
    }
}

//kita membuat product baru dari object yang lama 
function ProductObject(id,name){
    //copy
    let product = Object.create(ProductMethod)
    product.productID = id
    product.name = name
    return product;
}
let product03  = ProductObject(236,'jution')
console.log(product03.info());

//code diatas berjalan dengan baik,hanya saja masih kurang bagus
//karena kita harus membuat sebuah object lain khusus untuk method yang reusable
//oleh karena itu JS punya fiture prototype
//setiap funsi sudah memiliki protptype
// function doNothing(){}
// console.log(doNothing.prototype); 
function ProductPrototype(id,name){
    //copy
    let product = Object.create(ProductPrototype.prototype)
    product.productID = id
    product.name = name
    return product;
}

ProductPrototype.prototype.info = function () {
    return `productID : ${this.productID},productName : ${this.name}`
}

let product04 = ProductPrototype(234,'tika')
console.log(product04.info());

//ini yang dinamakan contractor function
//tidak memiliki return statment langsung menjadi object
function NewProduct(id,name){
//    this = {}
    this.productID = id
    this.name = name 
    // return this
}
NewProduct.prototype.info = function () {
    return `productID : ${this.productID},productName : ${this.name}`
}

//keyword new itu menambahkan return this dibelakang layar
let product05 = new NewProduct(999,'joe')
console.log(product05.info());

//inheritance
function FoodProduct(price){
    this.price = price
}
FoodProduct.prototype = {
    ...NewProduct.prototype,
    foodInfo :  function () {
        return `productID : ${this.productID},productName : ${this.name}, price ${this.price}`
    }
    //ES6 sudah bisa berbentuk method 
    // foodInfo() {
    //     return `productID : ${this.productID},productName : ${this.name}, price ${this.price}`
    // }
}
let food01 = new FoodProduct();
food01.price=2000;
food01.productID = 12;
food01.name = 'nasi goreng'
console.log(food01.info());
console.log(food01.foodInfo());
