import IObserver from "./IObserver";

export default interface ISubject {
    attach(observer: IObserver): void;

    detach(observer: IObserver): void;

    notify(amnt: number): void;
}
