import Ticket from "./ticket";

export default class VipTicket extends Ticket{
    constructor(ticketNumber, price, ownerName){
        super(ticketNumber, price, ownerName)
        this.benfisList = ['Free alcohol', 'Free food', 'Hot towels'];
    }
}