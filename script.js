
const arr = [1, 3, 6, 2, 9];
const arrObj = [
  {
    name: "dsfsd",
    text: "123213",
  },
  {
    name: "dyrrde",
    text: "6445",
  },
  {
    name: "dyrrde",
    text: "6445",
  },
];
// const newArr = []
// for(let i = 0; i < arr.length; i++){
//     if (arr[i] <= 5){
//         newArr.push(arr[i]);
//     }  
//         // console.log(arr[i]);
// }
// console.log(newArr)

// const filterArr = arr.filter((number, index) => {
//     // console.log(number, index)
//     return 3 <= 5
// })
// console.log(filterArr)

// const mapArr = arr.map((number) => {
//     return number * 2
// })
// console.log(mapArr)

// const names = arrObj.map((user) => {
//     return user.name
// })
// console.log(names)

// const checkEvery = arr.every((number) => {
//     return number < 4
// })
//     console.log(checkEvery);

// const checkSome = arr.some((number) => {
//     return number < 4
// })

// const findeElement = arr.find((number) => {
//   return number > 10;
// });

const findeIndex = arr.findIndex((number) => {
  return number > 41;
});

console.log(findeIndex)