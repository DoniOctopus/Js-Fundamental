// function Asncy(cetak) {
//     setTimeout(() => {
//         cetak()
//     }, 2000);
// }

// function cetak(){
//     console.log('fadli');
// }
// console.log('mulai');
// Asncy(cetak)
// console.log('selesai');
//Penggunaan Anscy yang salah 
//karena let user mendekarasi duluan
//di line 18 tidak terjadi bloicking 
//maka line 27 di eksekusi
// function userCredintialRepo() {
//     let users = []
//     setTimeout(() => {
//         users = [{
//             userName: 'jution',
//             password: '1234'
//         }, {
//             userName: 'fadli',
//             password: '124'
//         }]
//     }, 1000);
//     return users;
// }

//maka dari itu userrepo array kososng
// function findUser(userName) {
//     const userRepo = userCredintialRepo()
//     // console.log(userRepo);
//     return userRepo.find((u) => u.userName === userName)
// }


function userCredintialRepo(findUserCallback) {
    setTimeout(() => {
        let users = [{
            userName: 'jution',
            password: '1234'
        }, {
            userName: 'fadli',
            password: '124'
        }]
        findUserCallback(users)
    }, 1000);
}
function findUser(userName, callBack) {
    let findUserCb = (users) => {
        let result = users.find((u) => u.userName === userName)
        // printUser(result)
        callBack(result)
    }
    userCredintialRepo(findUserCb)
}
findUser('jution', printUser)

function printUser(user) {
    console.log(user);
}