import SingletonCart from "./SingletonCart";
import Item from "../common/Item";

class Customer {
    private cart: SingletonCart;
    private name: string;

    constructor(name: string) {
        this.cart = SingletonCart.getInstance();
        this.name = name;
    }

    public getCart(): SingletonCart {
        return this.cart;
    }
}

const customer = new Customer("Bruno Guerra");
const headphone = new Item("Headphone", "Sony", 350);
const cpu = new Item("Ryzen 3800x", "AMD", 800);

customer.getCart().addItem(headphone, 2);
customer.getCart().addItem(cpu, 1);

console.log(customer.getCart().cartToString());
console.log(customer.getCart().totalPriceString());
