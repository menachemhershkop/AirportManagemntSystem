export default class Ticket{
    #ownerName
    constructor(RandomTicketNumber, price, ownerName){
        this.RandomTicketNumber = RandomTicketNumber
        this.price = price;
        this.#ownerName = ownerName;
    };
};