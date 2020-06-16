import IStrategy from './interfaces/IStrategy';

export default class CardPayment implements IStrategy {
    public async pay(value: number) {}
}
