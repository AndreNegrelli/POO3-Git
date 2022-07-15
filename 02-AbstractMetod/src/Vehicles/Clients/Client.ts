import ILandVehicle from "../Land/Interfaces/ILandvehicle"
import IAircraft from "../Aerial/Interfaces/IAircraft"
import ITransportFactory from "../Factories/Interfaces/ITransportFactory"

export default class Client{
    private vehicle: ILandVehicle
    private aircraft: IAircraft
    
    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTransportVehicle()
        this.aircraft = factory.createTransportAircraft()
    }

    startRoute(): void {
    this.vehicle.startRoute()
    this.aircraft.startRoute()
    }
}