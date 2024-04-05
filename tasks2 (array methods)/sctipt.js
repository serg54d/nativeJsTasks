// push():
// Добавьте один или несколько элементов в конец массива

// let fruits = ['apple', 'banana', 'orange'];
// fruits.push('mandarin')
// console.log('fruits: ', fruits);


// pop():
// Удалите последний элемент в массиве и верните этот элемент

// const users = [
// 	{
// 		id: 1,
// 		name: 'Bob',
// 		isStudent: true,
// 	},
// 	{
// 		id: 2,
// 		name: 'Alex',
// 		isStudent: true,
// 	},
// 	{
// 		id: 3,
// 		name: 'Ann',
// 		isStudent: true,
// 	},
// 	{
// 		id: 4,
// 		name: 'Donald',
// 		isStudent: false,
// 	},
// ];

// const lastUsers = users.pop()
// console.log('users: ', users);
// console.log('lastUsers: ', lastUsers);



// shift():
// Удалите первого юзера и верните его

// const users = [
// 	{
// 		id: 1,
// 		name: 'Bob',
// 		isStudent: true,
// 	},
// 	{
// 		id: 2,
// 		name: 'Alex',
// 		isStudent: true,
// 	},
// 	{
// 		id: 3,
// 		name: 'Ann',
// 		isStudent: true,
// 	},
// 	{
// 		id: 4,
// 		name: 'Donald',
// 		isStudent: false,
// 	},
// ];

// const firstUser = users.shift()
// console.log('users: ', users);
// console.log('firstUser', firstUser);



// unshift():
// Добавьте один и более элементов в начало массива


// const users = [
// 	{
// 		id: 1,
// 		name: 'Bob',
// 		isStudent: true,
// 	},
// 	{
// 		id: 2,
// 		name: 'Alex',
// 		isStudent: true,
// 	},
// 	{
// 		id: 3,
// 		name: 'Ann',
// 		isStudent: true,
// 	},
// 	{
// 		id: 4,
// 		name: 'Donald',
// 		isStudent: false,
// 	},
// ];

// users.unshift({ id: 0, name: 'Serj', isStudent: true })
// console.log(users);


// reverse(), join(), split():
// Сделать reverse слова

// const str = 'JavaScript is awesome';
// const res = str.split(' ').reverse().join(' ')

// console.log(res)




// concat():

// Напишите функцию mergeArrays, которая принимает на вход два массива и возвращает новый массив, содержащий все элементы из обоих массивов.

// arr1 = [1, 2, 3]
// arr2 = [5, 6, 7]

// function mergeArrays(arr1, arr2) {
// 	return console.log(arr1.concat(arr2))
// }

// mergeArrays(arr1, arr2)



// flat():
// Напишите функцию JavaScript, которая сглаживает вложенный массив любой глубины


// arr = [
// 	[1, 2, 3, [5]],
// 	[7, [8, [50]]]
// ]

// function flattenArrays(arr) {
// 	return console.log(arr.flat(Infinity))
// }

// flattenArrays(arr)



// forEach():
// Напишите функцию JavaScript, которая вычисляет квадрат каждого элемента массива и выводит результат.

// arr = [2, 3, 4]

// function calculateSquare(arr) {

// 	arr.forEach(element => {
// 		element *= element
// 		return console.log(element)
// 	});
// }

// calculateSquare(arr)



// find():
// Напишите функцию JavaScript, которая находит первый элемент в массиве, удовлетворяющий заданному условию.

// Пример:

// Входной массив: [10, 20, 30, 40, 50]
// Условие: Найти первый элемент больше 25
// Выходные данные: 30

// Входной массив: ["яблоко", "банан", "апельсин", "киви"].
// 	Условие: Найти первый элемент, начинающийся на "o".
// Выходные данные: "апельсин"

// Необходимо написать функцию findFirstElement, которая принимает на вход массив и
// функцию условия и возвращает первый элемент в массиве, удовлетворяющий условию.


// function findFirstElement(arr, condition) {
// 	return arr.find(condition);
// }

// let numbers = [10, 20, 30, 40, 50];
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];

// let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
// console.log(firstNumberGreaterThan25); // Output: 30

// let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith('o'));
// console.log(firstFruitStartingWithO); // Output: "orange"


// includes():

