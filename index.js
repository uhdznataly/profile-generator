const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");


function validateInput(input) {
    if (input == "") {
        return "Input needed to continue";

    } else {
        return true;
    }
}

let teamMember = [];


const questions = [
    
    function 
]
