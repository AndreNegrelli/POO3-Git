import Engine from "../Engine";
import Vehicle from "../Products/Vehicle";
import Transmission from "../Transmission";
import VehicleType from "../VehicleType";
import Wheel from "../Wheel";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder{
   private vehicle = new Vehicle()
   
   reset(): void {
        this.vehicle = new Vehicle()
    }
    getVehicle(): Vehicle {
        return this.vehicle
    }
    addWheel(wheel: Wheel) {
        this.vehicle.addWheel(wheel)
    }
    setVehicleType(value: VehicleType) {
        this.vehicle.vehicleType = value
    }
    setSeats(seats: number) {
        this.vehicle.seats = seats
        
    }
    setEngine(engine: Engine) {
        this.vehicle.engine = engine
    }
    setTransmission(transmission: Transmission) {
        this.vehicle.transmission = transmission
    }

}