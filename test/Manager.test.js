const Manager = require("../lib/Manager");

describe("Manager", () => { 

    it("Should give a office number when typed out as constructor argument", () => {
        const officeNumber = "42";
        const manager = new Manager("jake","21","jake21@gmail.com",officeNumber);
        expect(manager.officeNumber).toEqual(officeNumber);
    });

    describe("getOfficeNumber", () => { 

    it("Should get intern's school", () => {
        const officeNumber= "42";
        const manager = new Manager("jake","21","jake21@gmail.com",officeNumber);
        expect(manager.getOfficeNumber()).toEqual(officeNumber);
    });

    });




});