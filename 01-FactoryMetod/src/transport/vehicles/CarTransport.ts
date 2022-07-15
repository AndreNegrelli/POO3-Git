import { Transport } from "../Transport";
import Car from "./Car";
import IVehicle from "./interfaces/IVehicle";
export default class CarTransport extends Transport{
    protected createTransport(): IVehicle {
        return new Car
    }
}
