//load Employee javascript file

const Employee = require("../lib/employee");

describe("Employee class constructor", () => {
    it("New employee creation", () => {
        const teamMember = new Employee("Gimli", "1", "gimili@middleearth.com");
        expect(teamMember.name).toEqual("Gimli");
        expect(teamMember.id).toEqual("1");
        expect(teamMember.email).toEqual("gimli@middleearth.com");
    }),

        it("getName Function", () => {
            const teamMember = new Employee("Gimli", "1", "gimili@middleearth.com");
            expect(teamMember.getName()).toEqual("Gimli");


        });

});