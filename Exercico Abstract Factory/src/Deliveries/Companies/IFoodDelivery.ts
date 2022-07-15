import IDrink from "../Drinks/Interfaces/IDrink";
import IFood from "../Foods/Interfaces/IFood";
import IDeliveryFactory from "./Interfaces/IDeliveryFactory";
import SoftDrink from "../Drinks/SoftDrink";
import HotDog from "../Foods/HotDog";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink()
    }
    createDeliveryFood(): IFood {
        return new HotDog()
    }
}