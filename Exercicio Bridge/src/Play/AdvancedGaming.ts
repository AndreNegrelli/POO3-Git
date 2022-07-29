import IConsole from "../Consoles/IConsole";
import Gaming from "./Gaming";

export default class AdvancedGaming extends Gaming{
    constructor(consoles: IConsole){
        super(consoles)
    }
    hardMode(): void{
        console.log("Modo dificil desbloqueado, WHAT ARE YOU ? CASUL ?")
    }

}