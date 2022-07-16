const Employee = require("./Employee");


//github
//getGithub() getRole()

class Engineer extends Employee{
    constructor(name, id, email, github){

        super(name,id,email);
        this.github = github

    }

    getGithub(){
        return this.github
    }

    getRole(){

    }

}

module.exports = Engineer