#!/usr/bin/env node

import { printWelcome, askName, printGreeting } from '../src/cli.js';
import calcGame from '../src/games/calc.js';

printWelcome();
const name = askName();
printGreeting(name);
calcGame(name);
