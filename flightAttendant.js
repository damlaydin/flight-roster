const infoCrew = require("./infoCrew");

class flightAttendant{

    constructor(id, info, type, level, veh_restriction){

        this.id = id;
        this.info = info
        this.type = type
        this.level = level
        this.veh_restriction = veh_restriction
    }

    displayCrewInfo(){
        console.log(`ID of flight attendant is: ${this.id}`)
        this.info.displayInfo();
        console.log(`type of flight attendant is: ${this.type}`)
        console.log(`level of flight attendant is: ${this.level}`)
        console.log(`veh_restriction of flight attendant is: ${this.veh_restriction}`)
    }

}

module.exports = {
    infoCrew: infoCrew,
    flightAttendant: flightAttendant
};
