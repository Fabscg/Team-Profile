const Engineer = require('../lib/Engineer')

test('creates engineer object', () => {
    const engineer = new Engineer('Fabiola', '07', 'fabiscg79@gmail.com', 'fabskickass') 

   expect(engineer.getName()).toEqual('Fabiola')
   expect(engineer.getId()).toBe('07')
   expect(engineer.getEmail()).toEqual('fabiscg79@gmail.com')
   expect(engineer.getGithub()).toEqual('fabskickass')
})

// engineer’s name, ID, email, and GitHub username, and I am taken back to the menu