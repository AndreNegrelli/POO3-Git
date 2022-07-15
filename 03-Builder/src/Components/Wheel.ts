export default class Wheel{
    constructor(private _rim: number){}

    get Rim(): number{
        return this._rim
    }

    set Rim(value: number){
        this._rim = value
    }
}