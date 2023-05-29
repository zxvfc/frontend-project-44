#!/usr/bin/env node

import { printWelcome, askName, printGreeting } from '../src/cli.js';
import progressionGame from '../src/games/progression.js';

printWelcome();
const name = askName();
printGreeting(name);
progressionGame(name);
