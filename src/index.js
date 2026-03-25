#!/usr/bin/env node
import { Command } from "commander"

const addProgram = new Command()

addProgram
    .name('project-scaffolder')
    .description('CLI to create new scaffolding')
    .version('0.1.0');

addProgram.command('create')
    .description('Creates the scaffolding')
    .argument('<project-name>', 'project name')
    .option('-t, --template <type>', 'choose type')
    .action((name, options) => {
        console.log(name, options)
    })


addProgram.parse()

