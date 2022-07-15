import IFood from "./Interfaces/IFood";

export default class HotDog implements IFood{
    getType(): void {
        console.log("A comida escolhida foi -> Cachorro quente")
    }
}