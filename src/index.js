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
    if(isNaN(inputAmount) === true) {
      $("#showErrors").text("Please enter a valid number.");
    }
    else if(inputCurrency !== "FJD" && inputCurrency !== "DKK" && inputCurrency !== "EUR" && inputCurrency !== "JPY" && inputCurrency !== "SAR") {
      $("#showErrors").text("Currency not supported/currency doesn't exist. Please enter a valid currency.");
    }
    else {
      let promise = CurrencyService.getExchange(inputCurrency, inputAmount);
      promise.then(function(response) {

        let body = JSON.parse(response);
        $("#showConversion").show();
        $("#currencyAmount").text(`${body.conversion_result.toFixed(2)}`);  
      },function(error) {
        $("#showErrors").text(`There was an error processing your request: ${error}`);
      });
    }
  });
});