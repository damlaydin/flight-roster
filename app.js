const express = require('express');
const attendant = require("./flightAttendant");

const app = express();
const port = 3000; 

var crewInfo = new attendant.infoCrew("Mark Hellburg", 28, "Male", "American", "English, French");
var attendantInfo = new attendant.flightAttendant("A001", crewInfo, "regular", "senior attendant", "ABO456");

flightInfo = attendantInfo.displayCrewInfo();

app.get('/', (req, res) => {
    res.json(attendantInfo);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
  