// Напишите функцию JavaScript, которая проверяет, присутствует ли заданный элемент в массиве.

// 	Пример:

// Входной массив: [1, 2, 3, 4, 5]
// Элемент для проверки: 3
// Выход: true

// Входной массив: ["яблоко", "банан", "апельсин", "киви"].
// Элемент для проверки: "виноград"
// Выход: false

// Необходимо написать функцию checkElement, которая принимает на вход массив и элемент и возвращает true,
// если элемент присутствует в массиве, и false в противном случае.


// let numbers = [1, 2, 3, 4, 5];
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];

// function checkElement(arr, condition) {
// 	return (
// 		res = arr.includes(condition)
// 	)
// }



// console.log(checkElement(numbers, 3)); // Output: true
// console.log(checkElement(fruits, 'grape')); // Output: false



// filter():
// Напишите функцию JavaScript, которая фильтрует массив чисел и возвращает только те элементы, которые больше заданного значения.

// 	Пример:

// Входной массив: [10, 20, 30, 40, 50]
// Значение для фильтрации: 25
// Выходной массив: [30, 40, 50]

// Входной массив: [5, 15, 25, 35, 45]
// Значение для фильтрации: 20
// Выходные данные: [25, 35, 45]

// Необходимо написать функцию filterGreaterThan, которая принимает на вход массив чисел и значение и возвращает новый массив,
// содержащий только элементы, превышающие указанное значение.


// let numbers1 = [10, 20, 30, 40, 50];
// let numbers2 = [5, 15, 25, 35, 45];

// function filterGreaterThan(arr, condition) {
// 	return arr.filter((el) => el > condition)
// }

// console.log(filterGreaterThan(numbers1, 25)); // Output: [30, 40, 50]
// console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]



// sort():

// Напишите функцию JavaScript, которая сортирует массив объектов в алфавитном порядке на основе заданного свойства.

// function sortAlphabeticallyByProperty(arr, property) {
// 	return arr.sort((a, b) => a[property].localeCompare(b[property]));
// }

// let people = [
// 	{ name: 'John', age: 30 },
// 	{ name: 'Alice', age: 25 },
// 	{ name: 'Bob', age: 35 },
// ];

// console.log(sortAlphabeticallyByProperty(people, 'name')); // [ { name: 'Alice', age: 25 },{ name: 'Bob', age: 35 },{ name: 'John', age: 30 }]


// Напишите функцию JavaScript, которая сортирует массив чисел в порядке убывания
// Ожидаемый результат:

// let numbers = [5, 2, 8, 1, 4];

// function sortDescending(arr) {
// 	return arr.sort((a, b) => b - a)
// }

// console.log(sortDescending(numbers)); // Output: [8, 5, 4, 2, 1]




// map():

// 1)	Отформатируйте data в массив объектов с такими вот св - ми

// [
// 	{ value: 1, label: 'Option 1' },
// 	{ value: 2, label: 'Option 2' },
// 	{ value: 3, label: 'Option 3' }
// ]


// Исходный массив:

let data = [
	{ value: 1, name: 'Option 1' },
	{ value: 2, name: 'Option 2' },
	{ value: 3, name: 'Option 3' },
];


let formattedData = data.map((item) => {
	return {
		value: item.value,
		label: item.name,
	}
})

console.log(formattedData);


// 2)	У вас есть массив объектов, и вы хотите добавить к каждому объекту новое свойство на основе существующих данных.
// Этим свойством будет discountPrice, где значение будет вычисляться таким образом price * 0.9

let products = [
	{ id: 1, name: 'Apple', price: 1.99 },
	{ id: 2, name: 'Banana', price: 0.99 },
	{ id: 3, name: 'Orange', price: 2.49 },
];

let productsWithDiscount = products.map((item) => {
	// let discountedPrice = item.price * 0.9
	// return item.push(discountedPrice)

	return {
		...item = item,
		discountedPrice: item.price * 0.9,
		kak: '1234',
	}

})


console.log(productsWithDiscount); // [
//   { id: 1, name: 'Apple', price: 1.99, с: 1.791 },
//   { id: 2, name: 'Banana', price: 0.99, discountedPrice: 0.891 },
//   { id: 3, name: 'Orange', price: 2.49, discountedPrice: 2.241 }
// ]
