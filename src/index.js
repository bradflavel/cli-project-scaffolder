#!/usr/bin/env node
import { Command } from "commander"
import { generateProject } from "./scaffold.js";
import { generatePrompts } from "./prompts.js";
import fsSync from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pc from 'picocolors'

const addProgram = new Command()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

addProgram
    .name('project-scaffolder')
    .description('CLI to create new scaffolding')
    .version('0.1.0');

addProgram.command('create')
    .description('Creates the scaffolding')
    .argument('[project-name]', 'project name')
    .option('-t, --template <type>', 'choose type')
    .action(async (name, options) => {
        if (name) {
            const newDestination = path.join(process.cwd(), name);

            if (fsSync.existsSync(newDestination)) {
                
                console.log(pc.red(`This folder already exists. You will need to choose another project name`))
                name = undefined;
            }
            
        }
        if (options.template) {
            const templateDir = path.join(__dirname, '..', 'templates', options.template)

            if (!fsSync.existsSync(templateDir)) {
                console.log(pc.red(`This template type doesn't exist. You will need to choose another`))
                options.template = undefined;
            }
    
        }

        const finalAnswers = await generatePrompts(name, options.template)
        await generateProject(finalAnswers.name, finalAnswers.description, finalAnswers.template)
        const finalFolder = path.join(process.cwd(), finalAnswers.name);
        const templateInstructions = {
            "express-api": {
                install: "npm install",
                run: "npm run dev"
            },
            "node-starter": {
                install: "npm install",
                run: "npm run dev"
            },
            "react-app": {
                install: "npm install",
                run: "npm run dev"
            },
            "fastapi": {
                install: "pip install -r requirements.txt",
                run: "python -m uvicorn main:app --reload"
            }
        }

        console.log(pc.white(`
        ${pc.green("Success!")} You've created ${pc.bold(finalAnswers.name)} using the ${pc.bold(finalAnswers.template)} template.
        Your project lives at ${pc.bold('"' + finalFolder + '"')}

        Next steps:
        ${pc.cyan("cd " + finalAnswers.name)}
        ${pc.cyan(templateInstructions[finalAnswers.template]?.install)}
        ${pc.cyan(templateInstructions[finalAnswers.template]?.run)}
        
        `))

    })


addProgram.parse()