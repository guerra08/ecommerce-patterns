"use strict";
exports.__esModule = true;
var CardPayment_1 = require("../services/CardPayment");
var CashPayment_1 = require("../services/CashPayment");
var PaymentFactory = /** @class */ (function () {
    function PaymentFactory() {
    }
    PaymentFactory.prototype.getPaymentMethod = function (type) {
        if (type === 'Cartão')
            return new CardPayment_1["default"]();
        if (type === 'Dinheiro')
            return new CashPayment_1["default"]();
        return null;
    };
    return PaymentFactory;
}());
exports["default"] = PaymentFactory;
