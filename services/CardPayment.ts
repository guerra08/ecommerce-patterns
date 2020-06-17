import IStrategy from './interfaces/IStrategy';
import * as rlSync from 'readline-sync';

export default class CardPayment implements IStrategy {
    public pay(value: number): boolean {
        rlSync.question('Digite o número do seu cartão: ');
        rlSync.question('Digite o CVV do cartão: ');
        console.log(`Compra de $${value} realizada com sucesso! `);
        return true;
    }
}
