"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(n, m, val) {
        this.observers = [];
        this.name = n;
        this.manufacturer = m;
        this.value = val;
    }
    Item.prototype.attach = function (observer) {
        if (this.observers.includes(observer)) {
            return console.log('Already attatched');
        }
        this.observers.push(observer);
        console.log('Observer attatched');
    };
    Item.prototype.detach = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index === -1) {
            return console.log('Observer not attached.');
        }
        this.observers.splice(index);
        console.log('Observer detached');
    };
    Item.prototype.notify = function (amnt) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.update(this, amnt);
        }
    };
    Item.prototype.selectItem = function (amnt) {
        this.notify(amnt);
    };
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.getManufacturer = function () {
        return this.manufacturer;
    };
    Item.prototype.getValue = function () {
        return this.value;
    };
    return Item;
}());
exports["default"] = Item;
