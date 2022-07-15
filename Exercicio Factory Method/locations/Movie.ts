import IItems from "./items/interfaces/IItems"

export default class Movie implements IItems{
    start(): void {
        this.getDescription()
        console.log("Essa é a descrição do filme: ") 
    }
    getDescription(): void {
        console.log("Shrek o ogro em Shrek o filme")
    }

}