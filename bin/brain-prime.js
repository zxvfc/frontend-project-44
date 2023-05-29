#!/usr/bin/env node

import { printWelcome, askName, printGreeting } from '../src/cli.js';
import primeGame from '../src/games/prime.js';

printWelcome();
const name = askName();
printGreeting(name);
primeGame(name);
