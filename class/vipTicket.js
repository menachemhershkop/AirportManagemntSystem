import Ticket from "./ticket.js";

export default class VipTicket extends Ticket{
    constructor(price, ownerName){
        super(price, ownerName)
        this.benfisList = ['Free alcohol', 'Free food', 'Hot towels'];
    }
}