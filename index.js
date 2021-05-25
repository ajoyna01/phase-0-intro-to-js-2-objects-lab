let employee = {
    name: '',
    streetAddress: ''
    }
    function updateEmployeeWithKeyAndValue(employee, key, value) {
        const newObject = Object.assign({}, employee, { [key]: value})
        return newObject 
    }
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value
        return employee
    }    
    function deleteFromEmployeeByKey(employee, key) {
        const newObject = Object.assign({}, employee)
        delete newObject[key]
        return newObject
    }
    function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key]
        return employee 

        
    }