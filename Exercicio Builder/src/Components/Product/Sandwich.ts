import Bread from "../Bread";
import Protein from "../Protein";
import Salad from "../Salad";
import Sauce from "../Sauce";
import SandwichType from "../SandwichType";

export default class Sandwich{
    private _bread : Bread
    private _protein : Protein
    private _salad : Salad
    private _sauce : Sauce[] = []
    private _sandwichType: SandwichType

    get bread(): Bread{
        return this._bread
    }

    set bread(value: Bread){
        this._bread = value
    }

    get protein(): Protein{
        return this._protein
    }

    set protein(value : Protein){
        this._protein = value
    }

    get salad(): Salad{
        return this._salad
    }

    set salad(value: Salad){
        this._salad = value
    }

    addSauce(sauce: Sauce){
        this._sauce.push(sauce)
    }

    get sauce(): Sauce[]{
        return this._sauce
    }

    get sauceTotal(): number{
        return this._sauce.length
    }

    get sandwichType(): SandwichType{
        return this._sandwichType
    }

    set sandwichType(value: SandwichType){
        this._sandwichType = value
    }
}