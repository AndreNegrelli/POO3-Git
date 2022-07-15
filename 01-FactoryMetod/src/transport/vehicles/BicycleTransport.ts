import { Transport } from "../Transport";
import IVehicle from "./interfaces/IVehicle";
import Bicycle from "./Bicycle";

export default class BicycleTransport extends Transport{
    protected createTransport(): IVehicle {
        return new Bicycle
    }
}
