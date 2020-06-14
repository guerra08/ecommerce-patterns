import Item from '../model/Item';

export default class ItemRepository {
    private items: Item[] = new Array();

    constructor() {
        this._initItems();
    }

    private _initItems(): void {
        this.items.push(
            new Item('Galaxy S20', 'Samsung', 999),
            new Item('Windows 10 Key', 'Microsoft', 20),
            new Item('Wireless Mouse', 'Logitech', 40)
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
}
