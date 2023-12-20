#!/usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const updateCommand = `npm update -g create-next-ts-template`;
const gitCheckoutCommand = `git clone https://github.com/br14nn/next-ts-template.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm i`;
const deleteGitFolderCommand = `cd ${repoName} && rmdir /s /q .git`;
const removeOriginUrlCommand = `cd ${repoName} && git remote remove origin`;

console.log(`Updating create-next-ts-template`);
const update = runCommand(updateCommand);
if (!update) process.exit(-1);

console.log("");

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log("");

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log("");

console.log(`Performing "rmdir /s /q .git`);
const deleteGitFolder = runCommand(deleteGitFolderCommand);
if (!deleteGitFolder) process.exit(-1);

console.log("");

console.log(`Performing "git remote remove origin"`);
const removeOriginUrl = runCommand(removeOriginUrlCommand);
if (!removeOriginUrl) process.exit(-1);

console.log("");

console.log("Congratulations! You are ready. Follow the following commands to start:");
console.log(`cd ${repoName} && npm run dev`);
