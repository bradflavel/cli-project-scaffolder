import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function replacePlaceholders(content, replacements) {
  let updatedContent = content;

  for (const key in replacements) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    updatedContent = updatedContent.replace(regex, replacements[key]);
  }

  return updatedContent;
}

async function copyTemplateDir(sourceDir, targetDir, replacements) {
  await fs.mkdir(targetDir, { recursive: true });

  const entries = await fs.readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      await copyTemplateDir(sourcePath, targetPath, replacements);
    } else if (entry.isFile()) {
      const content = await fs.readFile(sourcePath, 'utf-8');
      const updatedContent = replacePlaceholders(content, replacements);
      await fs.writeFile(targetPath, updatedContent);
    }
  }
}

export async function generateProject(projectName, description, templateName) {
  const projectDir = path.join(process.cwd(), projectName);
  const templateDir = path.join(__dirname, '..', 'templates', templateName);

  const replacements = {
    PROJECT_NAME: projectName,
    DESCRIPTION: description,
  };

  await copyTemplateDir(templateDir, projectDir, replacements);

  return projectDir;
}