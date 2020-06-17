import ItemRepository from '../repositories/ItemRepository';
import Cart from '../model/Cart';
import * as rlSync from 'readline-sync';
import PaymentFactory from './PaymentFactory';

export default class Facade {
    private itemRepo = new ItemRepository();
    private cart = Cart.getInstance();
    private pFactory = new PaymentFactory();

    constructor() {
        this.itemRepo.attachCart(this.cart);
    }

    public startShoppingProcess() {
        console.log('\nSeja bem vindo(a)!');
        this.mainLoop();
    }

    private mainLoop() {
        let flag = false;
        while (!flag) {
            flag = this.opManager();
        }
    }

    private manageCart() {
        console.log('Seu carrinho: \n');
        console.log(this.cart.cartToString());
    }

    private addItemToCart() {
        console.log(this.itemRepo.allItemsToString());
        const index = rlSync.questionInt('Selecione o produto: ');
        const amnt = rlSync.questionInt('Quantas unidades? ');
        this.itemRepo.retrieveItem(index).selectItem(amnt);
    }

    private opManager(): boolean {
        const operations = [
            'Adicionar produto ao carrinho',
            'Gerenciar carrinho',
            'Finalizar compra',
        ];
        const i = rlSync.keyInSelect(operations, 'O que você deseja fazer? ');
        if (i === -1) return true;
        if (i === 0) this.addItemToCart();
        if (i === 1) this.manageCart();
        if (i === 2) this.endOrder();
        return false;
    }

    private endOrder() {
        if (this.cart.isCartEmpty()) {
            return console.log('Seu carrinho está vazio!');
        }
        console.log('Seu pedido: \n');
        console.log(this.cart.cartToString());
        const method = ['Cartão', 'Dinheiro'];
        const i = rlSync.keyInSelect(method, 'Como você deseja pagar? ');
        const response = this.pFactory
            .getPaymentMethod(method[i])
            ?.pay(this.cart.getTotalValue());
        if (!response) this.endOrder();
        this.cart.cleanCart();
        return false;
    }
}
