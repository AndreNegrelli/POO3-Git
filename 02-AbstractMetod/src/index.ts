import Client from "./Vehicles/Clients/Client"
import Company from "./Vehicles/Consts/Company"
import ITransportFactory from "./Vehicles/Factories/Interfaces/ITransportFactory"
import UberTransport from "./Vehicles/Factories/UberTransport"
import NineNineTransport from "./Vehicles/Factories/NineNineTransport"

const currentCompany = Company.NINENINE
let factory : ITransportFactory

switch(currentCompany){
    case Company.UBER :
        factory = new UberTransport()
        break
    case Company.NINENINE :
        factory = new NineNineTransport()
        break
    default :
        console.log("Selecione a compania")
}   
const cliente =  new Client (factory !)
cliente.startRoute()


