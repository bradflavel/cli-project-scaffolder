# cli-project-scaffolder

A CLI tool to scaffold new projects with pre-configured templates and boilerplate. One command, and you've got a ready-to-run project.

## Installation

```bash
npm install -g cli-project-scaffolder
```

## Usage

### Interactive mode

Run the create command and answer the prompts:

```bash
hello create
```

### With flags

Skip the prompts by passing arguments directly:

```bash
hello create my-app --template express-api
```

### Options

| Flag | Description |
|------|-------------|
| `-t, --template <type>` | Choose a project template |
| `-V, --version` | Display version number |
| `-h, --help` | Display help |

## Available Templates

- **express-api** — A Node.js Express server with ES Modules, dev/start scripts, and a basic route
- **node-starter** — A minimal Node.js starter for scripts, utilities, or any Node project

## What You Get

Each scaffolded project comes with:

- `package.json` with your project name and description
- `index.js` entry point ready to run
- `.gitignore` configured for Node.js
- `.env.example` for environment variables
- `README.md` with install and run instructions

## Example

```
$ hello create my-api --template express-api

Hi, welcome to the CLI Project Scaffolder
✔ What is the description of your project? A REST API for my app

Success! You've created my-api using the express-api template.
Your project lives at /Users/you/projects/my-api

Next steps:
  cd my-api
  npm install
  npm run dev
```

## License

MIT