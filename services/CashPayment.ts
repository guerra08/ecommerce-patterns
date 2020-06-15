import IStrategy from './interfaces/IStrategy';
import inquirer from 'inquirer';

export default class CashPayment implements IStrategy {
    public async pay(value: number) {
        const cardResponse = await inquirer.prompt([
            {
                type: 'number',
                name: 'cash',
                message: 'Digite a quantidade a ser paga em dinheiro:',
            },
        ]);
        if (cardResponse.cash < value) console.log('Valor inválido!');
        if (cardResponse.cash == value)
            console.log(`Compra no valor de ${value} realizada com sucesso!`);
        if (cardResponse.cash > value)
            console.log(
                `Compra realizada com sucesso, troco de ${
                    cardResponse.cash - value
                }`
            );
    }
}
