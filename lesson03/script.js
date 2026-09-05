'use strict';

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
const adaptive = prompt('Нужен ли адаптив на сайте?').toLowerCase() === 'да';
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = Number(prompt('Сколько это будет стоить?'));
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = Number(prompt('Сколько это будет стоить?'));

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollback = 10;
const servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

console.log('Название проекта:', title);
console.log('Типы экранов:', screens);
console.log('Адаптив:', adaptive);
console.log('Дополнительные услуги:', service1, service2);
console.log('Итоговая стоимость после отката:', servicePercentPrice);

if (fullPrice > 30000) console.log('Даем скидку в 10%');
else if (fullPrice > 15000 && fullPrice < 30000) console.log('Даем скидку в 5%');
else if (fullPrice > 0 && fullPrice < 15000) console.log('Скидка не предусмотрена');
else if (fullPrice < 0) console.log('Что то пошло не так');
