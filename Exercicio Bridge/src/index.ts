import IConsole from "./Consoles/IConsole";
import Nintendo from "./Consoles/Nintendo";
import Playstation from "./Consoles/Playstation";
import Xbox from "./Consoles/Xbox";
import AdvancedGaming from "./Play/AdvancedGaming";
import Gaming from "./Play/Gaming";

function playGame(consoles: IConsole){
    console.log("Aguarde....")
    const gaming = new Gaming(consoles)
    gaming.playing()
    gaming.result()

}

function playAdvancedGaming(consoles: IConsole){
    console.log("Aguarde....")
    const gaming = new AdvancedGaming(consoles)
    gaming.playing()
    gaming.result()
    gaming.hardMode()
}


playGame(new Nintendo)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~")
playGame(new Playstation)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~")
playGame(new Xbox)

console.log("\n")

playAdvancedGaming(new Nintendo)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~")
playAdvancedGaming(new Playstation)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~")
playAdvancedGaming(new Xbox)