import ILandVehicle from "./Interfaces/ILandvehicle";

export default class Car implements ILandVehicle{
    startRoute(): void {
        console.log("Carro: iniciando o trajeto");
    }
    getCargo(): void {
        console.log("Carro: Muamba adquirida");
    }

}