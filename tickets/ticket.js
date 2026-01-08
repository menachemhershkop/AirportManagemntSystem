export default class Ticket{
    #ownerName
    constructor( price, ownerName){
        this.RandomTicketNumber = Math.floor(Math.random()*100**10)
        this.price = price;
        this.#ownerName = ownerName;
    };
    getowner(){
        return this.#ownerName;
    }
};