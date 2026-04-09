const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const select = document.querySelector(".select");

btn.addEventListener("click", async () => {
  const random = "https://api.api-ninjas.com/v2/randomquotes";
  const all = `https://api.api-ninjas.com/v2/randomquotes?categories=${select.value}`;

  const link = select.value === "randomquotes" ? random : all;

  const response = await fetch(
    link,
    // select.value === 'randomquotes' ? random : all,
    {
      headers: {
        "X-Api-Key": "pMjMw1q0V53zSAtU9SAKlgs8BF3eGqrWrhvjLqn5",
      },
    },
  );
  // console.log(response);
  const info = await response.json();
  title.innerHTML = info[0].categories.join(", ");
  text.innerHTML = info[0].quote;
  author.innerHTML = info[0].author;
  console.log(info);
});
