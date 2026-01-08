export default class Flight{
    constructor(flightName, arline, flightNumber, maximumNumberOfPassenger, regularTicketPrice, VIPTicketPrice){
        this.flightName = flightName;
        this.arline = arline;
        this.flightNumber = flightNumber;
        this.maximumNumberOfPassenger = maximumNumberOfPassenger;
        this.regularTicketPrice = regularTicketPrice;
        this.VIPTicketPrice = VIPTicketPrice;
        this.ticketsList = []
    }
}