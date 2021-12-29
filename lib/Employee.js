
//creating a class for the employe with a name, id, email
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    //creating funtions that calls the name, id, email and role from the employee
   getName(){
       return this.name;
   }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'
    }
}

//exports ths especific employee file to any other file
module.exports = Employee;