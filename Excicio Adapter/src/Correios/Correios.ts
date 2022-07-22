import ICorreios from "./ICorreios";

export default class Correios implements ICorreios{
    sendCorreios(): void {
        console.log("Encomenda sendo enviada ao destinatario");
    }
    receiveCorreios(): void {
        console.log("Encomenda recebida em nossa unidade");
    }

}