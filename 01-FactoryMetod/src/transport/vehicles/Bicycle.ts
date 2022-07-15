import IVehicle from "./IVehicle"

export default class Bicycle implements IVehicle{
    startRoute(): void {
        this.getCargo()
        console.log("Bicicleta iniciando trajeto")
        
    }
    getCargo(): void {
        console.log("Carro pegou a carga")
    }
}