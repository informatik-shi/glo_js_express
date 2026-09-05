'use strict';

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice;
do {
  screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
} while (Number.isNaN(screenPrice));

const adaptive = prompt('Нужен ли адаптив на сайте?').toLowerCase() === 'да';
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const rollback = 10;

const getAllServicePrices = function () {
  let servicePrice1;
  let servicePrice2;

  do {
    servicePrice1 = Number(prompt(`Сколько будет стоить услуга «${service1}»?`));
  } while (Number.isNaN(servicePrice1));

  do {
    servicePrice2 = Number(prompt(`Сколько будет стоить услуга «${service2}»?`));
  } while (Number.isNaN(servicePrice2));

  return servicePrice1 + servicePrice2;
};

const allServicePrices = getAllServicePrices();
const fullPrice = screenPrice + allServicePrices;
const servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

console.log('Типы экранов:', screens);
console.log('Проект:', title);
console.log('Адаптив:', adaptive);
console.log('Итоговая стоимость:', fullPrice);
console.log('Стоимость за вычетом отката:', servicePercentPrice);
