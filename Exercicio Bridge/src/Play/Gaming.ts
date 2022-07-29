import IConsole from "../Consoles/IConsole";
import IPlay from "./IPlay";

export default class Gaming implements IPlay{
    constructor(private _consoles: IConsole){}
    
    playing(): void {
        console.log("Jogo rodando");
    }
    result(): void {
        console.log("Aperte qualquer botão para iniciar");
    }

}