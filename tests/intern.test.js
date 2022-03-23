const Intern = require("../lib/intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("River", 0, "riverW@mail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("River", 0, "riverW@mail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("River", 0, "riverW@mail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});