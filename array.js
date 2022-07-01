//cara panjang
// let arr = new Array();

//cara yang sering digunakna
let arr = []

//arr bisa menerima banyak tipe data,keren bukan??
let anekaRagam = [1,true,'joko',['satu' , 'dua'],function(){
    console.log('hello world');
}]
anekaRagam[4]()

//push menambahkan diakhir
arr.push('fadli')
arr.push('jation')
console.log(arr);
//unshift menambahkan diawal
arr.unshift('tika')
console.log(arr);

//pop mendelet isi element paling akhir
arr.pop()
//shift mendelet dielemet awal
arr.shift()
