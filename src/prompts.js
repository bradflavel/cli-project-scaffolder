import inquirer from "inquirer";
import fsSync from 'node:fs';
import path from 'node:path';

export async function generatePrompts(name, template) {
    console.log('Hi, welcome to the CLI Project Scaffolder')

    const questions = [];

    if (!name) {
        const name = { 
            name: "name", 
            type: "input", 
            message: "What is your project name?",
            validate: function(value) {
                const newDestination = path.join(process.cwd(), value);
                if (!fsSync.existsSync(newDestination)) {
                    return true
                }
                return 'This folder already exists. Please choose a different project name'
            }

        }
        questions.push(name)
    }
    
    const description = {name: "description", type: "input", message: "What is the description of your project?"}
    questions.push(description)

    if (!template) {
        const template = { name: "templateName", type: "list", message: "What type of project?", choices: ["express-api"]}
        questions.push(template)
    }

    const answers = await inquirer.prompt(questions)

    const finalAnswers = {
        name: answers.name || name,
        description: answers.description,
        template: answers.templateName || template,
    }

    return finalAnswers

}