#!/usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone https://github.com/br14nn/next-ts-template.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;
const deleteGitFolderCommand = `cd ${repoName} && rmdir /s /q .git`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log("");

console.log(`Installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(-1);

console.log(-1);

console.log(`Deleting .git folder in ${repoName} folder`);
const deleteGitFolder = runCommand(deleteGitFolderCommand);
if (!deleteGitFolder) process.exit(-1);

console.log("");

console.log("Congratulations! You are ready. Follow the following commands to start:");

console.log("");

console.log(`cd ${repoName} && npm run dev`);
