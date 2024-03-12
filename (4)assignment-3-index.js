//Age in Days...

function ageInDays(person) {
    // Concatenate the first name and last name into fullName
    const fullName = person.firstName + ' ' + person.lastName;

    // Calculate the age in days
    const ageInDays = person.age * 365;

    // Return an object containing fullName and ageInDays
    return { fullName, ageInDays };
}
