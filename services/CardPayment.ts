import IStrategy from "./interfaces/IStrategy";
import prompts, { PromptObject } from "prompts";

const questions: PromptObject<string>[] = [
    {
        type: "number",
        name: "card",
        message: "Digite o número do seu cartão:",
    },
    {
        type: "number",
        name: "code",
        message: "Digite o código do seu cartão:",
    },
];

export default class CardPayment implements IStrategy {
    public pay(value: number): void {
        (async () => {
            const response = await prompts(questions);
        })();
        console.log(`Pagamento de ${value} realizado!`);
    }
}
