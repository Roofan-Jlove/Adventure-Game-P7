import inquirer from "inquirer"

class Player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}
class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
// user will give his name and it will saved in VERIABLE of PLAYER
let player = await inquirer.prompt([
    {
        name: "name",
        type:"input",
        message:"Please Enter your Name:"
    }
])

let opponent = await inquirer.prompt([
    {
        name: "Select",
        type:"list",
        message: "Select your Opponent",
        choices: ["Skeloton" , "Alien" , "Robbort"]
    }
])

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.Select)

do{
    // Skeloton
    if(opponent.Select == "Skeloton"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do:",
                choices: ["Attack" , "Drink Portion" , "Run for your Life.."]
            }
        ])
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2 )
            if(num > 0){
                p1.fuelDecrease
                console.log(`${p1.name} Fuel is ${p1.fuel}`);
                console.log(`${o1.name} Fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log("You Loose Better Luck Next Time");
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease
                console.log(`${p1.name} Fuel is ${p1.fuel}`);
                console.log(`${o1.name} Fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log("Congrates You Win");
                    process.exit()
            }
        }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(`You Drink Healthy Portion now your fuel is ${p1.fuel}`);            
        }
        if(ask.opt == "Run for your Life.."){
            console.log("You Loose, Better Luck Next time ");
            process.exit()
        }
    }
}

// Alien
if(opponent.Select == "Alien"){
    let ask = await inquirer.prompt([
        {
            name: "opt",
            type: "list",
            message: "What would you like to do:",
            choices: ["Attack" , "Drink Portion" , "Run for your Life.."]
        }
    ])
    if(ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2 )
        if(num > 0){
            p1.fuelDecrease
            console.log(`${p1.name} Fuel is ${p1.fuel}`);
            console.log(`${o1.name} Fuel is ${o1.fuel}`);
            if(p1.fuel <= 0){
                console.log("You Loose Better Luck Next Time");
                process.exit()
            }
        }
        if(num <= 0){
            o1.fuelDecrease
            console.log(`${p1.name} Fuel is ${p1.fuel}`);
            console.log(`${o1.name} Fuel is ${o1.fuel}`);
            if(o1.fuel <= 0){
                console.log("Congrates You Win");
                process.exit()
        }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
        console.log(`You Drink Healthy Portion now your fuel is ${p1.fuel}`);            
    }
    if(ask.opt == "Run for your Life.."){
        console.log("You Loose, Better Luck Next time ");
        process.exit()
    }
}
}

// Robbort
if(opponent.Select == "Robbort"){
    let ask = await inquirer.prompt([
        {
            name: "opt",
            type: "list",
            message: "What would you like to do:",
            choices: ["Attack" , "Drink Portion" , "Run for your Life.."]
        }
    ])
    if(ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2 )
        if(num > 0){
            p1.fuelDecrease
            console.log(`${p1.name} Fuel is ${p1.fuel}`);
            console.log(`${o1.name} Fuel is ${o1.fuel}`);
            if(p1.fuel <= 0){
                console.log("You Loose Better Luck Next Time");
                process.exit()
            }
        }
        if(num <= 0){
            o1.fuelDecrease
            console.log(`${p1.name} Fuel is ${p1.fuel}`);
            console.log(`${o1.name} Fuel is ${o1.fuel}`);
            if(o1.fuel <= 0){
                console.log("Congrates You Win");
                process.exit()
        }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
        console.log(`You Drink Healthy Portion now your fuel is ${p1.fuel}`);            
    }
    if(ask.opt == "Run for your Life.."){
        console.log("You Loose, Better Luck Next time ");
        process.exit()
    }
}
}
}

while(true)

















