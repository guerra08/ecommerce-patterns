"use strict";
exports.__esModule = true;
var ItemRepository_1 = require("../repositories/ItemRepository");
var Cart_1 = require("../model/Cart");
var rlSync = require("readline-sync");
var PaymentFactory_1 = require("./PaymentFactory");
var Facade = /** @class */ (function () {
    function Facade() {
        this.itemRepo = new ItemRepository_1["default"]();
        this.cart = Cart_1["default"].getInstance();
        this.pFactory = new PaymentFactory_1["default"]();
        this.itemRepo.attachCart(this.cart);
    }
    Facade.prototype.startShoppingProcess = function () {
        console.log('\nSeja bem vindo(a)!');
        this.mainLoop();
    };
    Facade.prototype.mainLoop = function () {
        var flag = false;
        while (!flag) {
            flag = this.opManager();
        }
    };
    Facade.prototype.manageCart = function () {
        console.log('Seu carrinho: \n');
        console.log(this.cart.cartToString());
    };
    Facade.prototype.addItemToCart = function () {
        console.log(this.itemRepo.allItemsToString());
        var index = rlSync.questionInt('Selecione o produto: ');
        var amnt = rlSync.questionInt('Quantas unidades? ');
        this.itemRepo.retrieveItem(index).selectItem(amnt);
    };
    Facade.prototype.opManager = function () {
        var operations = [
            'Adicionar produto ao carrinho',
            'Gerenciar carrinho',
            'Finalizar compra',
        ];
        var i = rlSync.keyInSelect(operations, 'O que você deseja fazer? ');
        if (i === -1)
            return true;
        if (i === 0)
            this.addItemToCart();
        if (i === 1)
            this.manageCart();
        if (i === 2)
            this.endOrder();
        return false;
    };
    Facade.prototype.endOrder = function () {
        var _a;
        if (this.cart.isCartEmpty()) {
            return console.log('Seu carrinho está vazio!');
        }
        console.log('Seu pedido: \n');
        console.log(this.cart.cartToString());
        var method = ['Cartão', 'Dinheiro'];
        var i = rlSync.keyInSelect(method, 'Como você deseja pagar? ');
        var response = (_a = this.pFactory
            .getPaymentMethod(method[i])) === null || _a === void 0 ? void 0 : _a.pay(this.cart.getTotalValue());
        if (!response)
            this.endOrder();
        this.cart.cleanCart();
        return false;
    };
    return Facade;
}());
exports["default"] = Facade;
