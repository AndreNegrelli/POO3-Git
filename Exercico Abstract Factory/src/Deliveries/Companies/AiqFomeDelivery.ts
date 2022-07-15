import IDrink from "../Drinks/Interfaces/IDrink";
import IFood from "../Foods/Interfaces/IFood";
import IDeliveryFactory from "./Interfaces/IDeliveryFactory";
import Hamburguer from "../Foods/Hamburger";
import Beer from "../Drinks/Beer";

export default class AiqFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer()
    }
    createDeliveryFood(): IFood {
        return new Hamburguer()
    }
}