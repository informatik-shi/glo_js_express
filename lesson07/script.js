'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: false,
  service1: '',
  service2: '',
  servicePrice1: 0,
  servicePrice2: 0,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,

  asking() {
    this.title = prompt('Как называется ваш проект?') || '';
    this.screens = prompt('Какие типы экранов нужно разработать?') || '';
    this.screenPrice = Number(prompt('Сколько будет стоить данная работа?')) || 0;
    this.adaptive = (prompt('Нужен ли адаптив на сайте?') || '').toLowerCase() === 'да';
    this.service1 = prompt('Какой дополнительный тип услуги нужен?') || '';
    this.servicePrice1 = Number(prompt('Сколько это будет стоить?')) || 0;
    this.service2 = prompt('Какой дополнительный тип услуги нужен?') || '';
    this.servicePrice2 = Number(prompt('Сколько это будет стоить?')) || 0;
  },

  getAllServicePrices() {
    return this.servicePrice1 + this.servicePrice2;
  },

  getFullPrice() {
    return this.screenPrice + this.allServicePrices;
  },

  getTitle() {
    const cleanTitle = (this.title || '').trim();
    return cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1).toLowerCase();
  },

  getServicePercentPrices() {
    return Math.ceil(this.fullPrice - this.fullPrice * (this.rollback / 100));
  },

  logger() {
    for (const property in this) {
      console.log(`${property}:`, this[property]);
    }
  },

  start() {
    this.asking();
    this.allServicePrices = this.getAllServicePrices();
    this.fullPrice = this.getFullPrice();
    this.title = this.getTitle();
    this.servicePercentPrice = this.getServicePercentPrices();
    this.logger();
  },
};

appData.start();
