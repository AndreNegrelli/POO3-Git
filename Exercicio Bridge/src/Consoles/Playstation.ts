import IConsole from "./IConsole";

export default class Playstation implements IConsole{
    constructor(){
        this.configureGame()
        console.log("Playstation: Jogo iniciado")

    }
    
    configureGame(): void {
       this.authToken()
        console.log("Playstation: Lendo disco");
    }
    authToken(): void {
        console.log("Key do jogo autenticada");
    }

}