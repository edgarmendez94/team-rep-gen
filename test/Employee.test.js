const Employee = require("../lib/Employee");

describe("Employee", () => {



    it("Should give a name when typed out as constructor argument", () => {
        const name = "jake";
        const employee = new Employee(name);
        expect(employee.name).toEqual(name);
    });





    it("Should give a id number when typed out as constructor argument", () => {
        const id = "21";
        const employee = new Employee("jake",id);
        expect(employee.id).toEqual(id);
    });

    it("Should give a email when typed out as constructor argument", () => {
        const email = "jake21@gmail.com";
        const employee = new Employee("jake",id,email);
        expect(employee.email).toEqual(email);
    });

    describe("getName", () => {
        it("should get back emplyoee's name", () => {
          const name = "jake";
          const employee = new Employee(name);
          expect(employee.getName()).toEqual(name);
        });
      });

    describe("getId" , () => {
        it("Should get back employee's id", () => {
            const id = "21";
            const employee = new Employee("jake",id,email);
            expect(employee.getId()).toEqual(email);
        });
    });

    describe("getEmail" , () => {
        it("Should get back employee's email", () => {
            const email = "jake21@gmail.com";
            const employee = new Employee("jake","21",email);
            expect(employee.getEmail()).toEqual(email);
        });
    });

    describe("getRole" , () => {
        it("Should get back role of employee", () => {
            const role = "Employee";
            const employee = new Employee("jake","21","jake21@gmail.com");
            expect(employee.getRole()).toEqual(role);
        });
    });




});
















