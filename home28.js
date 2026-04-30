// const input = document.querySelector('.input')
const btn = document.querySelector(".btn");
const select = document.querySelector(".select");
const divResult = document.querySelector(".div__result");

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
//     let result = ''
//     const words = str.toLowerCase().split(' ');
//     for(let i = 0; i < words.length; i++){
//         if(words[i].localeCompare(words[i]) === 0){
//             result = words[i]
//             console.log(words[i]);
//         }
//     }
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

btn.addEventListener("click", () => {
  const link = `https://api.api-ninjas.com/v1/exercises?type=${select.value}`;
  fetch(link, {
    headers: {
      "X-Api-Key": "pMjMw1q0V53zSAtU9SAKlgs8BF3eGqrWrhvjLqn5",
    },
  })
    .then((name) => {
      return name.json();
    })
    .then((result) => {
      console.log(result);
        for(let res of result){
          const text = document.createElement('p')
          text.innerHTML = res.name
          console.log(res)
          divResult.append(text);
        }
    })
});
