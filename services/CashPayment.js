"use strict";
exports.__esModule = true;
var rlSync = require("readline-sync");
var CashPayment = /** @class */ (function () {
    function CashPayment() {
    }
    CashPayment.prototype.pay = function (value) {
        var cashVal = rlSync.questionFloat('Digite o valor do pagamento em dinheiro: ');
        if (cashVal < value) {
            console.log('Valor inválido, tente novamente!');
            return false;
        }
        if (cashVal > value) {
            console.log("Compra de $" + value + " realizada com sucesso! Troco de $" + (cashVal - value));
        }
        if (cashVal == value) {
            console.log("Compra de $" + value + " realizada com sucesso!");
        }
        return true;
    };
    return CashPayment;
}());
exports["default"] = CashPayment;
