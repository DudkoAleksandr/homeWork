// const input = document.querySelector('.input')
// const btn = document.querySelector(".btn");
// const select = document.querySelector(".select");
// const divResult = document.querySelector(".div__result");

// btn.addEventListener('click', () => {
//     const words = input.value.split(' ')
//     let longWord = ''
//     for(let word of words ){
//         if(word.length > longWord.length){
//             longWord = word
//         }
//     }
//     console.log(longWord)
// })

// function sumOfDigits(str) {
//     let sum = 0
//     for(let num of str){
//         if (isNaN(num) === false){
//             sum = Number(num) + sum
//         }
//     }
//   console.log(sum);
// }
// sumOfDigits("a1b2c3");

// function findMostFrequentWord(str){
//     let maxCount = 0
//     const obj = {}
//     let result = ''
//     const words = str.toLowerCase().split(' ');
//     for(let i = 0; i < words.length; i++){
//         if (obj[words[i]] !== undefined){
//           obj[words[i]] = obj[words[i]] + 1
//         }  else {
//           obj[words[i]] = 1
//         }
//           // console.log(obj);
//     }
//     for(let word in obj){
//       if(obj[word] > maxCount){
//         maxCount = obj[word]
//         result = word
//       }
//     }
//     console.log(maxCount, result)
// }
// findMostFrequentWord("hi hi hello Hello hi");

// btn.addEventListener("click", async () => {
//   const link = `https://api.api-ninjas.com/v1/exercises?type=${select.value}`;
//   const response = await fetch(link, {
//     headers: {
//       "X-Api-Key": "pMjMw1q0V53zSAtU9SAKlgs8BF3eGqrWrhvjLqn5",
//     },
//   });
//   const resualt = await response.json();
//   for(let res of resualt){
//     const text = document.createElement('p')
//     text.innerHTML = res.name
//     console.log(res)
//     divResult.append(text);
//   }
// });

// btn.addEventListener("click", () => {
//   const link = `https://api.api-ninjas.com/v1/exercises?type=${select.value}&difficulty=intermediate`;
//   fetch(link, {
//     headers: {
//       "X-Api-Key": "pMjMw1q0V53zSAtU9SAKlgs8BF3eGqrWrhvjLqn5",
//     },
//   })
//     .then((name) => {
//       // console.log(name);
//       return name.json();
//     })
//     .then((result) => {
//       console.log(result);
//       for (let res of result) {
//         const text = document.createElement("p");
//         text.innerHTML = res.name;
//         // console.log(res)
//         divResult.append(text);
//       }
//     });
// });

// 3. Написать функцию, которая принимает строку, в которой слова разделены пробелами и возвращает массив слов, в котором каждое слово из строки встречается только один раз.

function getUniqueWords(str){
    const words = str.split()
console.log(words)
}

getUniqueWords("hi hi hello bye hello") // ["hi", "hello", "bye"]

// 4. Написать функцию, которая принимает массив слов и возвращает самое короткое слово
// console.log(findShortestWord("hi hello world")); 

// function findShortestWord(str) {
//   const words = str.split(" ");
//   let shortWord = words[0];

//   for (let word of words) {
//     if (word.length < shortWord.length) {
//       shortWord = word;
//     }
//   }
//   return shortWord;
// }
