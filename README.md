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
scaffold create
```

### With flags

Skip the prompts by passing arguments directly:

```bash
scaffold create my-app --template express-api
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
- **react-app** — A React starter powered by Vite with hot module replacement
- **fastapi** — A Python FastAPI server with uvicorn and auto-generated API docs

## What You Get

Each scaffolded project comes with:

- A ready-to-run project with your chosen framework
- Your project name and description pre-filled throughout
- `.gitignore` configured for your stack
- `.env.example` for environment variables
- `README.md` with install and run instructions

## Example

```
$ scaffold create my-api --template express-api

Hi, welcome to the CLI Project Scaffolder
✔ What is the description of your project? A REST API for my app

Success! You've created my-api using the express-api template.
Your project lives at /Users/you/projects/my-api

Next steps:
  cd my-api
  npm install
  npm run dev
```

## Coming soon
- next-app
- django-api
- fullstack

## License

MIT