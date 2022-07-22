import TransportadoraAdapter from "./Adapters/TransportadoraAdapter";
import ICorreios from "./Correios/ICorreios";
import Transportadora from "./Transportadora/Transportadora";


const transport: ICorreios = new TransportadoraAdapter (new Transportadora)
transport.sendCorreios()
transport.receiveCorreios()