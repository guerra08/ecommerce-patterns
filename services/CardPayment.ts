import IStrategy from './interfaces/IStrategy';
import inquirer from 'inquirer';

export default class CardPayment implements IStrategy {
    public async pay(value: number) {
        const cardResponse = await inquirer.prompt([
            {
                type: 'string',
                name: 'card',
                message: 'Digite o número do seu cartão (xxxx.xxxx.xxxx.xxxx):',
            },
            {
                type: 'number',
                name: 'code',
                message: 'Digite o código de verificação:',
            },
        ]);
        console.log(
            `Pagamento de ${value} realizado com cartão finalizado em ${cardResponse.card.substring(
                cardResponse.card.length - 4
            )}!`
        );
    }
}
