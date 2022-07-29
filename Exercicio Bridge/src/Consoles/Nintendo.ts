import IConsole from "./IConsole";

export default class Nintendo implements IConsole{
    constructor(){
        this.configureGame()
        console.log("Nintendo Switch: Jogo iniciado")

    }
    
    configureGame(): void {
       this.authToken()
        console.log("Nintendo Switch: Lendo card");
    }
    authToken(): void {
        console.log("Key do jogo autenticada \nBem vindo ao melhor console");
        
    }

}