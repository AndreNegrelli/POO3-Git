import IDrink from "./Interfaces/IDrink";

export default class SoftDrink implements IDrink{
    getType(): void {
        console.log("A bebida escolhida foi ->")
        this.isSoft
    }
    isAlcoholic(): void {
        
    }
    isSoft(): void {
        console.log("Suco: Essa bebida não possui restrições de idade")
    }
}