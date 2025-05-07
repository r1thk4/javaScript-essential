let authorisedLevel;
let person = "Enrolled Member";

switch(person) {
    case "Employee" : authorisedLevel = "Full access to Dietary Services"; break;
    case "Enrolled Member" : authorisedLevel = "Full access to Dietary Services"; break;
    case "Subscriber" : authorisedLevel = "Partial access to Dietary Services"; break;
    case "Non-Subscriber" : authorisedLevel = "None"; break;
    default : console.log("Wrong value.")
}
console.log("Access Level: ", authorisedLevel)
if (person === "Enrolled Member") {
    console.log("You will also get one-on-one interaction with a dietician");
} else if (person === "Non-Subsriber") {
    console.log("You need to enroll or at least subscribe first to avail this facility.")
}