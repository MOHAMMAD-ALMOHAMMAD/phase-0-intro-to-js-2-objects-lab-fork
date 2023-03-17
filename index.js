// Write your solution in this file!
const employee ={"name":"Sam","streetAddress":"11 Broadway"};


function updateEmployeeWithKeyAndValue(employee, key, value)
{
    let tempObj={...employee};
    tempObj[key]=value;
    
    return tempObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value)
{
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) 
{
    const tempObj={...employee};
    delete tempObj[key];
    return tempObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    
    delete employee[key];
    return employee;
}