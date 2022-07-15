import ILandVehicle from "../../Land/Interfaces/ILandvehicle"
import IAircraft from "../../Aerial/Interfaces/IAircraft"

export default interface ITransportFactory{
    createTransportVehicle(): ILandVehicle
    createTransportAircraft(): IAircraft
}
