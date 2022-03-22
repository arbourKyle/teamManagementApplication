const Engineer = require("../lib/engineer");

test("Can create a github.", () => {
    const testGithub = "Kookie";
    const employeeInstance = new Engineer("Kookie", 2, "kookieG@mail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Kookie";
    const employeeInstance = new Engineer("Kookie", 2, "kookieG@mail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Kookie", 2, "kookieG@mail.com", "kookieG");
    expect(employeeInstance.getRole()).toBe(returnValue);
});