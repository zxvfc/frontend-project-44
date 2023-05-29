#!/usr/bin/env node

import { printWelcome, askName, printGreeting } from '../src/cli.js';
import gdcGame from '../src/games/gcd.js';

printWelcome();
const name = askName();
printGreeting(name);
gdcGame(name);
