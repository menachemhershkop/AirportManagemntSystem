import Flight from "../flights/flight.js";


export default class Airport{
    constructor(){
        this.flightList = [israel, russia, england];
    
    }
    
    addFlights(name, arline, flightNumber, maxPass, regularPrice, VIPPrice){
        this.flightList.push(new Flight(name,arline,flightNumber,maxPass, regularPrice, VIPPrice))
        this.regularTicket = maxPass*0.9;
        this.vipTicket= maxPass*0.1;
    };
};

const israel = new Flight('TLV-JFK', 'EL-AL', 7113, 10, 950, 1600)
// israel.TicketsType()
const russia = new Flight('SVO-JFK', 'Airoflut', 9468, 15, 700, 1100)
const england = new Flight('LHR-JFK', 'Amrican-Airlines', 6487,20,980,1900)