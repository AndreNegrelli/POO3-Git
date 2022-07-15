import Sandwich from "../Product/Sandwich";
import Bread from "../Bread";
import Protein from "../Protein";
import Salad from "../Salad";
import Sauce from "../Sauce";
import SandwichType from "../SandwichType";

export default interface IBuilder{
    reset()
    getSandwich(Sandwich)
    setSandwichType(SandwichType)
    setBread(Bread)
    setSalad(Salad)
    setProtein(Protein)
    addSauce(Sauce)
}