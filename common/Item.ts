export default class Item {
    private name: string;
    private manufacturer: string;
    private value: number;

    constructor(n: string, m: string, val: number) {
        this.name = n;
        this.manufacturer = m;
        this.value = val;
    }

    public setName(n: string) {
        this.name = n;
    }

    public getName(): string {
        return this.name;
    }

    public setManufacturer(m: string) {
        this.manufacturer = m;
    }

    public getManufacturer(): string {
        return this.manufacturer;
    }

    public setValue(n: number) {
        this.value = n;
    }

    public getValue(): number {
        return this.value;
    }
}
