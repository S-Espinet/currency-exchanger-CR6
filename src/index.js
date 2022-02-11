import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyService } from './js/currency-service.js';

// function converter(body, )

$(document).ready(function() {
  $("#exchange").click(function() {
    let inputAmount = parseFloat(($("#dollarAmount").val()));
    let inputCurrency = $("#currencyT").val();
    let promise = CurrencyService.getExchange(inputCurrency, inputAmount);
    promise.then(function(response) {
      let body = JSON.parse(response);
      $("#currencyAmount").text(`${body.conversion_result.toFixed(2)}`);
    },function(error) {
      $("#showErrors").text(`There was an error processing your request: ${error}`);
    });
  });
});