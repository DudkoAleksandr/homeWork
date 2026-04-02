const div = document.querySelector(".students");
const select = document.querySelector(".select");
const btnWin = document.querySelector(".btn__win");
const inputStud = document.querySelector(".input__stud");
const inputScore = document.querySelector(".input__score");
const btnAdd = document.querySelector(".btn__add");

const students = [
  { name: "Анна", score: 85 },
  { name: "Иван", score: 42 },
  { name: "Мария", score: 91 },
  { name: "Петр", score: 63 },
];

renderStudents(students);

function renderStudents(arr) {
  for (let studentsObj of arr) {
    const pStud = document.createElement("p");
    pStud.innerHTML = `Имя: ${studentsObj.name}; Оценка: ${studentsObj.score}`;
    div.append(pStud);
  }
}

select.addEventListener("change", (event) => {
  if (event.target.value === "students__max") {
    const studMax = students.filter((student) => {
      return student.score >= 60;
    });
    div.innerHTML = "";
    renderStudents(studMax);
  } else if (event.target.value === "students__min") {
    const studMin = students.filter((student) => {
      return student.score <= 50;
    });
    div.innerHTML = "";
    renderStudents(studMin);
  } else if (event.target.value === "students__all") {
    div.innerHTML = "";
    renderStudents(students);
  }
});

btnWin.addEventListener('click', () => {
  const studWin = students.filter((win) => {
    return win.score > 90
  })
  for(let win of studWin){
    const pWin = document.createElement('p')
    pWin.innerHTML = `Более 90 очков у студента ${win.name}`
    div.append(pWin)
  }
})

btnAdd.addEventListener('click', () => {
  if(inputStud.value !== '' && inputScore.value !== ''){
  students.push({name: inputStud.value, score: inputScore.value})
  }
  div.innerHTML = ''
  renderStudents(students);
})
