import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{
    receivePackage(): void {
        throw new Error("Pacote recebido em nossa transportadora");
    }
    sendPackage(): void {
        throw new Error("Pacota envidado pela transportadora");
    }

}