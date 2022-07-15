import IAircraft from "../Aerial/Interfaces/IAircraft";
import ILandvehicle from "../Land/Interfaces/ILandvehicle";
import ITransportFactory from "./Interfaces/ITransportFactory";
import Motorcycle from "../Land/Motorcycle";
import Helicopter from "../Aerial/Helicopter";

export default class UberTransport implements ITransportFactory{
    createTransportVehicle(): ILandvehicle {
        return new Motorcycle()
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter()
    }

}