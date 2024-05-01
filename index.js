#! /usr/bin/env node
import inquirer from "inquirer";
const input = await inquirer.prompt([
    { name: "WeightInKg", type: "number", message: "Kindly enter your weight in Kg" },
    { name: "heightInMeters", type: "number", message: "Kindly enter your height in meters" },
]);
let bmi = input.WeightInKg / (input.heightInMeters * input.heightInMeters);
console.log(`Your BMI is ${bmi}`);
