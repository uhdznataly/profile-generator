//load Engineer javascript file
const Engineer = require("../lib/engineer");

describe ("New Engineer class constructor", () => {
    it ("New engineer creation", () =>{
        const teamMember = new Engineer (
            "Legolas",
            "1",
            "legolas@middleearth.com",
            "legolasgreenleaf"
        );
        expect (teamMember.name).toEqual("Legolas");
        expect(teamMember.id).toEqual("1");
        expect(teamMember.gitHubUsername).toEqual("legolasgreenleaf");

    }),
    it ("getName Function", () =>{
        const teamMember = new Engineer(
            "Legolas",
            "1",
            "legolas@middleearth.com",
            "legolasgreenleaf"

        );
        expect (teamMember.getName()).toEqual("Legolas");
    });
});