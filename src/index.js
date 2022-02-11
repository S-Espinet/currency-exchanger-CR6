import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-service.js'

$(document).ready(function() {
  $("#exchange").click(function() {
    let inputAmount = $("#usd").val();
    let inputCurrency = $("#currencyT").val();
    let promise = CurrencyService.getExchange(inputCurrency, inputAmount);
    promise.then(function(response) {
      let body = JSON.parse(response);
      $("#showConversion").text(`${body.conversion_result}`);
    })
  })
})