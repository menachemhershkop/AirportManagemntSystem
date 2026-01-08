import Passenger from "./passenger.js";

export default class RegularPassenger extends Passenger{
    constructor(name, IDnumber, AmountOfMoney, workplaice, knowsAnAirportEmployy){
        super(name, IDnumber, AmountOfMoney)
        this.workplaice= workplaice;
        this.knowsAnAirportEmployy = knowsAnAirportEmployy;
}
}