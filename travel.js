import RegularPassenger from "./passenger/regular.js";
import studentPassenger from "./passenger/student.js";
import Airport from "./system/airport.js";

const jfkAirport = new Airport([]);
// jfkAirport.addFlights('TLV-JFK', 'EL-AL', 7113, 285, 950, 1600)
// jfkAirport.addFlights('SVO-JFK', 'Airoflut', 9468, 320, 700, 1100)
// jfkAirport.addFlights('LHR-JFK', 'Amrican-Airlines', 6487,450,980,1900)
console.log(jfkAirport.flightList);


const mister = new RegularPassenger('David', 1976485, 4500, 'Intel');
const student = new studentPassenger('shuky', 9687243, 1000, 'Yeshiva');
