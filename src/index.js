import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-service.js'

$(document).ready(function() {
  $("#exchange").click(function() {
    let inputAmount = parseFloat(($("#usd").val()));
    let inputCurrency = $("#currencyT").val();
    let promise = CurrencyService.getExchange(inputAmount, inputCurrency);
    promise.then(function(response) {
      if(response) {
      const body = JSON.parse(response);
      $("#showConversion").html(`${body.conversion_result}`);
      }
    })
  })
})