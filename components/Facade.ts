import ItemRepository from '../repositories/ItemRepository';
import inquirer from 'inquirer';
import Cart from '../model/Cart';

export default class Facade {
    private itemRepo = new ItemRepository();
    private cart = Cart.getInstance();

    constructor() {
        this.itemRepo.attachCart(this.cart);
    }

    public async startShoppingProcess() {
        console.log('\nSeja bem vindo(a)!');
        this.mainLoop();
    }

    private async mainLoop() {
        return;
    }

    private manageCart(): void {
        console.log('Seu carrinho:\n');
        console.log(this.cart.cartToString());
    }
}
