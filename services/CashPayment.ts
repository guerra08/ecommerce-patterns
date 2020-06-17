import IStrategy from './interfaces/IStrategy';
import * as rlSync from 'readline-sync';

export default class CashPayment implements IStrategy {
    public pay(value: number): boolean {
        const cashVal = rlSync.questionFloat(
            'Digite o valor do pagamento em dinheiro: '
        );
        if (cashVal < value) {
            console.log('Valor inválido, tente novamente!');
            return false;
        }
        if (cashVal > value) {
            console.log(
                `Compra de $${value} realizada com sucesso! Troco de $${
                    cashVal - value
                }`
            );
        }
        if (cashVal == value) {
            console.log(`Compra de $${value} realizada com sucesso!`);
        }
        return true;
    }
}
