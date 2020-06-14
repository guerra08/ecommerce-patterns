import IStrategy from './interfaces/IStrategy';

export default class CardPayment implements IStrategy {
    public pay(value: number): void {
        console.log(`Pagamento de ${value} realizado!`);
    }
}
