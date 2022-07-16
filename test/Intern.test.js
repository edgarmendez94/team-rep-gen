const Intern = require("../lib/Intern");



describe("Intern", () => { 

    it("Should give a school when typed out as constructor argument", () => {
        const school = "bmcc";
        const intern = new Intern("jake","21","jake21@gmail.com",school);
        expect(intern.school).toEqual(school);
    });

    describe("getSchool", () => { 

    it("Should get intern's school", () => {
        const school = "bmcc";
        const intern = new Intern("jake","21","jake21@gmail.com",school);
        expect(intern.getSchool()).toEqual(school);
    });

    });



});