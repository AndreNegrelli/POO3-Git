import IBuilder from "../Builders/IBuilder";
import Bread from "../Bread";
import Salad from "../Salad";
import Sauce from "../Sauce";
import Protein from "../Protein";
import SandwichType from "../SandwichType";

export default class Director{
    constructor(private builder: IBuilder){}

    constructHamburger(){
        this.builder.setSandwichType(SandwichType.HAMBURGER)
        this.builder.setBread(Bread.BRIOCHE)
        this.builder.setProtein(Protein.MEAT)
        this.builder.setSalad(Salad.LETTUCE)
        this.builder.addSauce(Sauce.BARBECUE)
        this.builder.addSauce(Sauce.KETCHUP)
    }

    constructHotdog(){
        this.builder.setSandwichType(SandwichType.HOTDOG)
        this.builder.setBread(Bread.INTEGRAL)
        this.builder.setProtein(Protein.PORK)
        this.builder.setSalad(Salad.GREENPEPPER)
        this.builder.addSauce(Sauce.MUSTARD)
    }
}