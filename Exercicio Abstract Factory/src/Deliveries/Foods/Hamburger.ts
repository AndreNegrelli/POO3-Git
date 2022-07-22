import IFood from "./Interfaces/IFood";

export default class Hamburguer implements IFood{
    getType(): void {
        console.log("A comida escolhida foi -> Hamburger")
    }
}