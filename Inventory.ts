class inventory{
    productName: string;
    quantity: number;

    constructor(productName: string, quantity: number){
        this.productName = productName;
        this.quantity = quantity;
    }

    purchase(order: number): void{
        if(this.quantity >= order){
            this.quantity -= order;
            console.log(`Order of ${order} ${this.productName} Placed Successfully!!`)
            if(this.quantity < 5){
                this.reOrder();
            }
        }else{
            console.log(`Not Enough Stocks!! Only ${this.quantity} left.`);
        }
    }

    reOrder(): void{
        console.log(`Reorder request raised for ${this.productName}. Quantity is less than 5.`)
    }

}

const Mobile = new inventory('Samsung S24', 10);
const Tablet = new inventory('Samsung tab 9', 20)
Mobile.purchase(6);
Mobile.purchase(6);

Tablet.purchase(8);
Tablet.purchase(7);
Tablet.purchase(30);
