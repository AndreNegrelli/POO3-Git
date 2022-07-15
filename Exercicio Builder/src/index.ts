import SandwichBuilder from "./Components/Builders/SandwichBuilder";
import Director from "./Components/Directors/Director";
import Sandwich from "./Components/Product/Sandwich";

const builder : SandwichBuilder = new SandwichBuilder()
const director : Director = new Director(builder)

director.constructHamburger()
let hamburger : Sandwich = builder.getSandwich()
console.log("Making a: " + hamburger.sandwichType)
console. log("With the sauces " + hamburger.sauceTotal)
