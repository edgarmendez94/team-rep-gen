const Engineer = require("../lib/Engineer");

describe("Engineer", () => { 

    it("Should give a github when typed out as constructor argument", () => {
        const github = "jakeGithub";
        const engineer = new Engineer("jake","21","jake21@gmail.com",github);
        expect(engineer.github).toEqual(github);
    });

    describe("getGithub", () => { 

    it("Should get employee's github", () => {
        const github = "jakeGithub";
        const engineer = new Engineer("jake","21","jake21@gmail.com",github);
        expect(engineer.getGithub()).toEqual(github);
    });

    });




});