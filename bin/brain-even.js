#!/usr/bin/env node

import { printWelcome, askName, printGreeting } from '../src/cli.js';
import evenGame from '../src/games/even.js';

printWelcome();
const name = askName();
printGreeting(name);
evenGame(name);
