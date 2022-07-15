import IBuilder from "../Builders/IBuilder";
import Engine from "../Engine";
import Transmission from "../Transmission";
import VehicleType from "../VehicleType";
import Wheel from "../Wheel";

export default class Director{
    constructor(private builder: IBuilder){}

    constructSedanCar(){
        this.builder.setVehicleType(VehicleType.SEDAN)
        this.builder.setSeats(5)
        this.builder.setTransmission(Transmission.AUTOMATIC)
        this.builder.setEngine(new Engine(1600))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
    }
    constructSUV(){}

    constructPICKUP(){
        this.builder.setVehicleType(VehicleType.PICKUPTRUCK)
        this.builder.setSeats(3)
        this.builder.setTransmission(Transmission.MANUAL)
        this.builder.setEngine(new Engine(3500))
        this.builder.addWheel(new Wheel(20))
        this.builder.addWheel(new Wheel(20))
        this.builder.addWheel(new Wheel(20))
        this.builder.addWheel(new Wheel(20))
        this.builder.addWheel(new Wheel(20))
        this.builder.addWheel(new Wheel(20))
    }
}