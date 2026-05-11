// 1. Напиши функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Например, если передали в функцию 1,5, то функция выводит:
// 1
// 2
// 3
// 4
// 5
// и после этого заканчивает свою работу

// function printNumbers(from, to){
//     const timerNum = setInterval(() => {
//         if( from <= to){
//             console.log(from++)
//         } else {
//             clearInterval(timerNum)
//         }
//     }, 1000)
// }
// printNumbers(1, 5)

// 2.  Здесь нужно немного разобраться в методах работы с датами:

// На странице есть инпут с типом "date'. Пользователь выбирает дату и нажимает на кнопку. На странице он должен увидеть, какой день недели в выбранную дату (понедельник, вторник и так далее)

// const btn = document.querySelector('.btn')
// const divDate = document.querySelector('.div__date')
// const inputDate = document.querySelector('.input__date')

// // const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота",
// // ];
// btn.addEventListener('click', () => {
//     const date = new Date (inputDate.value)
//     const day = date.toLocaleDateString("ru-RU", {
//         weekday: 'long'
//     });
//     divDate.innerHTML = day
//     // console.log(day)
//     // const day = date.getDay();
//     // console.log(days[day]);
// })

// 3. На странице есть квадрат 200 на 200 пикселей. И кнопка "удалить квадрат". При клике на нее нужно удалить/скрыть квадрат через 3 секунды. 

// const div = document.querySelector('.div')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     const hidden = setInterval(() => {
//         div.classList.add('hidden')
//     }, 3000)
// })

// 4.  На повторение:
// Есть массив 
const students = [
  {
    id: 1,
    name: "Анна",
    age: 17,
    grades: [5, 4, 5, 3],
  },
  {
    id: 2,
    name: "Иван",
    age: 16,
    grades: [4, 4, 5, 5],
  },
  {
    id: 3,
    name: "Мария",
    age: 18,
    grades: [3, 4, 4, 5],
  },
];
for(let student of students){
    let sum = 0
    for(let grade of student.grades){
        sum = sum + grade
    }
    const result = sum / student.grades.length
    console.log(`${student.name}: ${result}`)
}
// Нужно найти среднюю оценку каждого студента и вывести ее в консоль в формате:
// "Имя студента: средняя оценка"