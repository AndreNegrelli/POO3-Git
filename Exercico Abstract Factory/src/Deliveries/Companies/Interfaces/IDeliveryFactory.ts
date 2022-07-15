import IDrink from "../../Drinks/Interfaces/IDrink";
import IFood from "../../Foods/Interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink(): IDrink
    createDeliveryFood(): IFood
}