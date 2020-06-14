import ISubject from "./interfaces/ISubject";
import IObserver from "./interfaces/IObserver";

export default class Item implements ISubject {
    public name: string;
    public manufacturer: string;
    public value: number;
    private observers: IObserver[] = [];

    constructor(n: string, m: string, val: number) {
        this.name = n;
        this.manufacturer = m;
        this.value = val;
    }

    public attach(observer: IObserver): void {
        if (this.observers.includes(observer)) {
            return console.log("Already attatched");
        }
        this.observers.push(observer);
        console.log("Subject attatched");
    }

    public detach(observer: IObserver): void {
        const index = this.observers.indexOf(observer);
        if (index === -1) {
            return console.log("Subject not attached.");
        }
        this.observers.splice(index);
        console.log("Subject detached");
    }

    public notify(amnt: number): void {
        for (const o of this.observers) {
            o.update(this, amnt);
        }
    }

    public selectItem(amnt: number): void {
        this.notify(amnt);
    }
}