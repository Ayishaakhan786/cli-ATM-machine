#! /usr/bin/env node
import inquirer from "inquirer";
let currentBalance = 10000;
let mypin = 25625;
console.log(`pin is : ${mypin}`);
let pinans = await inquirer.prompt([{
        name: "pin",
        message: "please enter your pin number",
        type: "number"
    }]);
if (pinans.pin === mypin) {
    let options = await inquirer.prompt([{
            name: "option",
            message: "please select option",
            type: "list",
            choices: ["check balance", "withdraw", "quick withdraw"]
        }]);
    if (options.option === "check balance") {
        console.log(currentBalance);
    }
    else if (options.option === "withdraw") {
        let amount = await inquirer.prompt([{
                name: "amount",
                message: "enter amount",
                type: "number"
            }]);
        if (amount.amount <= 10000) {
            currentBalance -= amount.amount;
            console.log(`now your balance is ${currentBalance}`);
        }
        else {
            console.log("insufficient amount");
        }
    }
    else if (options.option === "quick withdraw") {
        let amountOption = await inquirer.prompt([{
                name: "amountOption",
                message: "select amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }]);
        if (amountOption.amountOption === "1000") {
            currentBalance = currentBalance - 1000;
            console.log(`now your balance is ${currentBalance}`);
        }
        else if (amountOption.amountOption === "2000") {
            currentBalance = currentBalance - 2000;
            console.log(`now your balance is ${currentBalance}`);
        }
        else if (amountOption.amountOption === "5000") {
            currentBalance = currentBalance - 5000;
            console.log(`now your balance is ${currentBalance}`);
        }
        else if (amountOption.amountOption === "10000") {
            currentBalance = currentBalance - 10000;
            console.log(`now your balance is ${currentBalance}`);
        }
    }
}
else {
    console.log("incorrect pin number");
}
