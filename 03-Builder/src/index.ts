import VehicleBuilder from "./Components/Builders/VehicleBuilder";
import Director from "./Components/Directors/Director"
import Vehicle from "./Components/Products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder()
const director : Director = new Director(builder)

director.constructSedanCar()
let sedan : Vehicle = builder.getVehicle()
console.log("Criando um veiculo do tipo: " +sedan.vehicleType)
console.log("Assentos: " +sedan.seats)
console.log("Rodas " +sedan.wheelsTotal)
builder.reset()