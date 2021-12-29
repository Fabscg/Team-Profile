//importing the employee file to test it
const Employee = require('../lib/Employee')
//creating the employee object for testing
test('Creates Employee object', () => {
    const employee = new Employee('Angela', '14', 'schmang@gmail.com')

    expect(employee.getName()).toEqual('Angela')
    expect(employee.getId()).toBe('14')
    expect(employee.getEmail()).toEqual('schmang@gmail.com')
});






  
