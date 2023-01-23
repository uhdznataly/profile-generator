//load Employee javascript file

const Employee = require("../lib/employee");

describe("Employee class constructor", () => {
    it("New employee creation", () => {
        const teamMember = new Employee("Legolas", "1", "legolas@middleearth.com");
        expect(teamMember.name).toEqual("Legolas");
        expect(teamMember.id).toEqual("1");
        expect(teamMember.email).toEqual("legolas@middleearth.com");
    }),

        it("getName Function", () => {
            const teamMember = new Employee("Legolas", "1", "legolas@middleearth.com");
            expect(teamMember.getName()).toEqual("Legolas");


        });

});