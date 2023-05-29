import readlineSync from 'readline-sync';

export const printWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const askName = () => readlineSync.question('May I have your name? ');

export const printGreeting = (name) => {
  console.log(`Hello! ${name}!`);
};
