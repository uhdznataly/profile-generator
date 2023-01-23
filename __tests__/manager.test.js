//load Manager javascript file

const Manager = require("../lib/intern");

describe("Manager class constructor", () => {
    it("New manager creation", () => {
        const teamMember = new Manager("Legolas", "1", "legolas@middleearth.com","2931");
    }),
    it("getName Function", () => {
        const teamMember = new Manager("Legolas", "1", "legolas@middleearth.com", "2931");
        expect (teamMember.getName()).toEqual("Legolas");
    });
});