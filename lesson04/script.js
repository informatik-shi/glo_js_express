'use strict';

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
const adaptive = prompt('Нужен ли адаптив на сайте?').toLowerCase() === 'да';
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = Number(prompt('Сколько это будет стоить?'));
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = Number(prompt('Сколько это будет стоить?'));
const rollback = 10;

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};
const allServicePrices = getAllServicePrices();

function getFullPrice() {
  return screenPrice + allServicePrices;
}
const fullPrice = getFullPrice();

function getTitle() {
  const cleanTitle = title.trim();
  return cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1).toLowerCase();
}

function getServicePercentPrices() {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
}
const servicePercentPrice = getServicePercentPrices();

function showTypeOf(value) {
  console.log(typeof value);
}

function getRollbackMessage(price) {
  if (price > 30000) return 'Даем скидку в 10%';
  if (price > 15000 && price < 30000) return 'Даем скидку в 5%';
  if (price > 0 && price < 15000) return 'Скидка не предусмотрена';
  return 'Что то пошло не так';
}

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log('Типы экранов для разработки:', screens);
console.log('Название проекта:', getTitle());
console.log(getRollbackMessage(fullPrice));
console.log('Стоимость за вычетом процента отката посреднику:', servicePercentPrice);
