import Ticket from "../tickets/ticket.js";
import VipTicket from "../tickets/vipTicket.js";


export default class Flight{
    constructor(flightName, arline, flightNumber, maximumNumberOfPassenger, regularTicketPrice, VIPTicketPrice){
        this.flightName = flightName;
        this.arline = arline;
        this.flightNumber = flightNumber;
        this.maximumNumberOfPassenger = maximumNumberOfPassenger;
        this.regularTicketPrice = regularTicketPrice;
        this.VIPTicketPrice = VIPTicketPrice;
        this.ticketsList = [];
    {
        for (let i=0; i < this.maximumNumberOfPassenger*0.9;i++){
        this.ticketsList.push(new Ticket(this.regularTicketPrice, 'null'))}
        for (let i=0; i < this.maximumNumberOfPassenger*0.1;i++){
        this.ticketsList.push(new VipTicket(this.regularTicketPrice))}
}          

    }
    sellTicket(type){
        
    }

}