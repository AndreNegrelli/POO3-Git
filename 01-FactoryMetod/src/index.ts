import CarTransport from "./transport/vehicles/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import { Transport } from "./transport/Transport";
import BicycleTransport from "./transport/vehicles/BicycleTransport";

declare var process

let transport : Transport

if(process.argv.includes("Uber")){
    transport = new CarTransport()
} else if (process.argv.includes("log")){
    transport = new MotorcycleTransport()
} else if (process.argv.includes("bike")){
    transport = new BicycleTransport
} else{
    console.error("Selecione um tipo de transporte")
}
 if(transport !){
    transport.startTransport
 }