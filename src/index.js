#!/usr/bin/env node
import { Command } from "commander"
import { generateProject } from "./scaffold.js";

const addProgram = new Command()

addProgram
    .name('project-scaffolder')
    .description('CLI to create new scaffolding')
    .version('0.1.0');

addProgram.command('create')
    .description('Creates the scaffolding')
    .argument('<project-name>', 'project name')
    .option('-t, --template <type>', 'choose type')
    .action(async (name, options) => {
        console.log(name, options)
        await generateProject(name, "A new project", options.template)
    })


addProgram.parse()

