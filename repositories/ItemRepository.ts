import Item from '../model/Item';
import Cart from '../model/Cart';

export default class ItemRepository {
    private items: Item[] = new Array();

    constructor() {
        this._initItems();
    }

    private _initItems(): void {
        this.items.push(
            new Item('Router', 'TP-Link', 80),
            new Item('Windows 10 Key', 'Microsoft', 20),
            new Item('Wireless Mouse', 'Logitech', 40),
            new Item('E-book Java', 'Editora X', 15),
            new Item('SSD', 'Samsung', 100)
        );
    }

    public retrieveItem(itemPos: number) {
        return this.items[itemPos];
    }

    public allItemsToString(): string {
        let pos = 0;
        let itemsString = '';
        this.items.forEach((e) => {
            itemsString += `[${pos}]: ${e.getManufacturer()} - ${e.getName()} - ${e.getValue()}\n`;
            pos++;
        });
        return itemsString;
    }

    public attachCart(cart: Cart): void {
        this.items.forEach((e) => e.attach(cart));
    }
}
