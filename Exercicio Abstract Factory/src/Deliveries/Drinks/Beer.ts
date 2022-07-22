import IDrink from "./Interfaces/IDrink";

export default class Beer implements IDrink{
  getType(): void {
    console.log("A bebida escolhida foi ->")  
    this.isAlcoholic()

  }
  isAlcoholic(): void {
      console.log("Cerveja: Esta bebida é apenas para maiores de 18")
  }
  isSoft(): void {
      
  }
}