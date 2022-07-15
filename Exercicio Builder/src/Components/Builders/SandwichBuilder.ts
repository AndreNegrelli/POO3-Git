import Sandwich from "../Product/Sandwich";
import Salad from "../Salad";
import Sauce from "../Sauce";
import Bread from "../Bread";
import Protein from "../Protein";
import SandwichType from "../SandwichType";
import IBuilder from "./IBuilder";

export default class SanwichBuilder implements IBuilder{
   
   private sandwich = new Sandwich()
    reset(): void {
        this.sandwich = new Sandwich()
    }
    getSandwich(): Sandwich {
        return this.sandwich
    }
    setSandwichType(value: SandwichType) {
        this.sandwich.sandwichType = value
    }
    setBread(value: Bread) {
        this.sandwich.bread = value
    }
    setSalad(value: Salad) {
        this.sandwich.salad = value
    }
    setProtein(value: Protein) {
        this.sandwich.protein = value
    }
    addSauce(sauce: Sauce){
        this.sandwich.addSauce(sauce)
    }

}