import IVehicle from "./interfaces/IVehicle"

export default class Car implements IVehicle{
    startRoute(): void {
        this.getCargo()
        console.log("Carro iniciando trajeto")
        
    }
    getCargo(): void {
        console.log("Carro pegou a carga")
    }
}