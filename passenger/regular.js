import VipTicket from "../tickets/vipTicket.js";
import Passenger from "./passenger.js";


export default class RegularPassenger extends Passenger{
    constructor(name, IDnumber, AmountOfMoney, workplaice, knowsAnAirportEmployy){
        super(name, IDnumber, AmountOfMoney)
        this.workplaice= workplaice;
        this.knowsAnAirportEmployy = knowsAnAirportEmployy;
}
       buyTicket(ticket){
      
        
        if (ticket.price > this.AmountOfMoney){
           
            
            return false
        }
        else {
              if (this.knowsAnAirportEmployy){
                if(ticket instanceof VipTicket){
                  
                    
                    this.AmountOfMoney-=ticket.price*0.85
                }
                else{
                   
                    
                    this.AmountOfMoney-=ticket.price*0.8
                }
              }
            else{
            
                
                this.AmountOfMoney-=ticket.price
            }
             return ticket.ownername = this.name;
        }
    }
}