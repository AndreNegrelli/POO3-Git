import Carro from "./Carro"

let uno : Carro = new Carro("Fiat", "Uno")
console.log(uno.marca)
uno.marca = "Ferrari"
console.log(uno.marca)
uno.ligar()