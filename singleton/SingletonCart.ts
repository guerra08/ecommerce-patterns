import Item from "../common/Item";

export default class SingletonCart {
    private static instance: SingletonCart;

    private items: Map<Item, number>;

    //Populate with items from database / cookies / local storage...
    private constructor() {
        this.items = new Map();
    }

    public static getInstance(): SingletonCart {
        if (!SingletonCart.instance) {
            SingletonCart.instance = new SingletonCart();
        }
        return SingletonCart.instance;
    }

    public addItem(i: Item, amn: number): void {
        this.items.set(i, amn);
    }

    public getTotalCost(): number {
        let total = 0.0;
        this.items.forEach((v, k) => {
            total += k.getValue() * v;
        });
        return total;
    }

    public cartToString(): string {
        let result = "";
        this.items.forEach((v, k) => {
            result += `${k.getName()}, ${v}un`;
        });
        return result;
    }
}
