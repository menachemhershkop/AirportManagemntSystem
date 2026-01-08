import Passenger from "./passenger.js";

export default class studentPassenger extends Passenger{
    constructor(name, IDnumber, AmountOfMoney, SchoolName){
        super(name, IDnumber, AmountOfMoney)
        this.SchoolName = SchoolName;
    };
 
}