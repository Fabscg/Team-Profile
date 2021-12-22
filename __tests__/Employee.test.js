

const Employee = require('../lib/Employee')

test('Creates Employee object', () => {
    const employee = new Employee('Angela', '14', 'schmang@gmail.com')

    expect(employee.getName()).toEqual('Angela')
    expect(employee.getId()).toBe('14')
    expect(employee.getEmail()).toEqual("schmang@gmail.com")
});





// test("gets player's stats as an object", () => {
//     const player = new Player('Fabiola', '07', 'fabiscg79@gmailcom');
  
//     expect(player.getStats()).toHaveProperty('potions');
//     expect(player.getStats()).toHaveProperty('health');
//     expect(player.getStats()).toHaveProperty('strength');
//     expect(player.getStats()).toHaveProperty('agility');
//   });
  
