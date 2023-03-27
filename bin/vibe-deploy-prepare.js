#!/usr/bin/env node

import * as fs from "fs";
import { relative, resolve } from "path";

const args = process.argv.slice(2);

const scriptIndex = args.findIndex(
    x => x === 'build' || x === 'eject' || x === 'start' || x === 'test'
);

const script = scriptIndex === -1 ? args[0] : args[scriptIndex];

console.log('args '+args);

const localHelmDir = process.cwd() + "/.helm/";
const helmFilesLocation = process.cwd() + "/node_modules/test-nodejs-module/bin/";

if (!fs.existsSync(localHelmDir)) {
    fs.mkdirSync(localHelmDir, { recursive: true });
}

fs.copyFileSync(helmFilesLocation + "test.json", localHelmDir + "test.json");

console.log("hello first module");