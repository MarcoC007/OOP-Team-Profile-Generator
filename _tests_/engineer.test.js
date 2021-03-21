const Engineer = require('../lib/engineer')
const Employee = require('../lib/employee')

test('This should add a new Engineer to the team', () => {
    const e = new Engineer('Marco', 102, 'marco2110estrada@gmail.com', 'MarcoC007');
    expect(e.github).toBe('MarcoC007');
});

test("This should return the engineer's role", () => {
    const e = new Engineer('Marco', 102, 'marco2110estrada@gmail.com', 'MarcoC007');
    expect(e.getRole()).toBe('Engineer');
});

test("This should return the engineer's github profile", () => {
    const e = new Engineer('Marco', 102, 'marco2110estrada@gmail.com', 'MarcoC007');
    expect(e.getGithub()).toBe('MarcoC007');
});