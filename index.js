// let user = {
//     name: "John",
//     age:30,
//     surname:"Doe",

//     about(){
//         console.log(this.surname);
//     }

// }

// user.about()
 
// for (const key in user) {
//     console.log(user[key]);
// }


// let user = [
//     {
//         name:"John",
//         age: 45
//     },
//     {
//         name:"Doe",
//         age: 55
//     },
//     {
//         name:"Alex",
//         age: 88
//     }
// ]
// let sum = 0;
 
// for (let i = 0;i < user.length; i++){
//     sum = sum + user[i].age
// }
// console.log(sum);


// function User (name,age,surname,phone){
//     this.name = name;
//     this.age = age;
//     this.surname = surname;
//     this.phone = phone;
// }
// let john = new User("John",24,"Doe","+998987654321")
// let adam = new User("Adam",24,"Doe","+998987654321")
// let anna = new User("Anna",24,"Doe","+998987654321")


// 1 - masala

// let arr = [
//     {
//         name:"John",
//         age:34
//     },
//     {
//         name:"Adam",
//         age:15
//     },
//     {
//         name:"Doe",
//         age:21
//     },
//     {
//         name:"Alex",
//         age:76
//     },
// ]
// let sum = 1;
// for (let i = 0;i < arr.length; i++){
//     sum = sum * arr[i].age
// }
// console.log(sum);


// 2 - masala

// let arr = [
//     {
//         name:"John",
//         age:34
//     },
//     {
//         name:"Adam",
//         age:15
//     },
//     {
//         name:"Doe",
//         age:21
//     },
//     {
//         name:"Alex",
//         age:76
//     },
// ]
// let sum = 1;
// let res = []
// for (let i = 0;i < arr.length; i++){
//     if (arr[i].age > 25) {
//         res.push(arr[i].age)
//     }
// }
// console.log(res);


// 3 - masala
// let arr = [
//     {
//         name:"John",
//         age:34
//     },
//     {
//         name:"Adam",
//         age:15
//     },
//     {
//         name:"Doe",
//         age:21
//     },
//     {
//         name:"Alex",
//         age:76
//     },
// ]
// let sum = 0;
// let res = [];
 
// for (let i = 0;i < arr.length; i++){
//     sum = sum + arr[i].age / 2
//     if (sum > arr[i].age) {
//         res=(arr[i].age)
//     }
//   }
// console.log(res);


// 4 - masala
// let arr = [
//     {
//         name:"John",
//         age:34
//     },
//     {
//         name:"Adam",
//         age:15
//     },
//     {
//         name:"Doe",
//         age:21
//     },
//     {
//         name:"Alex",
//         age:76
//     },
// ]
// let sum = 0;
// let res = [];
 
// for (let i = 0;i < arr.length; i++){
//     sum = sum + arr[i].age / 2
//     if (sum < arr[i].age) {
//         res=(arr[i].age)
//     }
//   }
// console.log(res);

