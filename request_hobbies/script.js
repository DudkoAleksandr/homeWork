const btn = document.querySelector(".btn");
const divResult = document.querySelector(".div__result");
const select = document.querySelector(".select");
const selectSort = document.querySelector(".select__sort");
const dellAll = document.querySelector(".del__all");
const inputSearch = document.querySelector('.input')
let hobbies = JSON.parse(localStorage.getItem("result"));

if (hobbies === null) {
  hobbies = [];
}

btn.addEventListener("click", async () => {
  const category = select.value;
  if (category === "") {
    divResult.innerHTML = "Выберите категорю";
    return;
  }
  const link = `https://api.api-ninjas.com/v1/hobbies?category=${category}`;

  const responce = await fetch(link, {
    headers: {
      "X-Api-Key": "pMjMw1q0V53zSAtU9SAKlgs8BF3eGqrWrhvjLqn5",
    },
  });

  const result = await responce.json();
  // console.log(result);
  // render(hobbies);
  hobbies.push(result);
  // console.log(hobbies);
  localStorage.setItem("result", JSON.stringify(hobbies));
  render(hobbies);
});

function render(hobbies) {
  divResult.innerHTML = "";
  for (let i = 0; i < hobbies.length; i++) {
    const container = document.createElement("div");
    container.classList.add("div__container");
    const numberHobbies = document.createElement("p");
    numberHobbies.innerHTML = i + 1 + "" + ")";
    const theme = document.createElement("p");
    theme.innerHTML = hobbies[i].category;
    const title = document.createElement("p");
    title.innerHTML = hobbies[i].hobby;
    const titleLink = document.createElement("p");
    titleLink.innerHTML = hobbies[i].link;
    container.append(numberHobbies);
    container.append(theme);
    container.append(title);
    container.append(titleLink);
    const html = `
        <button class="btn__del">Удалить</button>
    `;
    container.insertAdjacentHTML("beforeend", html);
    divResult.append(container);
  }
  const btnDel = document.querySelectorAll(".btn__del");

  // console.log(btnDel.length, hobbies.length)

  for (let i = 0; i < btnDel.length; i++) {
    btnDel[i].addEventListener("click", () => {
      hobbies.splice(i, 1);

      render(hobbies);
      localStorage.setItem("result", JSON.stringify(hobbies));
    });
  }
}
render(hobbies);

selectSort.addEventListener("change", () => {
  const search = [];
  for (let category of hobbies) {
    if (selectSort.value === "sports__category") {
      if (category.category === "sports_and_outdoors") {
        search.push(category);
      }
    } else if (selectSort.value === "education__category") {
      if (category.category === "education") {
        search.push(category);
      }
    } else if (selectSort.value === "competition__category") {
      if (category.category === "competition") {
        search.push(category);
      }
    } else if (selectSort.value === "all__category") {
      search.push(category);
    }
  }
  render(search);

  if (
    selectSort.value === "sports__category" ||
    selectSort.value === "education__category" ||
    selectSort.value === "competition__category"
  ) {
    hideDelete();
  }
});

dellAll.addEventListener("click", () => {
  hobbies.splice(0);
  localStorage.setItem("result", JSON.stringify(hobbies));
  render(hobbies);
  console.log(hobbies);
});

function hideDelete() {
  const btnDel = document.querySelectorAll(".btn__del");
  for (let btn of btnDel) {
    btn.classList.add("hidden");
  }
}

inputSearch.addEventListener('input', () => {
  const resultArr = []
  for(let nameHobbi of hobbies){
    if (nameHobbi.hobby.includes(inputSearch.value)){
      resultArr.push(nameHobbi)
    }
  }
  render(resultArr)
})