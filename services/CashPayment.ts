import IStrategy from './interfaces/IStrategy';

export default class CashPayment implements IStrategy {
    public async pay(value: number) {}
}
