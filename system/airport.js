import Flight from "../class/flight.js";

export default class Airport{
    constructor(flightList){
        this.flightList = flightList;
    }
    addFlights(name, arline, flightNumber, maxPass, regularPrice, VIPPrice){
        this.addFlights.push(new Flight(name,arline,flightNumber,maxPass, regularPrice, VIPPrice))
    };
};