import { Location } from "./Location"; 
import IItems from "./items/interfaces/IItems";
import Movie from "./Movie";

export default class MovieLocation extends Location{
    protected createItem(): IItems{
        return new Movie()
    }
}