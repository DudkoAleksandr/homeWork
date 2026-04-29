// const numbers = [3, 7, -2, 10];

// let numSome = numbers.some((number) => {
//     return number < 0
// })
// console.log(numSome)

// const words = ["cat", "house", "sun"];

// const wordSome = words.some((word) => {
//     return word.length > 5
// })
// console.log(wordSome)

// const tasks = [
//   { text: "Купить хлеб", done: false },
//   { text: "Сделать ДЗ", done: true },
// ];

// const winTask = tasks.some((win) => {
//     return win.done === true
// })
// console.log(winTask)

// не понимаю почему нужен return а можно написать без него

// const users = [
//   { name: "Alex", age: 22 },
//   { name: "Ivan", age: 16 },
//   { name: "Ivan", age: 19 },
// ];

// const userAge = users.some((ages) => {
//   return ages.age < 18;
// });
// console.log(userAge);

// const numbers = [1, 5, 10, 3];

// const numberPlus = numbers.every((num) => {
//   return num > 0
// })
// console.log(numberPlus)

// const words = ["hi", "sun", "cat"];

// const wordLen = words.every((length) => {
//   return length.length > 2
// })
// console.log(wordLen)

// const tasks = [
//   { text: "Task 1", done: true },
//   { text: "Task 2", done: true },
// ];

// const tasksCheck = tasks.every((task) => {
//   return task.done === true
// })
// console.log(tasksCheck)

// const users = [
//   { name: "Alex", age: 22, type: 'adult'},
//   { name: "Ivan", age: 19, type: 'adult' },
//   { name: "Ivan", age: 1, type: 'child' },
// ];

// const userAge = users.every((user) => {
//     if(user.type === 'adult'){
//        return user.age > 18
//     } else if (user.type === 'child'){
//        return user.age < 18
//     }
// })
// console.log(userAge)


// const strings = users.map((str) => {
//     let type = ''
//     if(str.type === 'adult'){
//         type = 'Взрослый'
//     } else if( str.type === 'child'){
//         type = 'Ребенок'
//     }
//     return `${str.name} (${str.age}) - ${type} `
//     // console.log(strings)
// })
// console.log(strings);
// console.log(users)






// function capitalizeFirstLetter(str){
//  if(str === ''){
//     return str
//  } else {
//     return str[0].toUpperCase() + str.slice(1).toLowerCase()
//  }
// }

// console.log(capitalizeFirstLetter("javaScript"));

// function reverseWordsOrder(str) {
//     return str.split(' ').reverse().join(' ')
// }
// console.log(reverseWordsOrder("JavaScript это весело"));

// function censorText(str, badWords){
//     return str.split(' ').map(word => {
//         if (badWords.includes(word.toLowerCase())){
//             return "***";
//         }
//         return word
//     })
//     .join(' ')
// }
// console.log(censorText("Хелло ворлд", ["мир"]));
// console.log(censorText("Боб и бобёр пошли в бар", ["боб", "бар"]));