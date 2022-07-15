import ILandVehicle from "./Interfaces/ILandvehicle";

export default class Motorcycle implements ILandVehicle{
    startRoute(): void {
        console.log("Moto: Iniciou o trajeto");
    }
    getCargo(): void {
        console.log("Moto: Muamba adquirida");
    }

}