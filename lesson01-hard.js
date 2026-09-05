'use strict';

const num = 266219;
let digitsProduct = 1;

for (const digit of String(num)) {
  digitsProduct *= Number(digit);
}

console.log('Произведение цифр:', digitsProduct);

const poweredResult = digitsProduct ** 3;
console.log('Результат в третьей степени:', poweredResult);
console.log('Первые две цифры:', String(poweredResult).slice(0, 2));
