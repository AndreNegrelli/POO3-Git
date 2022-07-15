import IItems from "./items/interfaces/IItems"

export default class Game implements IItems{
    start(): void {
        this.getDescription()
        console.log("Essa é a descrição do jogo: ") 
    }
    getDescription(): void {
        console.log("Altas aventuras com o chosen undead e seus amigos em Dark Souls")
    }

}