import inquirer from "inquirer";

export async function generatePrompts(name, template) {
    console.log('Hi, welcome to the CLI Project Scaffolder')

    const questions = [];

    if (!name) {
        const name = { name: "name", type: "input", message: "What is your project name?"}
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