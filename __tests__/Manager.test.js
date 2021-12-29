//int this two conts we are importing the employee and manager files for testing
const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager');

//creating the manager object for the test
test('creates manager object', () => {
    const manager = new Manager('Elizabeth', 20, 'elizaschneid@gmail.com', 9);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Elizabeth', 20, 'elizaschneid@gmail.com', 9);

    expect(manager.getRole()).toEqual('Manager');
}); 