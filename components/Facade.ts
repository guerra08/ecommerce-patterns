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
        console.log('Seja bem vindo(a)! Selecione um produto: ');
        this.selectProductsAndUpdateCart();
    }

    private async selectProductsAndUpdateCart() {
        console.log(this.itemRepo.allItemsToString());
        const itemResponse = await inquirer.prompt([
            {
                type: 'number',
                name: 'item',
                message: 'Qual produto você deseja comprar?',
            },
            {
                type: 'number',
                name: 'amnt',
                message: 'Quantas unidades?',
            },
        ]);
        const item = this.itemRepo.retrieveItem(itemResponse.item);
        item.selectItem(itemResponse.amnt);
        const opResponse = await inquirer.prompt({
            type: 'number',
            name: 'op',
            message:
                'O que você deseja fazer? [0] - Adicionar outro produto [1] - Gerenciar carrinho [2] - Continuar',
        });
        if (opResponse.op === 0) this.selectProductsAndUpdateCart();
        if (opResponse.op === 2) return;
    }

    private async manageCart() {}
}
