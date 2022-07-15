import IAircraft from "./Interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind()
        this.getCargo
        console.log("Helicoptero: Iniciando Decolagem");
    }
    getCargo(): void {
        console.log("Helicoptero: Muamba adquirida");
    }
    checkWind(): void {
        console.log("Helicoptero: Vento -> Vento OK - SUDOESTE");
    }

}