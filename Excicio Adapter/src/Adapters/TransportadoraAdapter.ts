import ICorreios from "../Correios/ICorreios";
import Transportadora from "../Transportadora/Transportadora";



export default class TransportadoraAdapter implements ICorreios{
   constructor(private _transportadora: Transportadora){
    console.log("Adaptanto Transportadora para Correios")
   }
   
    sendCorreios(): void {
        console.log("Pacote enviado por nossa transportadora");
    }
    receiveCorreios(): void {
        console.log("Pacote recebido por nossa transportadora");
    }

}