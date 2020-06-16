import Item from './Item';
import IObserver from './interfaces/IObserver';
import ISubject from './interfaces/ISubject';

export default class Cart implements IObserver {
    private static instance: Cart;

    private items: Map<Item, number> = new Map();

    private constructor() {}

    public static getInstance(): Cart {
        if (!Cart.instance) {
            Cart.instance = new Cart();
        }
        return Cart.instance;
    }

    public update(subject: ISubject, amnt: number): void {
        if (subject != null && subject instanceof Item) {
            if (this.items.has(subject))
                this.items.set(subject, this.items.get(subject)! + amnt);
            else this.items.set(subject, amnt);
            console.log('Cart has been updated.');
        }
    }

    public cartToString(): string {
        let text = '';
        let pos = 0;
        this.items.forEach((v, k) => {
            text += `[${pos}]: ${k.getManufacturer()} - ${k.getName()} - ${k.getValue()} - Qtd: ${v}\n`;
            pos++;
        });
        return text;
    }
}
