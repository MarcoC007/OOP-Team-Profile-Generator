const Employee = require('../lib/employee');


test ('this should add a new employee' , () => {
  const e = new Employee();
  expect(typeof(e)).toBe('object');
});

test ("this should add a new employee's name", () => {
    const e = new Employee('Marco');
    expect(e.name).toBe('Marco');
});

test ("this should add a new employee's Id", () => {

    const e = new Employee('Marco', 101);
    expect(e.id).toBe(101);
});

test ("this should add a new employee's email", () => {
    const e = new Employee('Marco', 101, "marco2110estrada@gmail.com");
    expect(e.email).toBe("marco2110estrada@gmail.com");
});

