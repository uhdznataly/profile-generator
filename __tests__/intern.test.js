//load Intern javascript file

const Intern = require("../lib/intern");

describe("Intern class constructor", () => {
    it("New intern creation", () => {
        const teamMember = new Intern("Legolas", "1", "legolas@middleearth.com", "University of the Woodland Realm");
        expect(teamMember.name).toEqual("Legolas");
        expect(teamMember.id).toEqual("1");
        expect(teamMember.internSchool).toEqual("University of the Woodland Realm");
    
    }),
    it("getName Function", () => {
        const teamMember = new Intern(
            "Legolas",
            "1",
            "legolas@middleearth.com",
            "leoglasgreenleaf"
        );
        expect(teamMember.getName()).toEqual("Legolas");
    });
});