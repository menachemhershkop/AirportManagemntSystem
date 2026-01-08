import VipTicket from "../tickets/vipTicket.js";
import Passenger from "./passenger.js";

export default class studentPassenger extends Passenger{
    constructor(name, IDnumber, AmountOfMoney, SchoolName){
        super(name, IDnumber, AmountOfMoney)
        this.SchoolName = SchoolName;
    };
    buyTicket(ticket){
            if (ticket.price > this.AmountOfMoney){
                return false
            }
            else {
                    if(ticket instanceof VipTicket){
                        this.AmountOfMoney-=ticket.price
                    }
                    else{
                        this.AmountOfMoney-=ticket.price*0.9
                    }
                  }
               
                 return ticket.ownername = this.name;
            }
        }
