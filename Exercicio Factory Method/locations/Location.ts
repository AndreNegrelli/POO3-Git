import IItems from "./items/interfaces/IItems"

export abstract class Location{
    startItem(): void{
        const item = this.createItem()
        item.start()
    }
    
protected abstract createItem(): IItems
}

