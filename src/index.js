#!/usr/bin/env node
import { Command } from "commander"
import { generateProject } from "./scaffold.js";
import { generatePrompts } from "./prompts.js";

const addProgram = new Command()

addProgram
    .name('project-scaffolder')
    .description('CLI to create new scaffolding')
    .version('0.1.0');

addProgram.command('create')
    .description('Creates the scaffolding')
    .argument('[project-name]', 'project name')
    .option('-t, --template <type>', 'choose type')
    .action(async (name, options) => {
        const finalAnswers = await generatePrompts(name, options.template)
        await generateProject(finalAnswers.name, finalAnswers.description, finalAnswers.template)
    })


addProgram.parse()