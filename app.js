const express = require('express');
const attendant = require("./flightAttendant");

const app = express();
const port = 3000; 

const vehicleTypes = [
    'Airbus A320',
    'Boeing 737',
    'Embraer E190',
    'Bombardier CRJ700',
    'Airbus A380',
    'Boeing 787 Dreamliner',
    'Boeing 747',
    'Airbus A350'
];

const numVehicleTypes = Math.floor(Math.random() * 4) + 1;
const vehicleTypesList = [];
while (vehicleTypesList.length < numVehicleTypes) {
    const randomIndex = Math.floor(Math.random() * vehicleTypes.length);
    const randomVehicleType = vehicleTypes[randomIndex];

    // selected vehicle type is not already in the list
    if (!vehicleTypesList.includes(randomVehicleType)) {
        vehicleTypesList.push(randomVehicleType);
    }
}

const languages = ['English', 'French', 'Spanish', 'German', 'Chinese', 'Japanese', 'Russian', 'Arabic'];

const numKnownLanguages = Math.floor(Math.random() * 4) + 1;
const knownLanguages = [];

// Randomly select different languages 
while (knownLanguages.length < numKnownLanguages) {
    const randomIndex = Math.floor(Math.random() * languages.length);
    const randomLanguage = languages[randomIndex];

    // make sure language is not already in the list
    if (!knownLanguages.includes(randomLanguage)) {
        knownLanguages.push(randomLanguage);
    }
}

var crewInfo = new attendant.infoCrew("Mark Hellburg", 28, "Male", "American", knownLanguages);
var attendantInfo = new attendant.flightAttendant("A001", crewInfo, "regular", "senior attendant", vehicleTypesList);


const flightInfo = attendantInfo.displayCrewInfo();

app.get('/', (req, res) => {
    res.json(attendantInfo);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
