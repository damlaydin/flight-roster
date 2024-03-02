class infoCrew{

    constructor(name,age,gender,nationality, knownlang){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
        this.knownlang = knownlang;
    }

    displayInfo(){
        console.log(`Name of the flight attendant is: ${this.name}`);
        console.log(`\n ${this.age}`);
        console.log(`\n ${this.gender}`);
        console.log(`\n ${this.nationality}`);
        console.log(`\n ${this.knownlang}`);
    }


}

module.exports = infoCrew;