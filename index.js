'use strict';

// Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут.

// let inputs = document.querySelectorAll('.input'),
//     resultButton = document.querySelector('.button'),
//     result = document.querySelector('.result-input');
//
// resultButton.addEventListener('click', () => {
//     let sum = 0;
//
//     for(let i = 0; i < inputs.length; i++) {
//         sum += +inputs[i].value;
//     }
//
//     result.value = sum;
// });

// Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result".

//     let inputs = document.querySelectorAll('.num'),
//     btn = document.querySelector('.btn'),
//     text = document.getElementById('result');
//
// btn.addEventListener('click', () => {
//     let sum = 0;
//
//     for(let i = 0; i < inputs.length; i++) {
//         sum += +inputs[i].value;
//     }
//
//     text.textContent = String(sum);
// });

// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

// let input = document.querySelector('.input');
//
// input.addEventListener('mouseout', () => {
//     let numbers = input.value;
//
//     let newNumbers = numbers.split('');
//
//     let sum = 0;
//
//     for(let i = 0; i < newNumbers.length; i++) {
//        sum+= +newNumbers[i];
//     }
//
//     input.value = sum;
// });

// let month = 12;
//
// if(month >= 1 && month < 3 || month === 12) {
//     alert('winter');
// }
// if(month >= 3 && month < 6) {
//     alert('spring');
// }
// if(month >= 6 && month < 9) {
//     alert('summer');
// }
// if(month >= 9 && month < 11) {
//     alert('autumn');
// }

// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 0, 4];
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i])
//     }
// }

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let arr = [2, -5, 9, -15, 0, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//        sum += arr[i];
//    }
// }
// console.log(sum);

// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением,
//     равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr = [1, 2, 5, 4, 9, 13, 6, 10];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === 4) {
//         alert('Есть!')
//         break
//     }
// }

 // let arr = String([10, 20, 30, 50, 235, 3000]);
 // for(let i = 0; i < arr.length; i++) {
 //     if(arr[i] === '1' || arr[i] ===  '2' || arr[i] ===  '5') {
 //         console.log(arr[i]);
 //     }
 // }

//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = ''
// for(let i = 0; i < arr.length; i++) {
//     result += String('-' + arr[i]);
// }
// console.log(result);

// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
// let arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// for(let i = 0; i < arr.length; i++) {
//     if(i < 5) document.write(arr[i] + ' '); else document.write(arr[i].bold() + ' ');
// }
//

// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом.
// Текущий день должен храниться в переменной day.
// let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//
// let current = 1;
//
// for (let i = 0; i < week.length; i++) {
//     if (i === current) document.write(week[i].italics() + ' '); else document.write(week[i] + ' ');
// }
//

// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?
// Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// let n  = 1000;
// let num = 0;
//
// while (n > 50) {
//     n = n / 2;
//     num++
// }
// console.log(num);

// Возведите 2 в 10 степень. Результат запишите в переменную st.
// let st = Math.pow(2,10);
// alert(st);

// Найдите квадратный корень из 245.
// let a = Math.sqrt(245);
// alert(a);

// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
//
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 3);
//     Math.sqrt(sum);
// }
//
// console.log(sum);

// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
//
// let res = Math.sqrt(379);
// alert(Math.round(res));
// alert(res.toFixed(2));
// alert(res.toFixed(1));

// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// let res = Math.sqrt(587);
// let floor = Math.floor(res);
// let ceil = Math.ceil(res);
//
// let obj = {
//    'floor': floor,
//    'ceil':  ceil
// }
//
// console.log(obj);

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// Выведите на экран случайное целое число от 1 до 100.
// console.log(Math.round(Math.random() * 100));

// Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while). Показать решение.
// let arr = [];
// for(let i = 0; i < 10; i++) {
//     arr[i] = Math.round(Math.random() * 100);
// }
// console.log(arr);

// Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
// let a = 5;
// let b = 2;
// let c = a - b;
// alert(Math.abs(c));

// Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
//     Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
//     Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
// let a = 3;
// let b = 5;
// let c = Math.abs(a - b);
// alert(c);

// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
// let arr = [12, 15, 20, 25, 59, 79];
// let sum = 0;
// let res;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     res = sum / arr.length;
// }
// console.log(res);

// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
// let js = 'я учу java script';
// console.log(js.slice(1, 5));
// console.log(js.substring(2, 5));
// console.log(js.substr(2, 4));

// Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
// let js = 'я учу java script';
// alert(js.indexOf('учу'));

// Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу:
// если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов
// строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.

// let str = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
// let n = 20;
// if(str.length < n) document.write(str); else document.write(str.slice(0, n) + '...');

// Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
// let str =  'Я-учу-javascript!';
// alert(str.replace(/-/g, '!'));

// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
//
// let str =  'Я учу javascript!';
//
// let arr = str.split(' ');
// console.log(arr);

// Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
// let str =  'Я учу javascript!';
// let arr = str.split('');
// let newArr = [];
//
// for(let i = 0; i < arr.length; i++) {
//     newArr = arr[i].split(' ');
// }
// console.log(arr);

// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
// let date = '2025-12-31';
// let newDate = date.replace(/-/g, ':');
// alert(newDate);

// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
// let arr = ['я', 'учу', 'javascript', '!'];
// alert(arr.join('+'));

// Преобразуйте первую букву строки в верхний регистр.
// let str = 'rioba';
// alert(str.replace(/r/, 'R'));

// Преобразуйте первую букву каждого слова строки в верхний регистр.
// let solution = (text) => {
//     let str = '';
//     for (let i = 0; i <= text.length - 1; i += 1 ) {
//         if (text[i - 1] == 0 || text[i - 1] === undefined) {
//             str += text[i].toUpperCase();
//         } else str += text[i];
//     }
//     return str;
// };
// console.log(solution('aм vcs gvc'));

// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = a.concat(b);
// console.log(c);

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// let a = [1, 2, 3];
// console.log(a.reverse());

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let a = [1, 2, 3];
// a.push(4, 5, 6);
// console.log(a);

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let a = [1, 2, 3];
// a.unshift(4, 5, 6);
// console.log(a);

// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = ['js', 'css', 'jq'];
// console.log(arr.shift());

// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let arr = ['js', 'css', 'jq'];
// console.log(arr.pop());

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let a = [1, 2, 3, 4, 5];
// let b = a.slice(0, 3);
// console.log(b);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let a = [1, 2, 3, 4, 5];
// let b = a.slice(3, 5);
// console.log(b);

// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let a =  [3, 4, 1, 2, 7];
// console.log(a.sort());

// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// let obj = {
//     js:'test',
//     jq: 'hello',
//     css: 'world'
// }
// console.log(Object.keys(obj));

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.splice(1, 3);
// console.log(newArr);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b', );
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);

// Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.
// let str = 'hello kitty cat';
// str = str[0].toUpperCase() + str.substr(1);
// alert(str);

// let str = 'hello kitty cat';
// str = str.split('');
// str[0] = str[0].toUpperCase();
// let result = str.join('');
// alert(result);

// Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.
// let str = '123456';
// let result = str.split('').reverse().join('');
// alert(result);

// Проверьте, что строка начинается на http://
// let str = 'http://Local';
// if (str.substr(0, 7) === 'http://') {
//     alert('Да');
// } else {
//     alert('Нет');
// }

// Проверьте, что строка заканчивается на .html.
// let str = 'Something';
// if(str.substr(-5) === '.html') {
//     alert('Да');
// } else {
//     alert('Нет')
// }

// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// function square(num) {
//    return num * num
// }
// console.log(square(5));


// Сделайте функцию, которая возвращает сумму двух чисел.

// function square(num, num2) {
//    return num + num2
//  }
// console.log(square(5, 6));


// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// function square(num, num2, num3) {
//     return (num - num2) / num3
// }
// console.log(square(10, 6, 2));


// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
//
// function randomNum(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
//
// let day = randomNum(0, 6);
//
// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//
// function returnDay(day) {
//
//     for (let i = 0; i < arr.length; i++) {
//         if (i === day) {
//             return arr[i];
//         }
//     }
// }
//
// console.log(returnDay(day));

// Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
// let arr = [1, 2, 3, 4, 5, 6];
// let flag = false;
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === 5) {
//        flag = true;
//        break
//     }
// }
// if(flag) {
//     alert('Yes')
// } else {
//     alert('No')
// }

// Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы.
// То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false',
// а если делится - выведите 'true'.

// let num = 31;
// let flag = false;
//
// for(let i = 0; i < num; i++) {
//     if (num % i === 0) {
//         flag = true;
//         break;
//     }
// }
//
// if (flag) console.log(true); else console.log('false');

// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
// let arr  = [1, 26, 34, 34, 56, 67];
// let flag = false;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1]) {
//         flag = true;
//         break;
//     }
// }
// if (flag) console.log('Yes'); else console.log ('No');

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
// function returnBoolean (a, b) {
//     return a === b;
// }
// console.log(returnBoolean(5, 5));

// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
// function returnBoolean (a, b) {
//     return a + b > 10;
// }
// console.log(returnBoolean(5, 89));

// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
// Если отрицательное - пусть функция вернет true, а если нет - false.
// function checkFunc(a) {
//     return a < 0
// }
// console.log(checkFunc(-2));

// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
// let str = '';
// for (let i = 1; i <=9; i++) {
//     str = str + i;
// }
// console.log(str);

// С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
// let str = '';
// for (let i = 9; i > 0; i--) {
//     str = str + i;
// }
// console.log(str);

// С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
// let str = '';
// for (let i = 1; i < 10; i++) {
//     str = str + i + '-';
// }
// console.log(str);

// Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5
// let str = '';
// for (let i = 0; i < 20; i++) {
//     str = str + 'x';
//     document.write(str + '<br>');
// }

// С помощью двух вложенных циклов нарисуйте следующую пирамидку
// let str = '';
// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(i);
//     }
//     document.write('<br>');
// }

// Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for

// let str = '';
// for(let i = 0; i <= 5; i++) {
//      str += 'xx';
//      document.write(str + '<br>');
//  }

// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// let arr = [];
// let str = 'x';
// for(let i = 0; i < 8; i++) {
//     arr.push(str);
//     str = str + 'x';
// }
// console.log(arr);

// Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
// let arr = [];
//  for(let i = 1; i < 10; i++) {
//      for (let j = 1; j <= i; j++)
//      arr.push(i);
//  }
// console.log(arr);

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве.
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
//
// let arr = [];
//
// function arrayFill(elem, count) {
//     for (let i = 0; i <= count; i++) {
//         arr.push(elem);
//     }
// }
//
// arrayFill('dog', 16);
//
// console.log(arr);

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// let arr = [2, 5, 7, 6, 7];
//
// function countElements(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (sum > 10) {
//             return i + 1;
//         }
//     }
// }
// console.log(countElements(arr));

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
// }
// document.write(newArr);

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
// alert(sum);

// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
//
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for( let k = 0; k < arr[j].length; k++) {
//             sum += arr[i][j][k];
//         }
//     }
// }
// alert(sum);
//
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
// Если это так - пусть функция возвращает true, если не так - false.

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
// Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// let arr = [9, 16, 5, 8, -9, 7, -4, 0];
// let newArr = [];
//
// function pushNumbers() {
//     for (let i = 0; i < arr.length; i++) {
//         if(isNumberInRange(arr[i])) {
//           newArr.push(arr[i]);
//         }
//     }
// }
//
// function isNumberInRange(num) {
//     return num > 0 && num < 10;
//
// }
// // alert(isNumberInRange(10));
//
// pushNumbers();
// console.log(newArr);

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// function getDigitsSum(arr) {
//     let sum = 0;
//
//     for(let i = 0; i < arr.length; i++) {
//         sum += Number(arr[i]);
//     }
//
//     return sum;
// }

// function convertNumberToArray(num) {
//     let str = String(num);
//     return str.split('');
// }

// console.log(getDigitsSum(convertNumberToArray(659)));

// Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// function getDigitsSum(num) {
//     num = String(num);
//     let sum = 0;
//
//     for(let i = 0; i < num.length; i++) {
//         sum += Number(num[i]);
//     }
//
//     return sum;
// }
//
// for(let i = 1; i <= 2020; i++) {
//     if(getDigitsSum(i) === 13) {
//         console.log(i);
//     }
// }

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет.
// Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(num) {
//    if(num % 2 === 0) {
//        return true
//    }
// }
// console.log(isEven(57));

// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// let arr = [5, 4, 60, 67, 78];
// let newArr = [];
//
// function isEven(num) {
//     if(num % 2 === 0) {
//         return true
//     }
// }
//
// for(let i = 0; i < arr.length; i++) {
//     if(isEven(arr[i])) {
//         newArr.push((arr[i]))
//     }
// }
// console.log(newArr);

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// function getDivisors(num) {
//     (if num )
// }
// let arr = [];
//
// function getDivisors(num) {
//     for (let i = 0; i <= num; i++) {
//         if(num % i === 0) {
//             arr.push(i);
//         }
//     }
//
//     return arr;
// }
// console.log(getDivisors(10));

// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst,
// которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// let str = 'today is thursday';
// function ucfirst(str) {
//    return str[0].toUpperCase() + str.substr(1);
// }
// alert(ucfirst(str));

// !!! Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
// let animals = ['cat', 'dog', 'mouse'];
//
// function inArray(text, arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if (text === arr[i]) {
//             return true
//         }
//     }
// }
//
// alert(inArray('cat', animals));

// Дана строка, например, '123456'. Сделайте из нее '214365'.
// let str = '123456';
// function newStr(line) {
//     let arr = line.split('');
//     let newArr = [];
//     let newStr = '';
//
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[1], arr[0], arr[3], arr[2], arr[4], arr[5]);
//         newStr = newArr.join('');
//         return newStr;
//     }
// }
// console.log(newStr(str));

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры.
// И так, пока сумма не станет однозначным числом (9 и менее).

// function func(num) {
//     let sum = 0;
//     let arr = String(num).split('');
//     for (let i = 0; i < arr.length; i++) {
//         sum += Number(arr[i]);
//     }
//
//     if (sum > 9) {
//         return func(sum);
//     } else {
//         return sum;
//     }
// }
//
// let num = 1591;
// let finalNum = func(num);
// console.log(finalNum);

