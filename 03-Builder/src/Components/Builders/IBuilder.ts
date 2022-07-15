import Engine from "../Engine"
import Vehicle from "../Products/Vehicle"
import Transmission from "../Transmission"
import VehicleType from "../VehicleType"
import Wheel from "../Wheel"

export default interface IBuilder{
    reset(): void
    getVehicle(): Vehicle
    addWheel(wheel: Wheel)
    setVehicleType(value: VehicleType)
    setSeats(seats: number)
    setEngine(engine: Engine)
    setTransmission(transmission: Transmission)
}