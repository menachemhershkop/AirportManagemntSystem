import RegularPassenger from "./passenger/regular.js";
import studentPassenger from "./passenger/student.js";
import Airport from "./system/airport.js";

const jfkAirport = new Airport([]);
console.log(jfkAirport.flightList);


const mister = new RegularPassenger('David', 1976485, 4500, 'Intel', true);
const student = new studentPassenger('shuky', 9687243, 1000, 'Yeshiva');




 