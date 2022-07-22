import Client from "./Deliveries/Clients/Client";
import IDeliveryFactory from "./Deliveries/Companies/Interfaces/IDeliveryFactory";
import AiqFomeDelivery from "./Deliveries/Companies/AiqFomeDelivery";
import IFoodDelivery from "./Deliveries/Companies/IFoodDelivery";
import DeliveryCompany from "./Deliveries/Consts/DeliveryCompany";

const currentDelivery = DeliveryCompany.AIQFOME
let factory : IDeliveryFactory

switch(currentDelivery){
    case DeliveryCompany.AIQFOME:
        factory = new AiqFomeDelivery
        break
    case DeliveryCompany.IFOOD:
        factory = new IFoodDelivery
        break
    default:
        console.log("Escolha uma compania de entrega")

}

const client = new Client(factory !)
client.startDelivery()