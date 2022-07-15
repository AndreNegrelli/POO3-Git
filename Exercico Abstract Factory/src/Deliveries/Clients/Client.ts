import IDrink from "../Drinks/Interfaces/IDrink";
import IFood from "../Foods/Interfaces/IFood";
import IDeliveryFactory from "../Companies/Interfaces/IDeliveryFactory";

export default class Client{
    private food: IFood
    private drink: IDrink

    constructor(factory: IDeliveryFactory){
        this.food = factory.createDeliveryFood()
        this.drink = factory.createDeliveryDrink()
    }

    startDelivery(): void{
        this.food.getType()
        this.drink.getType()
    }
}