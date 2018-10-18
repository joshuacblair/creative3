var app=angular.module('myApp', ['ngAnimate']);
app.controller('myCtrl', function Invoice() {
  this.qty = 1;
  this.cost = 0;
  this.inCurr = 'USD';
  this.currencies = ['USD', 'EUR', 'GBP', 'INR', 'MXN', 'JPY', 'CAD', 'CNY'];
  this.rates = {
    USD : 1,
    EUR : 0.87,
    GBP : 0.76,
    INR : 73.58,
    MXN : 18.88,
    JPY : 112.64,
    CAD : 1.30,
    CNY : 6.93
  };

  this.total = function total(outCurr) {
    return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
  };
  this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
    return amount * this.rates[outCurr] / this.rates[inCurr];
  };
});
