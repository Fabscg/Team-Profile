const Employee = require('../lib/Employee')

test('Creates Employee object', () => {
    const employee = new Employee('Angela', '14', 'schmang@gmail.com')

    expect(employee.getName()).toEqual('Angela')
    expect(employee.getId()).toEqual('14')
    expect(employee.getEmail()).toEqual('schmang@gmail.com')
});






  
