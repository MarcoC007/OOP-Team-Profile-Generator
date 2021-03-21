const Intern = require('../lib/intern')
const Employee = require('../lib/employee')

test("This should add a new intern to the team", () => {
    const e = new Intern('Marco', 103, 'marco2110estrada@gmail.com', 'EOL');
    expect(e.school).toBe('EOL');
});

test("This should return the intern role", () => {
    const e = new Intern('Marco', 103, 'marco2110estrada@gmail.com', 'EOL');
    expect(e.getRole()).toBe('Intern');
});

test("This should return the intern school", () => {
    const e = new Intern('Marco', 103, 'marco2110estrada@gmail.com', 'EOL');
    expect(e.getSchool()).toBe('EOL');
})