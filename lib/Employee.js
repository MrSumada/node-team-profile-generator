class Employee {
    constructor(name, ID, email, role) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = role;
    }

    // getName() {
    //     return 
    //         name: this.name
    // };

    getName() {
        inquirer
            .prompt({
                type: "input",
                name: "name",
                message: "What is the name of your Team Member"
                // validate: nameInfo => {
                //     if (nameInfo) {
                //         return true;
                //     } else {
                //         console.log("Please enter a name for your Team Member?");
                //         return false;
                //     }
                // }
            }
            // .then((data) => {
            //     return data;
            // })
        )}
// }




};


module.exports = Employee;


// getStats() {
//     return {
//         potions: this.inventory.length,
//         health: this.health,
//         strength: this.strength,
//         agility: this.agility
//     };
// }
// test("gets player's stats as an object", () => {
//     const player = new Player("Adam");

//     expect(player.getStats()).toHaveProperty("potions");
//     expect(player.getStats()).toHaveProperty("health");
//     expect(player.getStats()).toHaveProperty("strength");
//     expect(player.getStats()).toHaveProperty("agility");
// });