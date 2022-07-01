function square(x){
x = x * x
console.log(x);
return x
}

let y = 10 
let result = square(y)
// console.log(result);
console.log(y);

let student = {name : 'Fadli', age : 10 }
function naikanUmur(s){
    s.age +=1
    return s
}

let student2 = naikanUmur(student)
console.log(student);
console.log(student2);