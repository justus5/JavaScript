let jasonObject = {
    'employees' : [
        {
        'firstName': 'John', 
            'lastName': 'Doe',
        'zainteresowania': ["sport", "programowanie"]}, 
        
        {'firstName': 'Anna', 
         'lastName': 'Smith'}, 
        
        {'firstName': 'Peter', 
         'lastName': 'Jones'}
    ] 
}

let pierwszaOsoba = `${jasonObject.employees[0].firstName}
${jasonObject.employees[0].lastName} interesuje się ${jasonObject.employees[0].zainteresowania}`;

console.log(pierwszaOsoba);