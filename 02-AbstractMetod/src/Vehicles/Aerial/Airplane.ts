import IAircraft from "./Interfaces/IAircraft";

export default class Airplane implements IAircraft{
    startRoute(): void {
        this.checkWind()
        this.getCargo
        console.log("Aviao: Iniciando Decolagem");
    }
    getCargo(): void {
        console.log("Passageiros embarcados");
    }
    checkWind(): void {
        console.log("Vento: Aviao -> Ta nice meu mano - SUL");
    }

}