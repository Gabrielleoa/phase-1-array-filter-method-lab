function findMatching(drivers, name) {
    const names =['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
   
}

function fuzzyMatch(drivers, letters){
    const names = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
    return drivers.filter(driver => driver.startsWith(letters));

}
function matchName(drivers, name){
    const names = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
    return drivers.filter(driver => driver.name === name);

}
