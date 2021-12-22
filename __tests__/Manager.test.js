
const Manager = require('../lib/Manager');


test('creates manager object', () => {
    const manager = new Manager('Elizabeth', 20, 'elizaschneid@gmail.com', 9);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Elizabeth', 20, 'elizaschneid@gmail.com', 9);

    expect(manager.getRole()).toEqual("Manager");
}); 