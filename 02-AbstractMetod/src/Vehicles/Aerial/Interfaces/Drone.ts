import IAircraft from "./IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        console.log("Drone: Rota de entrega iniciada");
    }
    getCargo(): void {
        console.log("Drone: Pacote seguro");
    }
    checkWind(): void {
        console.log("Drone: Vento -> OK - NORTE");
    }

}