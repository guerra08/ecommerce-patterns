import ISubject from "./ISubject";

export default interface IObserver {
    update(subject: ISubject, amnt: number): void;
}
