import ItemRepository from '../repositories/ItemRepository';
import inquirer from 'inquirer';

export default class Facade {
    private itemRepo = new ItemRepository();

    constructor() {}

    public async makePurchase() {
        console.log(this.itemRepo.allItemsToString());
        const response = await inquirer.prompt([
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
        const item = this.itemRepo.retrieveItem(response.item);
        item.selectItem(response.amnt);
    }
}

const facade = new Facade();
facade.makePurchase();
