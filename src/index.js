import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './js/currency-service.js'

function converter(body, )

// $(document).ready(function() {
//   $("#exchange").click(function() {
//     let inputAmount = parseFloat(($("#dollarAmount").val()));
// console.log(inputAmount);
//     let inputCurrency = $("#currencyT").val();
// console.log(inputCurrency);
//     let promise = CurrencyService.getExchange();
// console.log(inputAmount);
// console.log(inputCurrency);
//     promise.then(function(response) {
//       if(response) {
//       const body = JSON.parse(response);
//       $("#showConversion").html(`${body.conversion_result}`);
//       }
//     })
//   })
// })