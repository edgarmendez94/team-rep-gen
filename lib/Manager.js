const Employee = require("./Employee");

//officeNumber
//getRole()

class manager extends Employee{
    constructor(officeNumber,name,id,email){

        super(name,id,email);
        this.officeNumber = officeNumber
    }

 
    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    
}