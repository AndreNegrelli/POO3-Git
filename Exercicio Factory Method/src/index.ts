import { Location } from "../locations/Location";
import MovieLocation from "../locations/MovieLocation";
import GameLocation from "../locations/GameLocation";


declare var process

let location : Location

if (process.argv.includes("Jogo")){
    location = new GameLocation()

}else if (process.argv.includes("Filme")){
    location = new MovieLocation()
} else{
    console.error("Selecione um item")
}
if (location!){
    console.log("Teste")
    location.startItem()


}


