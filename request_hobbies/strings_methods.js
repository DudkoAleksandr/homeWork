// const words = 'words mir'
// // console.log(words.startsWith('wo'))
// console.log(words.includes('9'))
// проверяет содержит строка подстроку и возвращает труи или фолс

// const upper = "words mir";
// console.log(upper.toUpperCase())

// const conc = 'word'.concat('m', 'i', 'r')
// console.log(conc)
// склеивает строку

// const repeat = 'word '.repeat(2)
// console.log(repeat)
// повторяет строку

// const charat = 'word'.charAt(2)
// console.log(charat)
// показывает символ по ндексу

// const index = "word".indexOf('r');
// console.log(index)
// показывает индекс первого найденного символа

// const ends = "word".endsWith('r');
// console.log(ends)
// показывает заканчивается ли строка заданным символом, возвращает тру или фолс

// const search = "word mir".search('ir');
// console.log(search)
// проверяет в строке совпадение и показывает индекс начала

// const sub = "word".substring(2, 3);
// console.log(sub)
// извлекает символ между индексами

// const pad = "word".padEnd(10, 'mir');
// console.log(pad)
// добавляет символ до указанной длины

function truncate(str, maxlength){
 if(str.length > maxlength){
    return str.slice(0, maxlength - 1) + "...";
 }
 return str
}

console.log(truncate("Всем привет!", 20)); 