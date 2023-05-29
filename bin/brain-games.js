#!/usr/bin/env node

import { printWelcome, askName, printGreeting } from '../src/cli.js';

printWelcome();
const name = askName();
printGreeting(name);
