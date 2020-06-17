"use strict";
exports.__esModule = true;
var rlSync = require("readline-sync");
var CardPayment = /** @class */ (function () {
    function CardPayment() {
    }
    CardPayment.prototype.pay = function (value) {
        rlSync.question('Digite o número do seu cartão: ');
        rlSync.question('Digite o CVV do cartão: ');
        console.log("Compra de $" + value + " realizada com sucesso! ");
        return true;
    };
    return CardPayment;
}());
exports["default"] = CardPayment;
