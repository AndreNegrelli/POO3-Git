import { Console } from "console";
import IAircraft from "../Aerial/Interfaces/IAircraft";
import ILandvehicle from "../Land/Interfaces/ILandvehicle";
import ITransportFactory from "./Interfaces/ITransportFactory";
import Car from "../Land/Car";
import Airplane from "../Aerial/Airplane";

export default class UberTransport implements ITransportFactory{
    createTransportVehicle(): ILandvehicle {
       return new Car()
    }
    createTransportAircraft(): IAircraft {
        return new Airplane()
    }

}