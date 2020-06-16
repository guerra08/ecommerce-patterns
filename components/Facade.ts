import ItemRepository from '../repositories/ItemRepository';
import Cart from '../model/Cart';
import * as rlSync from 'readline-sync';

export default class Facade {
    private itemRepo = new ItemRepository();
    private cart = Cart.getInstance();

    constructor() {
        this.itemRepo.attachCart(this.cart);
    }

    public startShoppingProcess() {
        console.log('\nSeja bem vindo(a)!');
        this.mainLoop();
    }

    private mainLoop() {
        this.opManager();
    }

    private manageCart() {
        console.log('Seu carrinho:\n');
        console.log(this.cart.cartToString());
    }

    private opManager() {
        const operations = [
            'Adicionar produto ao carrinho',
            'Gerenciar carrinho',
            'Finalizar compra',
        ];
        const index = rlSync.keyInSelect(
            operations,
            'O que você deseja fazer?'
        );
    }
}
