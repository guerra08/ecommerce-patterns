"use strict";
exports.__esModule = true;
var Item_1 = require("../model/Item");
var ItemRepository = /** @class */ (function () {
    function ItemRepository() {
        this.items = new Array();
        this._initItems();
    }
    ItemRepository.prototype._initItems = function () {
        this.items.push(new Item_1["default"]('Galaxy S20', 'Samsung', 999), new Item_1["default"]('Windows 10 Key', 'Microsoft', 20), new Item_1["default"]('Wireless Mouse', 'Logitech', 40));
    };
    ItemRepository.prototype.retrieveItem = function (itemPos) {
        return this.items[itemPos];
    };
    ItemRepository.prototype.allItemsToString = function () {
        var pos = 0;
        var itemsString = '';
        this.items.forEach(function (e) {
            itemsString += "[" + pos + "]: " + e.getManufacturer() + " - " + e.getName() + " - " + e.getValue() + "\n";
            pos++;
        });
        return itemsString;
    };
    ItemRepository.prototype.attachCart = function (cart) {
        this.items.forEach(function (e) { return e.attach(cart); });
    };
    return ItemRepository;
}());
exports["default"] = ItemRepository;
