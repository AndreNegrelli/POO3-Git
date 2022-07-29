import IConsole from "./IConsole";

export default class Xbox implements IConsole{
    constructor(){
        this.configureGame()
        console.log("Xbox: Jogo iniciado")

    }
    
    configureGame(): void {
       this.authToken()
        console.log("Xbox: Lendo disco");
    }
    authToken(): void {
        console.log("Key do jogo autenticada");
    }

}