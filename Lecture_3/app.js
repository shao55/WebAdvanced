const _ = require("lodash"); // Библиотека для работы с массивами

const oldArr = [1, [2, 3, [4, 5]]];

const newArr = _.flattenDeep(oldArr); // Метод библиотеки

console.log(newArr);

