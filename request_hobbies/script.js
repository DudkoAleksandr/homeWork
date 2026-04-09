const btn = document.querySelector(".btn");
const divResult = document.querySelector(".div__result");
const select = document.querySelector(".select");

btn.addEventListener("click", async () => {
  const category = select.value;
  if(category === ''){
   divResult.innerHTML = 'Выберите категорю'
   return
  }
  const link = `https://api.api-ninjas.com/v1/hobbies?category=${category}`;

  const responce = await fetch(link, {
    headers: {
      "X-Api-Key": "pMjMw1q0V53zSAtU9SAKlgs8BF3eGqrWrhvjLqn5",
    },
  });

  const result = await responce.json();
  console.log(result);
  const title = document.createElement("p");
  title.innerHTML = result.hobby;
  const titleLink = document.createElement("p");
  titleLink.innerHTML = result.link;
  divResult.append(title);
  divResult.append(titleLink);
});
