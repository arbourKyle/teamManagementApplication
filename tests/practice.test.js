const employee = require('../src/employee.js')

test('name is a class', ()=> {
    expect(employee).toBe(employee)
})