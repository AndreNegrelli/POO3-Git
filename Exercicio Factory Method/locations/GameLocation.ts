import { Location } from "./Location"; 
import IItems from "./items/interfaces/IItems";
import Game from "./Game";

export default class GameLocation extends Location{
    protected createItem(): IItems{
        return new Game()
    }
}
