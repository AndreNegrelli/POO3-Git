export default class Engine{
    constructor(private _power : number){}

    get Power(): number{
        return this._power
    }

    set Power(value: number){
        this._power = value
    }
}