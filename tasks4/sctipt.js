// Здесь будет закрепление материала за 1 спринт

// 1)	Глубоко скопируйте объект superUser и измените в копии lat на ‘test coordinate’,
// при этом исходный объект должен оставаться неизменным.Реализуйте глубокое копирование 2 - мя способами: через spread оператор и через
// structuredClone()

// Исходный объект superUser:

const superUser = {
	id: 10,
	name: 'Clementina DuBuque',
	username: 'Moriah.Stanton',
	email: 'Rey.Padberg@karina.biz',
	address: {
		street: 'Kattie Turnpike',
		suite: 'Suite 198',
		city: 'Lebsackbury',
		zipcode: '31428-2261',
		geo: {
			lat: '-38.2386',
			lng: '57.2232',
		},
	},
	phone: '024-648-3804',
	website: 'ambrose.net',
	company: {
		name: 'Hoeger LLC',
		catchPhrase: 'Centralized empowering task-force',
		bs: 'target end-to-end models',
	},
};

// 1)

// const copySuperUser = { ...superUser }
// copySuperUser.address.geo.lat = 'test coordinate'

// console.log(copySuperUser);

// const updateSuperUserGeo = {
// 	...superUser,
// 	address: { ...superUser.address, ...superUser.address.geo, lat: 'test coordinate' }
// }

// console.log(updateSuperUserGeo);

// 2)

// let copySuperUser = structuredClone(superUser)
// copySuperUser.address.geo.lat = 'test coordinate'

// console.log(copySuperUser);



// 2)	Напишите функцию sumAndDifference, которая принимает два числа и возвращает объект с их суммой и разностью.Используйте деструктуризацию.

// Expected result:

// function sumAndDifference(a, b) {
// 	return {
// 		sum: a + b,
// 		difference: a - b,
// 	}
// }

// let { sum, difference } = sumAndDifference(4, 3)

// console.log(sum);
// console.log(difference);




// 3)	 Напишите функцию getPositiveNumbers, которая принимает массив чисел
// и возвращает новый массив, содержащий только положительные числа(use filter)

// function getPositiveNumbers(numbers) {
// 	return numbers.filter(n => n > 0)
// }

// const numbers = [-1, 2, -3, 4, -5, 6];
// const positiveNumbers = getPositiveNumbers(numbers);
// console.log(positiveNumbers); // Вывод: [2, 4, 6]


// 4)	Напишите функцию mergeArrays, которая принимает несколько массивов и объединяет их в один массив(reduce, concat)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// function mergeArrays(arr1, arr2) {
// 	return arr3 = arr1.concat(arr2)
// }

// function mergeArrays(arr1, arr2) {
// 	debugger
// 	let arrays = [arr1, arr2]
// 	return arrays.reduce((acc, arr) => acc.concat(arr))

// }

// function mergeArrays(...arrays) {
// 	debugger

// 	return arrays.reduce((acc, arr) => acc.concat(arr))

// }


// const mergedArray = mergeArrays(arr1, arr2);
// console.log(mergedArray); // Вывод: [1, 2, 3, 4, 5, 6]



// 5)	Напишите функцию findString, которая принимает массив строк и строку для поиска, и возвращает true,
//  если строка найдена в массиве, и false в противном случае(includes)

// Expected result:

// const f = () => {

// }

// const strings = ['apple', 'banana', 'orange'];

// function findString(arrString, stringSearch) {
// 	// const res = arrString.find(function (string) { return string === stringSearch })
// 	return arrString.find(function (string) { return string === stringSearch })
// }

// console.log(findString(strings, 'banana')); // Вывод: true
// console.log(findString(strings, 'grape')); // Вывод: false







// 6)	Напишите функцию sortByPropertyValue, которая принимает массив объектов и строку,
// представляющую название свойства объекта.Функция должна вернуть массив объектов,
// отсортированных по возрастанию значений указанного свойства(sort)



// const people = [
// 	{ name: 'Alice', age: 30 },
// 	{ name: 'Bob', age: 25 },
// 	{ name: 'Charlie', age: 35 },
// ];

