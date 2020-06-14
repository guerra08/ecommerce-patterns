import ItemRepository from '../repositories/ItemRepository';
import inquirer from 'inquirer';

export default class Facade {
    private itemRepo = new ItemRepository();

    constructor() {}

    public makePurchase(): void {
        console.log(this.itemRepo.allItemsToString());
        inquirer
            .prompt([
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
            ])
            .then((answ) => {
                console.log(answ);
            });
    }
}

const facade = new Facade();
facade.makePurchase();
