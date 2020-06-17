"use strict";
exports.__esModule = true;
var Item_1 = require("./Item");
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = new Map();
    }
    Cart.getInstance = function () {
        if (!Cart.instance) {
            Cart.instance = new Cart();
        }
        return Cart.instance;
    };
    Cart.prototype.update = function (subject, amnt) {
        if (subject != null && subject instanceof Item_1["default"]) {
            if (this.items.has(subject))
                this.items.set(subject, this.items.get(subject) + amnt);
            else
                this.items.set(subject, amnt);
            console.log('Cart has been updated.');
        }
    };
    Cart.prototype.cartToString = function () {
        var text = '';
        var pos = 0;
        var totalVal = 0;
        this.items.forEach(function (v, k) {
            text += "[" + pos + "]: " + k.getManufacturer() + " - " + k.getName() + " - $" + k.getValue() + " - Qtd: " + v + " - Total: $" + k.getValue() * v + "\n";
            pos++;
            totalVal += k.getValue() * v;
        });
        text += "Total: $" + totalVal;
        return text;
    };
    Cart.prototype.getTotalValue = function () {
        var total = 0;
        this.items.forEach(function (v, k) {
            total += k.getValue() * v;
        });
        return total;
    };
    Cart.prototype.isCartEmpty = function () {
        return this.items.size === 0;
    };
    Cart.prototype.cleanCart = function () {
        this.items = new Map();
    };
    return Cart;
}());
exports["default"] = Cart;
