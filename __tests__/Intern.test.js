const Intern = require('../lib/Intern');


test('creates intern object', () => {
    const intern = new Intern('Elizabeth', 20, 'elizaschneid@gmail.com', 'Test College');
    
    expect(intern.school).toEqual(expect.any(String));
});


test('gets role of employee', () => {
    const intern = new Intern('Elizabeth', 20, 'elizaschneid@gmail.com', 'Test College');

    expect(intern.getRole()).toEqual('Intern');
});