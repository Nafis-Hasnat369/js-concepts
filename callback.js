function welcomeMessage(name, greedHandeler) {
    greedHandeler(name);
};
// const names = ["Tom Hanks", "Tom Cruse"];
// const object = { name: "Tom chinku", age: 13 };

function greetMorning(name) {
    console.log("Good morning", name);
}
function greedAfternoon(name) {
    console.log("Good afternoon", name);
}
function greedEvening(name) {
    console.log("Good evening", name);
}

welcomeMessage("Tom Hanks", greetMorning);
welcomeMessage("Sakib Hanks", greedAfternoon);
welcomeMessage("Raj", greedEvening);