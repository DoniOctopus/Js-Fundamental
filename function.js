function add(x, y) {
    return x + y;
}

function calculator(ang1, ang2, oprt) {
    return oprt(ang1, ang2);
}


console.log(calculator(1, 2, add));

function showInfo(name = 'Doni', alamat ='dahlan'){
    console.log(name ,alamat);
}
showInfo();

function perkalian(x,y){
    return(
        x * y
    ) 
}
console.log(perkalian(1,2));

//IIFE
// let result = function minus(a,b){
// return a - b
// }(3,1)
// console.log(result);

(function minus(a, b) {
    console.log(a - b);
})(3, 1);