// function sortByPropertyValue(arrObj, stringNameObj) {
// 	return arrObj.sort((a, b) => a[stringNameObj] - b[stringNameObj])
// }

// sortByPropertyValue(people, 'age');
// console.log(people); // Вывод: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]




// 7)	Дан массив целых чисел.Напишите функцию extractSubarray,
// которая принимает этот массив и два индекса start и end.Функция должна вернуть новый массив,
// содержащий элементы исходного массива с индексами от start до end(не включая элемент с индексом end).
// После этого, исходный массив должен быть изменен, так что он больше не содержит извлеченные элементы(slice, splice)

// function extractSubarray(arrNum, start, end) {
// 	slicedArr = arrNum.slice(start, end)
// 	return (
// 		arrNum.splice(start, slicedArr.length),


// 	)
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let extracted = extractSubarray(array, 2, 6);
// console.log(extracted); // Вывод: [3, 4, 5, 6]
// console.log(array); // Вывод: [1, 2, 7, 8, 9]




// 8)	Напишите функцию addPropertyToObject, которая добавляет новое свойство к объекту с указанным именем
// и значением(use dynamic property for that)

// function addPropertyToObject(obj, key, value) {
// 	return obj[key] = value
// }

// let obj = { name: 'Alice' };
// addPropertyToObject(obj, 'age', 30);
// console.log(obj); // Вывод: { name: "Alice", age: 30 }


// 9)	У вас есть объект, представляющий информацию о студентах и их оценках.
// Напишите функцию, которая принимает этот объект и возвращает массив строк, каждая из которых представляет собой имя студента,
// за которым следует строка с его оценками в формате "Имя: Оценки"(Object.entries() + map)

// function formatStudentGrades(studentsObj) {
// 	return Object.entries(studentsObj).map(([name, values]) => `${name}: ${values}`)
// }

// const students = {
// 	Alice: [4, 5, 3],
// 	Bob: [3, 2, 4],
// 	Charlie: [5, 5, 5]
// };

// console.log(formatStudentGrades(students));
// Вывод:
// [
//   "Alice: 4, 5, 3",
//   "Bob:

// 10)	У вас есть объект, представляющий информацию о студентах и их оценках.
// Напишите функцию, которая принимает этот объект и возвращает массив имен студентов(Object, keys())


// const students = {
// 	Alice: [4, 5, 3],
// 	Bob: [3, 2, 4],
// 	Charlie: [5, 5, 5]
// };

// function getStudentNames(studentsObj) {
// 	return Object.keys(studentsObj)
// }

// console.log(getStudentNames(students));
// // Вывод: ["Alice", "Bob", "Charlie"]






// 11)	У вас есть объект, представляющий информацию о книгах в библиотеке.
// Каждая книга имеет свойство genre, представляющее жанр книги.Напишите функцию, которая принимает этот объект и
// возвращает массив уникальных жанров книг(new Set, Object.values(), map)


// const library = {
// 	'The Great Gatsby': { genre: 'Fiction' },
// 	'To Kill a Mockingbird': { genre: 'Fiction' },
// 	1984: { genre: 'Science Fiction' },
// 	'Pride and Prejudice': { genre: 'Romance' },
// 	'The Catcher in the Rye': { genre: 'Fiction' },
// };

// function getUniqueGenres(lib) {
// 	return new Set(Object.values(lib).map((book) => book.genre))
// }

// console.log(getUniqueGenres(library));
// // Вывод: ["Fiction", "Science Fiction", "Romance"]


// 12)	У вас есть массив пар ключ - значение.Напишите функцию, которая принимает этот массив и возвращает новый объект Map с этими парами.

function createMapFromArray(pairs) {
	return new Map(pairs);
}


const pairs = [
	['a', 1],
	['b', 2],
	['c', 3],
];
console.log(createMapFromArray(pairs));
// Вывод: Map { 'a' => 1, 'b' => 2, 'c' => 3 }








