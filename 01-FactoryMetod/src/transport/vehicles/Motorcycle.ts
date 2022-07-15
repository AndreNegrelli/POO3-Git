import IVehicle from "./interfaces/IVehicle"

export default class Motorcicle implements IVehicle{
    startRoute(): void {
        this.getCargo()
        console.log("Moto iniciando trajeto")
        
    }
    getCargo(): void {
        console.log("Carga coletada")
    }
}