import IStrategy from '../services/interfaces/IStrategy';
import CardPayment from '../services/CardPayment';
import CashPayment from '../services/CashPayment';

export default class PaymentFactory {
    public getPaymentMethod(type: string): IStrategy | null {
        if (type === 'Cartão') return new CardPayment();
        if (type === 'Dinheiro') return new CashPayment();
        return null;
    }
}
