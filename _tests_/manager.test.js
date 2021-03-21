const Manager = require('../lib/manager')
const Employee = require('../lib/employee')

test("This should add a manager's office number", () => {
    const e = new Manager('Marco', 101,"marco2110estrada@gmail.com", 1);
    expect(e.officeNumber).toBe(1);
});

test("This should return the employee role", () => {
    const e = new Manager('Marco', 101, "marco2110estrada@gmail.com", 1);
    expect(e.getRole()).toBe('Manager');
});

test("This should return the employee office number", () => {
    const e = new Manager('Marco', 101, "marco2110estrada@gmail.com", 1);
    expect(e.getOfficeNumber()).toBe(1);
})
