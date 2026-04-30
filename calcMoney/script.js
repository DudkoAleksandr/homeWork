const currency = document.querySelector(".currency");
const currencyIn = document.querySelector(".currency-in");
const inputCurrency = document.querySelector(".input__currency");
const inputResualt = document.querySelector(".input__resualt");
const btnResualt = document.querySelector(".btn__resualt");
const loader = document.querySelector(".loader");

// btnResualt.addEventListener('click', async () => {
//     const currencyAll = `https://api.api-ninjas.com/v1/convertcurrency?have=${currency.value}&want=${currencyIn.value}&amount=${inputCurrency.value}`;
//     const response = await fetch( currencyAll, {
//       headers: {
//         "X-Api-Key": "pMjMw1q0V53zSAtU9SAKlgs8BF3eGqrWrhvjLqn5",
//       },
//     });
//     const resualt = await response.json()
//     inputResualt.value = resualt.new_amount;
//     console.log(resualt)
// })

btnResualt.addEventListener("click", () => {
  const currencyAll = `https://api.api-ninjas.com/v1/convertcurrency?have=${currency.value}&want=${currencyIn.value}&amount=${inputCurrency.value}`;

  loader.classList.remove("hidden");

  fetch(currencyAll, {
    headers: {
      "X-Api-Key": "pMjMw1q0V53zSAtU9SAKlgs8BF3eGqrWrhvjLqn5",
    },
  })
    .then((info) => {
      return info.json();
    })
    .then((resualt) => {
      inputResualt.value = resualt.new_amount;
      loader.classList.add("hidden");
    });
});
